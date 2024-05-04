import warnings
warnings.filterwarnings('ignore')
import time
import akshare as ak
import numpy as np
import pandas as pd
import quantstats as qs
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import seaborn as sns

def stop(input_list, window_size, gain_threshold, loss_threshold, stop_period):
    for i in range(len(input_list)):
        if i >= window_size:
            window_sum = sum(input_list[i+1-window_size:i+1])
            if window_sum > gain_threshold:
                input_list.loc[input_list.index[i+1:i+1+stop_period]] = 0
            elif window_sum < loss_threshold:
                input_list.loc[input_list.index[i+1:i+1+stop_period]] = 0
    return input_list

def get_position():
    etf_data = {}
    etf_symbols = ['518880', '513100', '159915', '510880']
    window = 21

    # 获取 ETF 历史数据
    for symbol in etf_symbols:
        etf_df = ak.fund_etf_hist_em(symbol=symbol, period="daily", adjust='hfq')[['日期', '收盘']] \
                .rename(columns={'日期': 'date', '收盘': symbol}).set_index('date')
        etf_data[symbol] = etf_df

    # 合并数据并对齐
    data = pd.concat(list(etf_data.values()), axis=1).dropna()
    data.index = pd.to_datetime(data.index)

    # 计算每日涨跌幅和滚动收益率
    for symbol in etf_symbols:
        column_name = f"{symbol}"
        data[f"{column_name}_day_return"] = data[column_name].rolling(2).apply(lambda x: x[-1]/x[0]-1)
        data[f"{column_name}_return"] = data[column_name].rolling(window=window).apply(lambda x: x[-1]/x[0]-1)

    # 去掉缺失值
    data = data.dropna()

    signal_list = []
    prev_signal = None
    for i, (index, row) in enumerate(data.iterrows()):
        # 21日涨跌幅最大的基金
        tmp_signal = row[[f"{symbol}_return" for symbol in etf_symbols]].idxmax().split('_')[0]
        if i == 0:
            prev_signal = tmp_signal

        if tmp_signal != prev_signal:
            prev_ret = row[f"{prev_signal}_return"]
            tmp_ret = row[f"{tmp_signal}_return"]
            if np.abs(1-tmp_ret/prev_ret) > 1.71:
                prev_signal = tmp_signal

        signal_list.append(prev_signal)


    data['signal'] = signal_list
    nxt_day = data['signal'][-1]

    data['signal'] = data['signal'].shift(1)
    data = data.dropna()

    data['signal_day_return'] = data.apply(lambda row: row[f'{row["signal"]}_day_return'], axis=1)
    signal_day_return = data['signal_day_return'].copy()
    data['stop_gain_day_return'] = stop(signal_day_return, window_size=10, gain_threshold=0.2, 
                                        loss_threshold=-0.15, stop_period=10)
    
    if -0.15 < data['stop_gain_day_return'][:10].sum() < 0.2:
        return nxt_day, data
    else:
        print("清仓10天")

nxt_day, data = get_position()
if nxt_day:
    print(nxt_day)
