import React from 'react'
import type { NextPage } from 'next'
import { getLayout as getBaseLayout, IBaseLayout } from 'layout/BaseLayout'

const Index: NextPage & IBaseLayout = () => {
  return <p>HomePage</p>
}

Index.getLayout = getBaseLayout

export default Index
