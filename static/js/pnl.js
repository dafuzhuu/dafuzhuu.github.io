// echarts_script.js

// 数据
const name = ['ETF动量', '上证指数', '景顺沪港深精选'];
const dates = ['2024-06-21', '2024-06-20', '2024-06-19', '2024-06-18', '2024-06-17', '2024-06-14', '2024-06-13', '2024-06-12','2024-06-11', '2024-06-07', '2024-06-06', '2024-06-05', '2024-06-04', '2024-06-03', '2024-05-31', '2024-05-30', '2024-05-29', '2024-05-28', '2024-05-27', '2024-05-24', '2024-05-23', '2024-05-22', '2024-05-21'];
const data_etf_1 = [-0.99, 0.35, 0.23, 0.26, -0.82, 0.35, -0.20, 0.74, -0.82, 0.31, 1.00, 0.04, 0.23, -0.72, 0.05, -0.92, -0.56, -0.31, 0.95, -0.84, -0.02, 0.24, -0.03];  // 我的
const data_1A0001 = [-0.24, -0.42, -0.40, 0.48, -0.55, 0.12, -0.28, 0.31, -0.76, 0.08, -0.54, -0.83, 0.41, -0.27, -0.16, -0.62, 0.05, -0.46, 1.14, -0.88, -1.33, 0.02, -0.42];  // 上证
const data_000979 = [-0.92, 0.44, 0.80, -0.09, -0.75, 0.13, -0.26, 0.40, -1.17, 0.31, 1.06, -1.00, 0.53, 0.35, -0.39, -1.30, 0.35, -0.17, 1.54, 0.09, -0.92, -0.74, -1.45];  // 景顺

// 累乘函数
function accumulate(inputArray) {
    let resultArray = [];
    let product = 1;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== null) {
            product *= (1 + 0.01 * inputArray[i]);
            resultArray.push(((product - 1) * 100).toFixed(2));
        } else {
            resultArray.push(null);
        }
    }
    return resultArray;
}

let result_etf_1 = accumulate(data_etf_1.slice().reverse());
let result_1A0001 = accumulate(data_1A0001.slice().reverse());
let result_000979 = accumulate(data_000979.slice().reverse());

// 在页面加载完成后执行以下代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取图表容器
  var chartDom = document.getElementById('pnl');
  // 初始化 echarts 实例
  var myChart = echarts.init(chartDom, 'customed');
  var option;

  // 配置项
  option = {
    title: {
        text: '实盘'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['ETF动量', '上证指数', '景顺沪港深精选'],
      selected: {
          '因子选股1.0': false,
          '景顺沪港深精选': false
      }
    },
    // dataZoom: [
    //   {
    //       type: 'slider',
    //       xAxisIndex: 0,
    //       filterMode: 'none',
    //       handleSize: 22
    //   },
    //   {
    //       type: 'inside',
    //       xAxisIndex: 0,
    //       filterMode: 'none'
    //   }
    // ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      data: dates.slice().reverse()
    },
    yAxis: {
      type: 'value',
      axisLabel: {formatter: '{value}%'}
    },
    series: [
      {
        name: 'ETF动量',
        type: 'line',
        data: result_etf_1,
        showSymbol: false
      },
      {
        name: '上证指数',
        type: 'line',
        data: result_1A0001,
        showSymbol: false
      },
      {
        name: '景顺沪港深精选',
        type: 'line',
        data: result_000979,
        showSymbol: false
      }
    ]
  };

  // 设置配置项并渲染图表
  option && myChart.setOption(option);
});



// 定制主题
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('customed', {
        "color": [
            "rgb(38,70,83)",
            "rgb(230,111,81)",
            "rgb(42,157,142)",
            "rgb(243,162,97)",
            "rgb(233,196,107)",
            "rgb(144,201,231)",
            "rgb(33,158,188)",
            "#9a60b4",
            "#ea7ccc"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#464646"
            },
            "subtextStyle": {
                "color": "#6e7079"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#eb5454",
                "color0": "#47b262",
                "borderColor": "#eb5454",
                "borderColor0": "#47b262",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "rgb(38,70,83)",
                "rgb(230,111,81)",
                "rgb(42,157,142)",
                "rgb(243,162,97)",
                "rgb(233,196,107)",
                "rgb(144,201,231)",
                "rgb(33,158,188)",
                "#9a60b4",
                "#ea7ccc"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#6E7079"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#6E7079"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#E0E6F1"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#dae1f5",
                "width": 2
            },
            "itemStyle": {
                "color": "#a4b1d7",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#a4b1d7",
                "borderColor": "#a4b1d7",
                "borderWidth": 1
            },
            "checkpointStyle": {
                "color": "#316bf3",
                "borderColor": "#ffffff"
            },
            "label": {
                "color": "#a4b1d7"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#ffffff"
                },
                "controlStyle": {
                    "color": "#a4b1d7",
                    "borderColor": "#a4b1d7",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#a4b1d7"
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "handleSize": "undefined%",
            "textStyle": {}
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    });
}));
