// echarts_script.js

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
      data: ['我的组合', '沪深300', '上证指数', '金元顺安元启', '万家宏观择时A']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      boundaryGap: false,
      data: ['2024-04-01']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '我的组合',
        type: 'line',
        stack: null,
        data: [1.64],
        smooth: true
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: [1.64],
        smooth: true
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: [1.19],
        smooth: true
      },
      {
        name: '金元顺安元启',
        type: 'line',
        stack: null,
        data: [1.82],
        smooth: true
      },
      {
        name: '万家宏观择时A',
        type: 'line',
        stack: null,
        data: [-1.42],
        smooth: true
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
