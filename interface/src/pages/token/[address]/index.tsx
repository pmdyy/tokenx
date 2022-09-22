import React, { Suspense } from 'react'
import Card from 'components/Card'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })

const TokenOverview = () => (
  <>
    {[...Array(1)].map((_, i) => (
      <Card key={i}>
        <p>Hi</p>
      </Card>
    ))}
  </>
)

TokenOverview.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenOverview
