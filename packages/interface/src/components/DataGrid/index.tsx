import './styles.css'
import DataGrid from 'react-data-grid'
import withControls from './withControls'

export default withControls(({ columns, rows }) => {
  return <DataGrid style={{ color: 'red', backgroundColor: '#0b1d32', border: 'none' }} columns={columns} rows={rows} />
})
