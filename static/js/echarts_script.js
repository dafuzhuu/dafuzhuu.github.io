// echarts_script.js

// 数据
const name = ['因子选股', 'ETF轮动', '沪深300', '上证指数', '金元顺安元启'];
const dates = ['2024-04-01', '2024-04-02', '2024-04-03'];
const data_factor = [1.64, 1.93, 1.15];
const data_etf = [0.57, 0.08, 1.40];
const data_1A0300 = [1.64, -0.42, -0.36];
const data_1A0001 = [1.19, -0.08, -0.18];
const data_004685 = [1.82, 0.28, 0.41];

// 累乘函数
function accumulate(inputArray) {
    let resultArray = [];
    let product = 1;
    for (let i = 0; i < inputArray.length; i++) {
        product *= (1 + 0.01 * inputArray[i]);
        resultArray.push(((product - 1)*100).toFixed(2));
    }
    return resultArray;
}

let result_factor = accumulate(data_factor);
let result_etf = accumulate(data_etf);
let result_1A0300 = accumulate(data_1A0300);
let result_1A0001 = accumulate(data_1A0001);
let result_004685 = accumulate(data_004685);

// 在页面加载完成后执行以下代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取图表容器
  var chartDom = document.getElementById('main');
  // 初始化 echarts 实例
  var myChart = echarts.init(chartDom, 'roma');
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
      data: ['因子选股', 'ETF轮动', '沪深300', '上证指数', '金元顺安元启']
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
        data: result_factor
      },
      {
        name: 'ETF轮动',
        type: 'line',
        stack: null,
        data: result_etf
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: result_1A0300
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: result_1A0001
      },
      {
        name: '金元顺安元启',
        type: 'line',
        stack: null,
        data: result_004685
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
