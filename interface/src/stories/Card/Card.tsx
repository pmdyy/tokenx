import React from 'react'
import MuiCard from '@mui/material/Card'

export interface Card {
  color: string
  backgroundColor: string
  children: React.ReactNode
}

const Card = ({ color, backgroundColor, children, ...props }: Card) => {
  return (
    <MuiCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 auto',
        width: '100%',
        borderRadius: 0,
        color: color,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  )
}

export default Card
