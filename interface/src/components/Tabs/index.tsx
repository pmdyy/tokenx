import React from 'react'
import styled from '@emotion/styled'
import Tabs from '@mui/material/Tabs'

interface StyledTabsProps {
  children?: React.ReactNode
  value: number
  variant: 'standard' | 'scrollable' | 'fullWidth' | undefined
  onChange: (event: React.SyntheticEvent, newValue: number) => void
  scrollButtons: boolean
  allowScrollButtonsMobile: boolean
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  // borderBottom: '1px solid #133153',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '3px',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    height: '10px',
    backgroundColor: '#3987e3',
    borderRadius: '3px 3px 0 0',
    transition: 'all 300ms cubic-bezier(0.85, 0.03, 0.06, 1.11) 0ms',
  },
  '& .MuiTabs-scrollButtons': {
    width: 20,
  },
})

export default StyledTabs
