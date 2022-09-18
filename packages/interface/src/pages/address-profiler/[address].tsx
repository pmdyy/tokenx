import React from 'react'
import dynamic from 'next/dynamic'
import { Theme } from '@mui/material'
import { withRouter } from 'next/router'
import Box from '@mui/material/Box'
import Card from 'components/Card'
import ThresholdChart from 'components/ThresholdChart'
import V1Layout from 'layout/V1Layout'
const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })

export default withRouter<any>(({ router }) => {
  const { address } = router.query
  const layouts = [
    // { i: 'a', x: 0, y: 0, w: 1, h: 10 },
    { i: 'a', x: 0, y: 1, w: 3, h: 22 },
    { i: 'b', x: 0, y: 1, w: 3, h: 22 },
  ]
  return (
    <V1Layout title={'NFT Vision'} address={address}>
      {layouts.map((item) => (
        <Card key={item.i} data-grid={item}>
          <DataGrid />
        </Card>
      ))}
    </V1Layout>
  )
})
