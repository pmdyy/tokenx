import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone'

const Header = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

function MyHeader({ address }) {
  return (
    <Header>
      <Stack direction="row">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 64,
            height: 64,
          }}
        >
          <Box sx={{ display: 'flex', border: '2px solid #fff', borderRadius: '3px'}}>
            <Image height={42} width={42} src={`https://img.x2y2.io/v2/1/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${Math.floor(Math.random() * 10000)}/280/image.jpg`} />
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
            <>
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                Bored Ape Yatch Club
              </Typography>
            </>
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
  )
}

export default MyHeader
