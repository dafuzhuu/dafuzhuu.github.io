document.addEventListener('DOMContentLoaded', function() {
var chartDom = document.getElementById('weight');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Weight record'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2024.5.5', '5.15', '5.24', '6.2']
  },
  yAxis: {
    type: 'value',
    min: 70
  },
  series: [
    {
      type: 'line',
      data: [81.03, 79.81, 78.11, 79.37],
      smooth: true
    }
  ]
};

option && myChart.setOption(option);
});
