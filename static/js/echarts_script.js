// echarts_script.js

// import { name, dates, data_factor, data_etf, data_1A0300, data_1A0001 } from './config.js';
// import { accumulate } from './utils.js';

// config.js

const name = ['因子选股', 'ETF轮动', '沪深300', '上证指数'];
const dates = ['2024-04-01','2024-04-02'];
const data_factor = [1.64,1];
const data_etf = [0.57,1];
const data_1A0300 = [1.64,1];
const data_1A0001 = [1.19,1];

// utils.js
function accumulate(data) {
    return data.reduce((acc, currentValue, index) => {
        if (index === 0) {
            acc.push(currentValue);
        } else {
            acc.push(acc[index - 1] + currentValue);
        }
        return acc;
    }, []);
}

let result_factor = accumulate(data_factor);
let result_etf = accumulate(data_etf);
let result_1A0300 = accumulate(data_1A0300);
let result_1A0001 = accumulate(data_1A0001);

// 在页面加载完成后执行以下代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取图表容器
  var chartDom = document.getElementById('main');
  // 初始化 echarts 实例
  var myChart = echarts.init(chartDom);
  var option;

  // 配置项
  option = {
    title: {
      text: '收益曲线'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['因子选股', 'ETF轮动', '沪深300', '上证指数']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      boundaryGap: false,
      data: dates
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '因子选股',
        type: 'line',
        stack: null,
        data: [result_factor],
        smooth: true
      },
      {
        name: 'ETF轮动',
        type: 'line',
        stack: null,
        data: [result_etf],
        smooth: true
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: [result_1A0300],
        smooth: true
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: [result_1A0001],
        smooth: true
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
