import React from 'react'
import Card from 'components/Card'
import Box from '@mui/material/Box'
import { alpha, styled } from '@mui/material/styles'
import { DataGrid as MuiDataGrid, gridClasses, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const ODD_OPACITY = 0.2

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: '',
    width: 58,
    pinnable: true,
    align: 'center',
    renderCell: (params) => <img width={24} src={params.value} />,
  },
  { field: 'id', headerName: 'ID', width: 50 },
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
    flex: 1,
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

const rows = []
for (let i = 0; i < 10; i++) {
  rows.push({
    id: i,
    image: `https://img.x2y2.io/v2/1/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${i + 1}/280/image.jpg`,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
  })
}

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
