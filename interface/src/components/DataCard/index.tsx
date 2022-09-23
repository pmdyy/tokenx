import React from 'react'
import styled from '@emotion/styled'
import Card from 'components/Card'
import Stack from '@mui/material/Stack'
import { faker } from '@faker-js/faker'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
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
  &:last-child {
    border-bottom: 0;
  }
`

const data = Array.from({ length: 5 }, () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zip: faker.address.zipCode(),
  country: faker.address.country(),
  phone: faker.phone.phoneNumber(),
  avatar: faker.internet.avatar(),
}))

function DataCard({ title, ...props }) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Body padding={1}>
        {data.map((data, index) => (
          <DataRow key={index}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'lightgray' }}>
                {data.name}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {data.email}
              </Typography>
            </Stack>
          </DataRow>
        ))}
      </Card.Body>
    </Card>
  )
}

export default DataCard
