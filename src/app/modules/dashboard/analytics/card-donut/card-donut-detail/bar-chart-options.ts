export const OPTIONS = {
  grid: {
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{c}'
  },
  xAxis: {
    type: 'category',
    data: [],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(220, 220, 220, 0.8)'
    }
  }]
};
