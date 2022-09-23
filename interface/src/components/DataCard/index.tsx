import React from 'react'
import styled from '@emotion/styled'
import Card from 'components/Card'
import Stack from '@mui/material/Stack'
import { faker } from '@faker-js/faker'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import MuiTableBody from '@mui/material/TableBody'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Typography from '@mui/material/Typography'

export const TableBody = styled(MuiTableBody)<{ theme?: Theme }>`
  padding-top: 0;
  padding-bottom: 0;
`

export const TableRow = styled(MuiTableRow)<{ theme?: Theme }>`
  color: 'red';
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.background.paper2};
  }
`

export const TableCell = styled(MuiTableCell)<{ theme?: Theme }>`
  border-bottom: 0;
`

const data = [
  {
    column: 'Avg. ETH Bal.',
    value: '0.87',
  },
  {
    column: 'Avg. NFT Value',
    value: '0.013',
  },
  {
    column: 'Med. NFT Value',
    value: '0.0036',
  },
  {
    column: 'Largest NFT Value',
    value: '0.21',
  },
  {
    column: 'Most Common NFT Type',
    value: 'Ethereum Token',
  },
  {
    column: 'Most Common NFT Type',
    value: 'Ethereum Token',
  },
  {
    column: 'Avg. ETH Balance',
    value: '0.87',
  },
  {
    column: 'Avg. NFT Collection Value',
    value: '0.013',
  },
  {
    column: 'Med. NFT Collection Value',
    value: '0.0036',
  },
]

function DataCard({ title, ...props }) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Body padding={0}>
        <Table size="small">
          <TableBody data-grid="wow">
            {data.map((row, index) => (
              <TableRow>
                <TableCell>
                  <Typography variant="body2" sx={{ color: 'lightslategray' }}>
                    {row.column}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {row.value}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default DataCard
