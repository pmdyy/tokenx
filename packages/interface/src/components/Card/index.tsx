import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

import { red } from '@mui/material/colors'
import InfoIcon from '@mui/icons-material/Info'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function StyledCard({ children, ...props }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 auto',
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#0b1d32',
        color: '#fff',
      }}
      {...props}
    >
      <CardHeader
        sx={{
          position: 'relative',
          width: '100%',
          zIndex: 10,
          padding: '8px',
          '& .MuiCardHeader-action': {
            margin: 0,
          },
        }}
        action={
          <>
            {/* <IconButton color="inherit" aria-label="settings">
              <TuneTwoToneIcon sx={{ color: 'lightslategray' }} />
            </IconButton> */}
            <IconButton color="inherit" aria-label="settings">
              <MoreVertIcon sx={{ color: 'lightslategray' }} />
            </IconButton>
          </>
        }
        title={
          <Stack direction="row" alignItems="center" sx={{ paddingLeft: '8px' }}>
            <Typography variant="inherit">Ether Flow Activity</Typography>
            <Tooltip
              placement="right"
              arrow
              title={
                <React.Fragment>
                  <Typography sx={{ fontSize: 12 }}>
                    {
                      'A macro perspective on your token of choice. Includes information on exchange balances, top balance changes, top transactions and so on.'
                    }
                  </Typography>
                </React.Fragment>
              }
            >
              <IconButton color="inherit" aria-label="settings">
                <InfoOutlinedIcon sx={{ color: 'lightslategray' }} />
              </IconButton>
            </Tooltip>
          </Stack>
        }
        titleTypographyProps={{ fontSize: '1rem', fontWeight: 700 }}
      />
      <CardContent sx={{ width: '100%', height: '100%', flex: '1 auto', padding: '0 !important' }}>
        {children}
      </CardContent>
      {/*<CardActions disableSpacing></CardActions>*/}
    </Card>
  )
}
