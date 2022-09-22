import React from 'react'
import type { NextPage } from 'next'
import { getLayout } from 'layout/DashboardLayout'
import { getLayout as getBaseLayout, type IBaseLayout } from 'layout/BaseLayout'

const TokenScavenger: NextPage & IBaseLayout = () => (
  <div>
    <h1>TokenScavenger</h1>
    <p>Scavenger</p>
  </div>
)

TokenScavenger.getLayout = (page) => getLayout(page, { title: 'Token', address: '0x123' })

export default TokenScavenger
