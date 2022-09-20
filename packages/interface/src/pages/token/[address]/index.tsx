import React, { Suspense } from 'react'
import Card from 'components/Card'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
// import DataGrid from 'components/DataGrid'
const DataGrid = dynamic(() => import('components/DataGrid'), {
  suspense: true,
})

const TokenOverview = () => (
  <>
    <Card>
      <Suspense fallback={`Loading...`}>
        <DataGrid />
      </Suspense>
    </Card>
  </>
)

TokenOverview.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenOverview
