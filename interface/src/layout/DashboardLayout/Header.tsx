import React from 'react'
import Box from '@mui/material/Box'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'

const Header = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Breadcrumbs = styled(MuiBreadcrumbs)`
  .MuiBreadcrumbs-li {
    display: flex;
    align-items: center;
  }
  .MuiBreadcrumbs-separator {
    margin-left: 2px;
    margin-right: 2px;
  }
`

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

function MyHeader({ address }) {
  const breadcrumbs = [
    <Typography variant="caption" key="1" color="lightslategrey">
      Home
    </Typography>,
    <Typography variant="caption" key="2" color="text.primary">
      {address}
    </Typography>,
  ]
  return (
    <Header>
      <Stack direction="row">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', border: '2px solid #fff', borderRadius: '3px' }}>
            <Image
              height={42}
              width={42}
              src={`https://img.x2y2.io/v2/1/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${Math.floor(
                Math.random() * 10000
              )}/280/image.jpg`}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem',
            gap: '0.5rem',
          }}
        >
          <Stack spacing={0}>
            <Breadcrumbs
              sx={{ display: 'flex', alignItems: 'center' }}
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Bored Ape Yatch Club
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box
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
  )
}

export default MyHeader
