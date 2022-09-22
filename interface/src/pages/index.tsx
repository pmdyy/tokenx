import * as React from 'react'
import type { NextPage } from 'next'
import { Container, Typography, Stack, Button } from '@mui/material'
import { getLayout as getBaseLayout, IBaseLayout } from 'layout/BaseLayout'

const Index: NextPage & IBaseLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: { xs: 5, md: 10 } }}>
      <p>HomePage</p>
    </Container>
  )
}

Index.getLayout = getBaseLayout

export default Index
