import React, { ReactNode, useState } from 'react'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { CSSTransition } from 'react-transition-group'
import styled from '@emotion/styled'
import Header from 'components/Header'
import CollapsibleSidebar from 'components/Sidebar'
import Drawer from '../components/Drawer'

interface Props {
  children: ReactNode
}

const Wrap = styled(Box)<{ theme?: Theme }>`
  display: grid;
  grid-template-areas: 'header header' 'content content';
  grid-template-columns: min-content 1fr;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: white;

  a {
    font-size: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

function Layout({ children }: Props) {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  )
}

export default Layout
