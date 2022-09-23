import React from 'react'
import MuiCardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export interface CardBodyProps {
  padding?: number
  children: React.ReactNode
}

const CardBody = ({ padding = 0, children, ...props }: CardBodyProps) => {
  return (
    <MuiCardContent
      sx={{
        padding: `${padding}em`,
        height: '100%',
        '&:last-child': {
          padding: 0,
        },
      }}
      {...props}
    >
      {children}
    </MuiCardContent>
  )
}

export default CardBody
