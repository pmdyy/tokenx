import React from 'react'
import { Theme } from '@mui/material'
import { withRouter } from 'next/router'
import Box from '@mui/material/Box'
import Card from 'components/Card'
import ThresholdChart from 'components/ThresholdChart'
import DataGrid from 'components/DataGrid'
import V1Layout from 'layout/V1Layout'

export default withRouter<any>(({ router }) => {
  const { address } = router.query
  const layouts = [
    { i: 'a', x: 0, y: 0, w: 3, h: 20 },
    // { i: 'b', x: 1, y: 0, w: 2, h: 10 },
  ]
  return (
    <V1Layout title={'NFT Vision'} address={address}>
      {layouts.map((item) => (
        <Box sx={{ display: 'flex' }} key={item.i} data-grid={item}>
          <Card key={item.i} data-grid={item}>
            <DataGrid />
          </Card>
        </Box>
      ))}
    </V1Layout>
  )
})
