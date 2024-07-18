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
    data: ['2024.5.5', '5.15', '5.24', '6.2', '6.3', '6.5', '6.15', '6.30', '7.8', '7.12', '7.15', '7.18']
  },
  yAxis: {
    type: 'value',
    min: 70,
    axisLabel: {
      formatter: '{value} kg'
    }
  },
  series: [
    {
      type: 'line',
      data: [81.03, 79.81, 78.11, 79.37, 79.16, 79.85, 79.76, 80.12, 79, 77.71, 78.2, 78.95],
      smooth: true
    }
  ]
};

option && myChart.setOption(option);
});
