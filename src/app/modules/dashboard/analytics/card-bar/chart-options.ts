export const OPTIONS = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}'
  },
  legend: {
    orient: 'horizontal',
    data: ['Industrial', 'Commercial', 'Public', 'Residential', 'Other'],
    align: 'auto'
  },
  xAxis: {
    type: 'category',
    data: ['EMEA', 'NORAM', ' APAC']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [456, 540, 823],
    name: 'Industrial',
    type: 'bar'
  },
  {
    data: [235, 387, 412],
    name: 'Commercial',
    type: 'bar'
  },
  {
    data: [89, 187, 276],
    name: 'Public',
    type: 'bar'
  },
  {
    data: [387, 743, 432],
    name: 'Residential',
    type: 'bar'
  },
  {
    data: [154, 365, 287],
    name: 'Other',
    type: 'bar'
  }],
};