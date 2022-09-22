import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 360,
        padding: '1rem',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        sx={{
          fontSize: 12,
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'lightslategray',
        }}
        variant="body1"
      >
        Featured
      </Typography>
      <List>
        <Stack>
          {['Homepage', 'Address Profiler', 'NFT Analyzer', 'ETH Tracker'].map((text, index) => (
            <Link href="/address-profiler/0x38437283467" key={index}>
              <ListItem
                key={text}
                sx={{
                  borderBottom: '1px solid #133153',
                  ':last-child': {
                    border: 0,
                  },
                  '& .Mui-selected': {
                    backgroundColor: 'red',
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    padding: 0.75,
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      variant: 'inherit',
                      sx: {
                        fontSize: 14,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </Stack>
      </List>
    </Box>
  )

  return (
    <Box sx={{ borderRight: '1px solid #133153' }}>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Open Menu" placement="right" arrow>
            <IconButton size="large" color="inherit" onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Drawer
            PaperProps={{
              elevation: 0,
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                padding: '12px 16px',
                borderBottom: '1px solid #133153',
              }}
            >
              <Stack alignItems="center" justifyContent="space-between" direction="row">
                <Typography sx={{ fontWeight: '500' }}>Menu</Typography>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <CloseTwoToneIcon sx={{ color: 'rgb(51, 153, 255)' }} />
                </IconButton>
              </Stack>
            </Box>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  )
}
