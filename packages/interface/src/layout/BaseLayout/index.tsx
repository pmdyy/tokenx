import React, { ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import CollapsibleSidebar from 'components/Sidebar'
import Container from '@mui/material/Container'
import Header from 'components/Header'
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

const BaseLayout = ({ children }: Props) => {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  )
}

export const getLayout = (page) => <BaseLayout>{page}</BaseLayout>

export default BaseLayout
