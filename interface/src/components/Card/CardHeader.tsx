import React from 'react'
import MuiCardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export interface CardHeaderProps {
  title: string
  tooltip?: React.ReactNode
  fontSize?: number | string
  tooltipFontSize?: number
  iconColor?: string
}

const CardHeader = ({
  title,
  tooltip,
  fontSize = '1rem',
  tooltipFontSize = 12,
  iconColor = 'rgba(119, 136, 153, 1)',
  ...props
}: CardHeaderProps) => {
  return (
    <MuiCardHeader
      sx={{
        padding: '0.5rem',
        '& .MuiCardHeader-action': {
          margin: 0,
        },
      }}
      title={
        <Stack direction="row" alignItems="center" sx={{ paddingLeft: '8px' }}>
          <Typography variant="inherit">{title}</Typography>
          {tooltip && (
            <Tooltip
              placement="right"
              arrow
              title={
                <React.Fragment>
                  <Typography sx={{ fontSize: tooltipFontSize }}>{tooltip}</Typography>
                </React.Fragment>
              }
            >
              <IconButton color="inherit" aria-label="settings">
                <InfoOutlinedIcon sx={{ color: iconColor }} />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      }
      action={
        <>
          <IconButton color="inherit" aria-label="settings">
            <MoreVertIcon sx={{ color: iconColor }} />
          </IconButton>
        </>
      }
      titleTypographyProps={{ fontSize: fontSize, fontWeight: 700 }}
      {...props}
    />
  )
}

export default CardHeader
