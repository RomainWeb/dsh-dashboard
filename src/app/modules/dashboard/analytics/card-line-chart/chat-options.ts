import { format, subWeeks } from 'date-fns';

const xAxisData = [];
const sugar = [];
const noSugar = [];

for (let i = 0; i < 20; i++) {
  xAxisData.push(format(subWeeks(new Date(), i), 'LLL dd yyyy'));
  sugar.push(Math.floor(Math.random() * (80 - 40) + (40 + i)));
  noSugar.push(Math.floor(Math.random() * (40 - 0) + (0 + i)));
}

export const OPTIONS = {
  grid: {
  left: '10%' ,
  top: 60 ,
  right: '10%' ,
  bottom: 60 ,
  width: 'auto' ,
  height: 'auto' ,
  },
  legend: {
    data: ['With sugar', 'Without sugar'],
    align: 'left'
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    silent: false,
    splitLine: {
      show: false
    }
  },
  yAxis: {
  },
  series: [{
    name: 'With sugar',
    type: 'line',
    data: sugar,
    areaStyle: {},
    smooth: true,
    animationEasing: 'quarticIn',
    animationDelay: (idx) => {
      return idx * 100;
    }
  }, {
    name: 'Without sugar',
    type: 'line',
    data: noSugar,
    areaStyle: {},
    smooth: true,
    animationEasing: 'quarticIn',
    animationDelay: (idx) => {
      return idx * 100 + 50;
    }
  }],
  animationEasing: 'quarticOut',
  animationDelayUpdate: (idx) => {
    return idx * 10;
  }
};