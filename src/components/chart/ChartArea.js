import { merge } from 'lodash'
import ReactApexChart from 'react-apexcharts'
//
import BaseOptionChart from './BaseOptionChart'

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'Pending Order', data: [31, 40, 28, 51, 42, 109, 100] },
  { name: 'Processing Order', data: [11, 32, 45, 32, 34, 52, 30] },
  { name: 'Delivered Order', data: [20, 32, 60, 32, 14, 50, 80] },
  { name: 'Canceled Order', data: [1, 50, 0, 20, 41, 12, 5] },
]

export default function ChartArea() {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: { x: { format: 'dd/MM/yy HH:mm' } },
  })

  return (
    <ReactApexChart
      type="area"
      series={CHART_DATA}
      options={chartOptions}
      height={320}
    />
  )
}
