import React from 'react'
import Card from 'components/Card'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
import DataGrid from 'components/DataGrid'

const TokenOverview = () => (
  <>
    <Card>
      <DataGrid />
    </Card>
    <Card>
      <DataGrid />
    </Card>
  </>
)

TokenOverview.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenOverview
