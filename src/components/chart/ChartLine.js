import { merge } from 'lodash'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import BaseOptionChart from './BaseOptionChart'
import { CATEGORY_OPTION_ARRAY } from 'constant/product'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const CHART_DATA = [{ name: 'Order', data: [0, 1, 2, 8, 4, 5] }]

export default function ChartLine() {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: CATEGORY_OPTION_ARRAY,
    },
  })

  return isBrowser ? (
    <ReactApexChart
      type="line"
      series={CHART_DATA}
      options={chartOptions}
      height={320}
    />
  ) : null
}
