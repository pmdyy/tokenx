import React from 'react'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Tab from 'components/Tab'
import Tabs from 'components/Tabs'

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
        aria-label="force tabs"
        variant={'standard'}
        scrollButtons={false}
        allowScrollButtonsMobile={false}
      >
        <Tab label="Overview" onClick={() => router.push('/token/0x132784537')} />
        <Tab label="Scavenger" onClick={() => router.push('/token/0x132784537/scavenger')} />
      </Tabs>
    </Box>
  )
}

export default Nav
