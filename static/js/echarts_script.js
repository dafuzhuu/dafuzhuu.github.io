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
      data: ['我的组合', '沪深300', '上证指数', '创业板指', '金元顺安元启', '华商新趋势']
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
      data: ['2024.4', '2024.5']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '我的组合',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      },
      {
        name: '沪深300',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      },
      {
        name: '上证指数',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      },
      {
        name: '创业板指',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      },
      {
        name: '金元顺安元启',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      },
      {
        name: '华商新趋势',
        type: 'line',
        stack: null,
        data: [100, 100],
        smooth: true
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});
