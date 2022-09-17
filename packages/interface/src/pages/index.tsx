import * as React from 'react'
import type { NextPage } from 'next'
import { Container, Typography, Stack, Button } from '@mui/material'
import Layout from '../layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginTop: { xs: 5, md: 10 } }}></Container>
    </Layout>
  )
}

export default Home
