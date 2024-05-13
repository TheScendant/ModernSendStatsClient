
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Boulder } from './sendData/boulders'
import { useSendContext } from './contexts/SendContext'

const columnHelper = createColumnHelper<Boulder>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('date', {
    id: 'date',
    cell: info => <i>{info.getValue()}</i>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('grade', {
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  })
]
export const Table = () => {
  const { boulders } = useSendContext();
  const table = useReactTable({
    data: boulders,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
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
    </table>
  )
}