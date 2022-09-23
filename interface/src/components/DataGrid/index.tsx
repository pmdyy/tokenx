import React from 'react'
import Card from 'components/Card'
import Box from '@mui/material/Box'
import { alpha, styled } from '@mui/material/styles'
import { DataGrid as MuiDataGrid, gridClasses, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const ODD_OPACITY = 0.2

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    pinnable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 8 },
  { id: 6, lastName: 'Melisandre', firstName: 'Ary', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
]

const StripedDataGrid = styled(MuiDataGrid)(({ theme }) => ({
  border: 'none',
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#0c243e',
    borderBottom: 'none',
    boxShadow: '0px 10px 10px 5px rgb(0 0 0 / 15%)',
    zIndex: '10',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: 'none',
  },
  '& .MuiDataGrid-columnSeparator': {
    visibility: 'hidden',
  },
  '& .super-app-theme--header': {
    backgroundColor: 'red',
  },
  '& ::-webkit-scrollbar': {
    width: '8px',
  },
  '& ::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '& ::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgb(89, 106, 118)',
    outline: 'none',
    borderRadius: '4px',
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: '#0c243e',
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
        },
      },
    },
  },
}))

function DataGrid({ title, ...props }) {
  return (
    <Card>
      <Card.Header title={title} tooltip={'Tooltip text'} />
      <Card.Body>
        <Box sx={{ height: '400px', width: '100%' }}>
          <StripedDataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
            disableSelectionOnClick
            density={'compact'}
            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
            hideFooter={true}
            {...props}
          />
        </Box>
      </Card.Body>
    </Card>
  )
}

export default React.memo(DataGrid)
