import React from 'react'
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })
import Card from 'components/Card'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'

const TokenOverview = () => (
  <div>
    <Card>
      <DataGrid />
    </Card>
  </div>
)

TokenOverview.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenOverview
