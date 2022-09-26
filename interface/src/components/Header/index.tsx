import React, { useEffect, useState, ReactNode } from 'react'
// const WalletModal = dynamic(() => import('components/WalletModal'), { ssr: true })
// import Chip from '@mui/material/Chip'
const Chip = dynamic(() => import('@mui/material/Chip'), { ssr: true })
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import IconButton from '@mui/material/IconButton'
import Link, { LinkProps } from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import WalletModal from 'components/WalletModal'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Theme } from '@mui/material/styles'
import { createSvgIcon } from '@mui/material/utils'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar variant='dense'>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar variant='dense'/>
    </React.Fragment>
  )
}