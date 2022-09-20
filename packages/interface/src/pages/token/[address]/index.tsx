import React from 'react'
import { getLayout } from 'layout/DashboardLayout'

const TokenOverview = () => (
  <div>
    <h1>TokenOverview</h1>
    <p>Overview</p>
  </div>
)

TokenOverview.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenOverview
