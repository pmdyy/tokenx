import React from 'react'
import MuiCard from '@mui/material/Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

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
      elevation={0}
      {...props}
    >
      {children}
    </MuiCard>
  )
}

Card.displayName = 'Card'

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
