import React from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone'
import TollIcon from '@mui/icons-material/Toll'
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import WalletTwoToneIcon from '@mui/icons-material/WalletTwoTone'
import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import { getLayout as getBaseLayout } from 'layout/BaseLayout'
import { useRouter } from 'next/router'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DashboardProvider, { Context as DashboardContext } from 'providers/DashboardProvider'
const Nav = dynamic(() => import('./Nav'), { ssr: true })
const Header = dynamic(() => import('./Header'), { ssr: true })

const Wrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1 auto;
  padding-bottom: 1rem;
`

const Body = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  width: 100%;
`

const BodyWrapper = styled(Box)<{ theme?: Theme }>`
  display: grid;
  width: 1700px;
  margin-bottom: 8rem;
  padding: 1rem;
  gap: 1rem;
`

export interface DashboardProps {
  children?: React.ReactNode
}

class DashboardLayout extends React.Component {
  static contextTypes: DashboardContext = {
    title: (PropTypes as any).string,
    address: (PropTypes as any).string || undefined,
  }
  render() {
    const { title, address } = this.context as DashboardContext
    const { children } = this.props as DashboardProps
    return (
      <Wrapper>
        <Header address={address} />
        <Nav />
        <Body>
          <BodyWrapper>{children}</BodyWrapper>
        </Body>
      </Wrapper>
    )
  }
}

export const getLayout = (page, props?) => {
  return getBaseLayout(
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}

export default DashboardLayout
