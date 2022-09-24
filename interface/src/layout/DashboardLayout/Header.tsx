import React from 'react'
import TollIcon from '@mui/icons-material/Toll'
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
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
  )
}

export default MyHeader
