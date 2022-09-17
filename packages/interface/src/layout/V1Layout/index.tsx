import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import '../../../node_modules/react-grid-layout/css/styles.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from 'components/Card'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import Layout from 'layout'
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone'
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Tab from 'components/Tab'
import Tabs from 'components/Tabs'
import ThresholdChart from 'components/ThresholdChart'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import WalletTwoToneIcon from '@mui/icons-material/WalletTwoTone'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { Theme } from '@mui/material'
import { useRouter } from 'next/router'

const V1LayoutWrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-area: content/content/content/content;
  flex: 1 auto;
  height: 100vh;
  overflow-y: auto;

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

const V1LayoutHeader = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
`

function V1LayoutNav() {
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
        <Tab label="Overview" />
        <Tab label="Counterparts" />
        <Tab label="NFTs" />
      </Tabs>
    </Box>
  )
}

const ResponsiveGridLayout = WidthProvider(Responsive)

export default function V1Layout({ title, address, children }) {
  return (
    <Layout>
      <V1LayoutWrapper>
        <V1LayoutHeader>
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
              <WalletTwoToneIcon />
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
              <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
              <InfoTwoToneIcon sx={{ color: 'lightslategray' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: '1px solid #133153',
                padding: '0 1rem',
                gap: '0.5rem',
                '&:hover': {
                  backgroundColor: 'rgba(51, 153, 255, 0.24)',
                  color: 'white',
                },
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                {address ? (
                  `${address.toString().substring(0, 6)}...${address
                    .toString()
                    .substring(address.toString().length - 5, address.toString().length)}`
                ) : (
                  <Skeleton animation="wave" width={110} />
                )}
              </Typography>
              <ModeEditOutlineTwoToneIcon sx={{ color: 'lightslategray' }} />
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
        </V1LayoutHeader>
        <V1LayoutNav />
        <ResponsiveGridLayout
          className="layout"
          cols={{ lg: 3, md: 3, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={20}
          margin={[20, 20]}
          measureBeforeMount={true}
          isResizable={false}
          isDraggable={false}
          useCSSTransforms={false}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        >
          {children}
        </ResponsiveGridLayout>
      </V1LayoutWrapper>
    </Layout>
  )
}
