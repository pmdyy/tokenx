import React, { ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
// import Box from '@mui/material/Box'
// import Header from 'components/Header'
const Box = dynamic(() => import('@mui/material/Box'), { ssr: true })
const Header = dynamic(() => import('components/Header'), { ssr: true })
import CollapsibleSidebar from 'components/Sidebar'
import MuiContainer from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'
import { Theme } from '@mui/material/styles'

interface Props {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export interface IBaseLayout {
  getLayout: (page: React.ReactNode) => React.ReactNode
}

const Container = styled(MuiContainer)`
  max-width: 1024px;
  padding-top: 24px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const BaseLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth={false} disableGutters>
        <Box>{children}</Box>
      </Container>
    </React.Fragment>
  )
}

export const getLayout = (page) => <BaseLayout>{page}</BaseLayout>

export default BaseLayout
