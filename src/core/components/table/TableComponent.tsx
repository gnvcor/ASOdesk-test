import React from 'react'
import { useTable, useRowSelect, usePagination } from 'react-table'
import ColorCellElement from './cellElements/colorCell/ColorCellElement'
import ButtonCellElement from './cellElements/buttonCell/ButtonCellElement'
import RankCellElement from './cellElements/rankCell/RankCellElement'
import TablePaginationComponent from './TablePaginationComponent'

export interface ITableComponent {
    columns: { [key: string]: any; }[]
    data: { [key: string]: any; }[]
}

const TableComponent = ({ columns, data }: ITableComponent) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        usePagination
    )

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <TablePaginationComponent
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageCount={pageCount}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                setPageSize={setPageSize}
                pageIndex={pageIndex}
                pageSize={pageSize}
            />
        </>
    )
}

TableComponent.ColorCellElement = ColorCellElement
TableComponent.ButtonCellElement = ButtonCellElement
TableComponent.RankCellElement = RankCellElement

export default TableComponent
