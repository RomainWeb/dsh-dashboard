export const OPTIONS = {
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 10,
      data: ['EMEA', 'NORAM', 'APAC']
  },
  series: [
      {
          name: 'Carbon dioxide',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: true,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 1234, name: 'EMEA'},
              {value: 3456, name: 'NORAM'},
              {value: 6432, name: 'APAC'},
          ]
      }
  ]
};