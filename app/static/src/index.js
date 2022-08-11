var dom1 = document.getElementById('light-chart');
let dom2 = document.getElementById('fan-chart');
var lightChart = echarts.init(dom1);
let fanChart = echarts.init(dom2);
var app = {};
// option = null;

console.log(dom1, dom2);

let generalOption = {
  title: {
    text: 'EChart Guage',
    left: 'center',
  },
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      progress: {
        show: false,
        width: 10,
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 10,
          color: [
            [0.4, '#ca583f'],
            [0.6, '#FDDD60'],
            [1, '#58D9F9'],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 0,
          color: '#999',
        },
      },
      axisLabel: {
        show: false,
        distance: 5,
        color: '#999',
        fontSize: 14,
      },
      pointer: {
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '85%',
        width: 6,
        offsetCenter: [0, '0'],
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 10,
        itemStyle: {
          borderWidth: 3,
        },
      },
      detail: {
        show: false,
        valueAnimation: true,
        fontSize: 30,
        offsetCenter: [0, '20%'],
      },
      data: [
        {
          value: 90,
        },
      ],
    },
  ],
};

let lightOption = {
  ...generalOption,
  title: { ...generalOption.title, text: 'Light Guage' },

  series: [{ ...generalOption.series[0], data: [{ value: 80 }] }],
};
let fanOption = {
  ...generalOption,
  title: { ...generalOption.title, text: 'Fan Guage' },
  series: [{ ...generalOption.series[0], data: [{ value: 20 }] }],
};

if (lightOption && typeof lightOption === 'object') {
  lightChart.setOption(lightOption, true);
}

if (fanOption && typeof fanOption === 'object') {
  fanChart.setOption(fanOption, true);
}
