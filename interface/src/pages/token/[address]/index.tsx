import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
const DataCard = dynamic(() => import('components/DataCard'), { ssr: true })
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })

const TokenOverview = () => {
  return (
    <>
      <DataCard title={'Overview'} />
      <DataGrid title={'Ether Flow Activity'} loading={false} />
    </>
  )
}

TokenOverview.getInitialProps = async ({ query }) => {
  const { address } = query
  return {
    address: address,
  }
}

TokenOverview.getLayout = (page) => getLayout(page)

export default TokenOverview
