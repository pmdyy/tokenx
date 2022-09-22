import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearDeterminate({ value }) {
  const [progress, setProgress] = React.useState(value)
  // {/*color={value < 30 ? 'error' : value > 70 ? 'success' : 'warning'}*/}
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
      <LinearProgress sx={{ width: '100%' }} variant="determinate" value={progress} />
    </Box>
  )
}
