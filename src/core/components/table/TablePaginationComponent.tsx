import React from 'react'
import styles from './tableComponent.module.css'

interface ITablePaginationComponent {
    gotoPage(value: number): void
    canPreviousPage: boolean
    previousPage(): void
    nextPage(): void
    setPageSize(value: number): void
    gotoPage(value: number): void
    pageCount: number
    pageIndex: number
    pageSize: number
    canNextPage: boolean
    pageOptions: number[]
}

// Код пагинации скопировал из примера react-table
// https://codesandbox.io/embed/github/tannerlinsley/react-table/tree/master/examples/pagination
const TablePaginationComponent = (props: ITablePaginationComponent) => (
    <div className={styles.pagination}>
        <button onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage}>
            {'<<'}
        </button>{' '}
        <button onClick={() => props.previousPage()} disabled={!props.canPreviousPage}>
            {'<'}
        </button>{' '}
        <button onClick={() => props.nextPage()} disabled={!props.canNextPage}>
            {'>'}
        </button>{' '}
        <button onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage}>
            {'>>'}
        </button>{' '}
        <span>
            Page{' '}
            <strong>
                {props.pageIndex + 1} of {props.pageOptions.length}
            </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
            <input
                type="number"
                defaultValue={props.pageIndex + 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    props.gotoPage(page)
                }}
                style={{ width: '100px' }}
            />
            </span>{' '}
        <select
            value={props.pageSize}
            onChange={e => {
                props.setPageSize(Number(e.target.value))
            }}
        >
            {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select>
    </div>
)

export default TablePaginationComponent
