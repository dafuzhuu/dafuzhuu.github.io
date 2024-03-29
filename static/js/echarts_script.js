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
      data: ['我的组合', '沪深300', '上证指数', '纳斯达克', '日经225']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2024.4', '5', '6', '7', '8', '9', '10', '11', '12', '2025.1']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '我的组合',
        type: 'line',
        stack: null,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      },
      {
        name: '纳斯达克',
        type: 'line',
        stack: null,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      },
      {
        name: '日经225',
        type: 'line',
        stack: null,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
