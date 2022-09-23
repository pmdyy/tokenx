import React from 'react'
import styled from '@emotion/styled'
import Card from 'components/Card'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export const DataRow = styled(Box)<{ theme?: Theme }>`
  padding-top: 1rem;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.main};
  &:first-child {
    padding-top: 0px;
  }
`

function DataCard({ title, ...props }) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Body padding={1}>
        <DataRow>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'lightgray' }}>
              Balance
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              111.44051 Ether
            </Typography>
          </Stack>
        </DataRow>
        <DataRow>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'lightgray' }}>
              Contract Creator:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              0xdb65702a...
            </Typography>
          </Stack>
        </DataRow>
      </Card.Body>
      <Card.Footer />
    </Card>
  )
}

export default DataCard
