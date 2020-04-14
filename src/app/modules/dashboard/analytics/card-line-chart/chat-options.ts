import { format, subWeeks, subYears } from 'date-fns';
import { reverse } from 'lodash';

const xAxisData = [];
const emea = [];
const apac = [];
const noram = [];

for (let i = 0; i < 10; i++) {
  xAxisData.push(format(subYears(new Date(), i), 'yyyy'));
  emea.push(Math.floor(Math.random() * (40 - 20) + (10 + i)));
  apac.push(Math.floor(Math.random() * (40 - 20) + (10 + i)));
  noram.push(Math.floor(Math.random() * (40 - 20) + (15 + i)));
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
    data: ['EMEA', 'APAC', 'NORAM'],
    align: 'left'
  },
  tooltip: {},
  xAxis: {
    data: reverse(xAxisData),
    silent: false,
    splitLine: {
      show: false
    }
  },
  yAxis: {
  },
  series: [{
    name: 'EMEA',
    type: 'line',
    data: emea,
    areaStyle: {},
    // smooth: true,
    animationEasing: 'quarticIn',
    animationDelay: (idx) => {
      return idx * 100;
    }
  },
  {
    name: 'APAC',
    type: 'line',
    data: apac,
    areaStyle: {},
    // smooth: true,
    animationEasing: 'quarticIn',
    animationDelay: (idx) => {
      return idx * 100 + 50;
    }
  },
  {
    name: 'NORAM',
    type: 'line',
    data: noram,
    areaStyle: {},
    // smooth: true,
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