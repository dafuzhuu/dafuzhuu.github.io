// echarts_script.js

// 数据
const name = ['因子选股', 'ETF轮动', '沪深300', '上证指数', '金元顺安元启'];
const dates = ['2024-04-01', '2024-04-02'];
const data_factor = [1.64, 1.93];
const data_etf = [0.57, 0.08];
const data_1A0300 = [1.64, -0.42];
const data_1A0001 = [1.19, -0.08];
const data_004685 = [1.82, 0.28];

// 累加函数
function accumulate(inputArray) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        // 使用 toFixed() 方法将 sum 四舍五入到小数点后两位，并将其转换为字符串
        // 然后再使用 parseFloat() 方法将其转换为浮点数
        // 这样可以保留两位小数
        result.push(parseFloat(sum.toFixed(2)));
    }
    return result;
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
        data: result_factor,
        smooth: true
      },
      {
        name: 'ETF轮动',
        type: 'line',
        stack: null,
        data: result_etf,
        smooth: true
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: result_1A0300,
        smooth: true
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: result_1A0001,
        smooth: true
      },
      {
        name: '金元顺安元启',
        type: 'line',
        stack: null,
        data: result_004685,
        smooth: true
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
