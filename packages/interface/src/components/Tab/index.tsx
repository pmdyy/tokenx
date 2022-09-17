import React from 'react'
import styled from '@emotion/styled'
import Tab from '@mui/material/Tab'

interface StyledTabProps {
  label: string
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: '700',
  fontSize: 13,
  color: 'lightslategray',
  '& .MuiTabScrollButton': {
    backgroundColor: '#fff',
  },
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}))

export default StyledTab