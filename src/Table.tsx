
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Boulder } from './sendData/boulders'
import { useSendContext } from './contexts/SendContext'
import styled from 'styled-components'
import { useState } from 'react'
import React from 'react'

const columnHelper = createColumnHelper<Boulder>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
    enableSorting: true,
  }),
  columnHelper.accessor('date', {
    id: 'date',
    cell: info => <i>{info.getValue()}</i>,
    footer: info => info.column.id,
    enableSorting: true,
  }),
  columnHelper.accessor('grade', {
    cell: info => info.renderValue(),
    footer: info => info.column.id,
    enableSorting: true,
  })
]

const StyledTable = styled.table`
  border: 1px solid gray;
  width: 100%;
`;

const StyledTh = styled.th`
  text-align: start;
  text-transform: capitalize;
`

const TableWrapper = styled.div`
  overflow-y: scroll;
  height: 70vh;
  width: 90%;
  padding: 1rem;
`
const SORT_ICONS: Record<string, JSX.Element> = {
  asc: <span>&uarr;</span>,
  desc: <span>&darr;</span>,
}

export const Table = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { boulders } = useSendContext();
  const table = useReactTable({
    data: boulders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });


  return (
    <>
      <h1>Boulder Data</h1>
      <TableWrapper>
        <StyledTable>

          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <StyledTh key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{
                      ...(header.column.getCanSort()
                        ? {
                          cursor: 'pointer',
                          userSelect: 'none',
                        }
                        : ''),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <span>{SORT_ICONS[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </StyledTh>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable >
      </TableWrapper>
    </>
  )
}