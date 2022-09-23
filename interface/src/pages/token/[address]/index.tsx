import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getLayout } from 'layout/DashboardLayout'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
const DataCard = dynamic(() => import('components/DataCard'), { ssr: true })
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })

const TokenOverview = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataCard title={'Overview'} />
            </Grid>
            <Grid item xs={12}>
              <DataCard title={'Holder Stats'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <DataGrid title={'Cheap Skates'} loading={false} />
        </Grid>
        <Grid item xs={12} md={12}>
          <DataGrid title={'Mint Phase'} loading={false} />
        </Grid>
      </Grid>
    </Box>
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
