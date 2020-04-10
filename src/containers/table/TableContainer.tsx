import React, { useEffect, useMemo } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { onLoadData, onRemoveElement } from '../../actions/tableActions'
import TableComponent from '../../core/components/table/TableComponent'
import { RootState } from '../../reducers/reducers'

const connector = connect(
    (state: RootState) => ({
        data: state.table.data,
    }),
    { onLoadData, onRemoveElement },
)

type PropsFromRedux = ConnectedProps<typeof connector>

const TableContainer = (props: PropsFromRedux) => {
    useEffect(() => {
        props.onLoadData()
    }, [])

    const columns = [
        {
            Header: 'Keyword',
            accessor: 'keyword',
        },
        {
            Header: 'Traffic Score',
            accessor: 'trafficScore',
        },
        // {
        //     Header: 'Rank',
        //     accessor: 'rank',
        // },
        {
            Header: 'Total apps',
            accessor: 'totalApps',
        },
        {
            Header: 'Color',
            accessor: 'color',
            Cell: ({ value }: { value: number }) => {
                return <TableComponent.ColorCellElement color={value} />
            }
        },
        {
            Header: <div />,
            accessor: 'remove',
            Cell: ({ value }: { value: number }) => {
                const onRemoveElement = () => props.onRemoveElement(value)

                return <TableComponent.RemoveCellElement onClick={onRemoveElement} />
            }
        },
    ]

    const columnsTable = useMemo(() => columns, [])
    const dataTable = useMemo(() => props.data, [props.data])

    if (!props.data.length) return null

    return <TableComponent columns={columnsTable} data={dataTable} />
}

export default connector(TableContainer)
