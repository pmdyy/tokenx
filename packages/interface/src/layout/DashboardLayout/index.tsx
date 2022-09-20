import React from 'react'
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
import Tab from 'components/Tab'
import Tabs from 'components/Tabs'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import WalletTwoToneIcon from '@mui/icons-material/WalletTwoTone'
import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import { getLayout as getBaseLayout } from 'layout/BaseLayout'
import { useRouter } from 'next/router'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DashboardProvider, { Context as DashboardContext } from 'providers/DashboardProvider'

const Wrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-area: content/content/content/content;
  flex: 1 auto;
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #081422;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(89, 106, 118);
    outline: none;
    border-radius: 4px;
  }
`

const Header = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
`

const Body = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  width: 100%;
`

const BodyWrapper = styled(Box)`
  display: grid;
  width: 1700px;
  padding: 2em;
  gap: 2rem;
  margin-bottom: 4em;
`

const Nav = () => {
  const router = useRouter()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs"
      >
        <Tab label="Overview" onClick={() => router.push('/token/0x132784537')} />
        <Tab label="Scavenger" onClick={() => router.push('/token/0x132784537/scavenger')} />
      </Tabs>
    </Box>
  )
}

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
        <Header>
          <Stack direction="row">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 64,
                height: 64,
                borderRight: '1px solid #133153',
              }}
            >
              <TollIcon />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: '1px solid #133153',
                padding: '0 1rem',
                gap: '0.5rem',
              }}
            >
              {address ? (
                <>
                  <Typography sx={{ fontWeight: 700 }}>
                    {address.toString().substring(0, 6)}...
                    {address.toString().substring(address.toString().length - 5, address.toString().length)}
                  </Typography>
                </>
              ) : (
                <Skeleton animation="wave" width={130} />
              )}
            </Box>
          </Stack>
          <Box
            px={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Tooltip title="Refresh" placement="bottom" arrow>
              <IconButton>
                <RefreshTwoToneIcon sx={{ color: 'lightslategray' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Configure" placement="bottom" arrow>
              <IconButton>
                <SettingsTwoToneIcon sx={{ color: 'lightslategray' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Header>
        <Nav />
        <Body>
          <BodyWrapper>{children}</BodyWrapper>
        </Body>
      </Wrapper>
    )
  }
}

export const getLayout = (page, props) => {
  return getBaseLayout(
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}

export default DashboardLayout
