import React from 'react'
import dynamic from 'next/dynamic'
import { Theme } from '@mui/material'
import { withRouter } from 'next/router'
import Box from '@mui/material/Box'
import Card from 'components/Card'
import ThresholdChart from 'components/ThresholdChart'
import V1Layout from 'layout/V1Layout'
// const DataGrid = dynamic(() => import('components/DataGrid'), { ssr: true })
import DataGrid from 'components/DataGrid'

export default withRouter<any>(({ router }) => {
  const { address } = router.query
  const layouts = [
    { i: 'a', x: 0, y: 1, w: 3, h: 12 },
    { i: 'b', x: 0, y: 1, w: 3, h: 12 },
  ]
  const ref = React.createRef()
  return (
    <V1Layout title={'NFT Vision'} address={address}>
      <div
        style={{
          display: 'grid',
          padding: '2rem',
          gap: '2rem',
          maxWidth: '1500px',
          width: '100%',
          marginBottom: '10rem',
        }}
      >
        {layouts.map((item) => (
          <Card key={item.i}>
            <DataGrid />
          </Card>
        ))}
      </div>
    </V1Layout>
  )
})
