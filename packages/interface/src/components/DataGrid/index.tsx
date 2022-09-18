import React from 'react'
import Box from '@mui/material/Box'
import DataGrid, { Column, SortColumn, SelectColumn, textEditor, SelectCellFormatter } from 'react-data-grid'
import styled from '@emotion/styled'
import withControls from './withControls'
import { createPortal } from 'react-dom'
import { faker } from '@faker-js/faker'
import { useState, useMemo } from 'react'
import ProgressBar from './ProgressBar'

interface Row {
  id: number
  title: string
  client: string
  progress: number
  budget: number
  account: string
  version: string
  available: boolean
}

function getColumns(): readonly Column<Row>[] {
  return [
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      width: 60,
      frozen: true,
      resizable: false,
      summaryFormatter() {
        return <strong>Total</strong>
      },
    },
    {
      key: 'title',
      name: 'Task',
      width: 120,
      frozen: true,
    },
    {
      key: 'client',
      name: 'Client',
    },
    {
      key: 'progress',
      name: 'Completion',
      width: 150,
      resizable: false,
      formatter(props) {
        const value = props.row.progress
        return <ProgressBar value={value} />
      },
    },
    {
      key: 'budget',
      name: 'Budget',
      width: 100,
    },
    {
      key: 'account',
      name: 'Account',
      width: 150,
    },
    {
      key: 'version',
      name: 'Version',
      editor: textEditor,
    },
    {
      key: 'available',
      name: 'Available',
      width: 80,
      formatter({ row, onRowChange, isCellSelected }) {
        return (
          <SelectCellFormatter
            value={row.available}
            onChange={() => {
              onRowChange({ ...row, available: row.available })
            }}
            isCellSelected={isCellSelected}
          />
        )
      },
    },
  ]
}

function rowKeyGetter(row: Row) {
  return row.id
}

function createRows(): readonly Row[] {
  const now = Date.now()
  const rows: Row[] = []

  for (let i = 0; i < 100; i++) {
    rows.push({
      id: i,
      title: `Task #${i + 1}`,
      client: faker.company.name(),
      progress: Math.random() * 100,
      budget: 500 + Math.random() * 10500,
      account: faker.finance.iban(),
      version: faker.system.semver(),
      available: Math.random() > 0.5,
    })
  }

  return rows
}

type Comparator = (a: Row, b: Row) => number
function getComparator(sortColumn: string): Comparator {
  switch (sortColumn) {
    case 'title':
    case 'client':
    case 'country':
    case 'account':
    case 'version':
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn])
      }
    case 'available':
      return (a, b) => {
        return a[sortColumn] === b[sortColumn] ? 0 : a[sortColumn] ? 1 : -1
      }
    case 'id':
    case 'progress':
    case 'budget':
      return (a, b) => {
        return a[sortColumn] - b[sortColumn]
      }
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`)
  }
}

export default function CommonFeatures() {
  const [rows, setRows] = useState(createRows)
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([])
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(() => new Set())

  const columns = useMemo(() => getColumns(), [])

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey)
        const compResult = comparator(a, b)
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult
        }
      }
      return 0
    })
  }, [rows, sortColumns])

  const gridElement = (
    <DataGrid
      rowKeyGetter={rowKeyGetter}
      columns={columns}
      rows={sortedRows}
      defaultColumnOptions={{
        sortable: true,
        resizable: false,
      }}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      onRowsChange={setRows}
      sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns}
      style={{
        width: '100%',
        height: '100%',
      }}
      direction={'ltr'}
    />
  )

  return <>{gridElement}</>
}

// export default withControls(({ columns, rows }) => {
//   return <DataGrid style={{ color: 'red', backgroundColor: '#0b1d32', border: 'none' }} columns={columns} rows={rows} />
// })
