import React from 'react'
import MuiCardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export interface CardBody {
  padding?: number
  children: React.ReactNode
}

const CardBody = ({ padding = 0, children, ...props }: CardHeader) => {
  return (
    <MuiCardContent
      sx={{
        padding: `${padding}em !important`,
        height: '100%',
      }}
    >
      {children}
    </MuiCardContent>
  )
}

export default CardBody
