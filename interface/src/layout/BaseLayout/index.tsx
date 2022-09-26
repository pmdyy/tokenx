import React, { ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
// import Box from '@mui/material/Box'
// import Header from 'components/Header'
const Box = dynamic(() => import('@mui/material/Box'), { ssr: true })
const Header = dynamic(() => import('components/Header'), { ssr: true })
import CollapsibleSidebar from 'components/Sidebar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'
import { Theme } from '@mui/material/styles'

interface Props {
  children: ReactNode
}

export interface IBaseLayout {
  getLayout: (page: React.ReactNode) => React.ReactNode
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  background: theme.palette.background.default;

  a {
    font-size: 1em;
    text-decoration: none;
    color: theme.palette.common.white;
  }
`

const BaseLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Container disableGutters>
        <Box>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  )
}

export const getLayout = (page) => <BaseLayout>{page}</BaseLayout>

export default BaseLayout
