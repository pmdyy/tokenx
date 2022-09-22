import React, { useState, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ArrowRight from '@mui/icons-material/ArrowRight'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Home from '@mui/icons-material/Home'
import Settings from '@mui/icons-material/Settings'
import People from '@mui/icons-material/People'
import PermMedia from '@mui/icons-material/PermMedia'
import Dns from '@mui/icons-material/Dns'
import TravelExplore from '@mui/icons-material/TravelExplore'
import CloseIcon from '@mui/icons-material/Close'
import MenuOpen from '@mui/icons-material/MenuOpen'
import Menu from '@mui/icons-material/Menu'
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone'
import styled from '@emotion/styled'

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <TravelExplore />, label: 'Hosting' },
]

const SidebarContainer = styled(Box)<{ theme?: Theme }>`
  display: flex;
  position: relative;
  flex-direction: column;
  left: 0;
  height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-right: 1px solid ${({ theme }) => theme.colors.lightBlue};
  overflow-y: auto;
  z-index: 10;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

const SidebarHeader = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #133153;
  padding: 0 4px;
`

const SidebarBody = styled(Box)<{ theme?: Theme }>`
  height: 100vh;
  overflow-y: auto;
  z-index: 10;

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

interface SidebarGroupProps {
  title: string
}

interface CollapsedSidebarProps {
  onClick: () => void
}

interface SidebarProps {
  onClick: () => void
}

function SidebarGroup({ title }: SidebarGroupProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <Box>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          alignItems: 'center',
          '& svg': { opacity: 1 },
        }}
      >
        <TravelExplore
          sx={{
            fontSize: 'medium',
            color: 'rgb(51, 153, 255)',
            ml: -2,
            mr: 1.5,
          }}
        />
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontSize: 13,
            fontWeight: 'medium',
            lineHeight: '20px',
          }}
        />
        <KeyboardArrowDown
          sx={{
            fontSize: 'medium',
            color: 'rgb(51, 153, 255)',
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(0)' : 'rotate(-90deg)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      {open &&
        data.map((item) => (
          <ListItemButton key={item.label} sx={{ px: 4.5, minHeight: 32 }}>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 13,
                fontWeight: '500',
                color: 'rgb(178, 186, 194)',
              }}
            />
          </ListItemButton>
        ))}
    </Box>
  )
}

function CollapsedSidebar({ onClick }: CollapsedSidebarProps) {
  return (
    <SidebarContainer sx={{ padding: 0.75 }}>
      <Tooltip title="Open Menu" placement="right" arrow>
        <IconButton color="inherit" sx={{ color: 'white' }} onClick={onClick}>
          <Menu />
        </IconButton>
      </Tooltip>
    </SidebarContainer>
  )
}

function Sidebar({ onClick }: SidebarProps) {
  return (
    <SidebarContainer sx={{ width: '262px' }}>
      <SidebarHeader sx={{ padding: 0.5 }}>
        <Tooltip title="Collapse Menu" placement="right" arrow>
          <IconButton sx={{ color: 'white' }} onClick={onClick}>
            <MenuOpenTwoToneIcon />
          </IconButton>
        </Tooltip>
      </SidebarHeader>
      <SidebarBody>
        <SidebarGroup title={'Featured'} />
        <SidebarGroup title={'Tracker'} />
        <SidebarGroup title={'Build'} />
        <SidebarGroup title={'Build'} />
        <SidebarGroup title={'Build'} />
        <SidebarGroup title={'Build'} />
        <SidebarGroup title={'Build'} />
      </SidebarBody>
    </SidebarContainer>
  )
}

function CollapsibleSidebar() {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      {collapsed ? (
        <CollapsedSidebar onClick={() => setCollapsed(!collapsed)} />
      ) : (
        <Sidebar onClick={() => setCollapsed(!collapsed)} />
      )}
    </>
  )
}

export default CollapsibleSidebar
