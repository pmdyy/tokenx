import React, { Suspense } from 'react'
import Card from 'components/Card'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })

const TokenOverview = () => {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <DataGrid key={i} title={'Ether Flow Activity'} loading={false} />
      ))}
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
