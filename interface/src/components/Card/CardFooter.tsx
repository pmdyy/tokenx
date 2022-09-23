import React from 'react'
import MuiCardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

export interface CardFooterProps {
  children?: React.ReactNode
}

const CardFooter = ({ children, ...props }: CardFooterProps) => {
  return (
    <MuiCardActions disableSpacing>
      {children}
    </MuiCardActions>
  )
}

export default CardFooter
