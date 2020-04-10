import React, { useEffect, useMemo } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { onLoadData, onRemoveElement } from '../../actions/tableActions'
import TableComponent from '../../core/components/table/TableComponent'
import { RootState } from '../../reducers/reducers'
import {
    STATE_SECONDARY,
    ICON_REMOVE,
} from '../../core/constants/buttonConstants'

const connector = connect(
    (state: RootState) => ({
        data: state.table.data,
    }),
    { onLoadData, onRemoveElement },
)

type PropsFromRedux = ConnectedProps<typeof connector>

type RankCell = {
    position: number | string
    change: number | null
}

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
            Header: <div />,
            accessor: 'explore',
            Cell: () => {
                const text = 'Explore'
                const url = '/explore'

                return <TableComponent.ButtonCellElement text={text} url={url} />
            }
        },
        {
            Header: 'Traffic Score',
            accessor: 'trafficScore',
        },
        {
            Header: 'Rank',
            accessor: 'rank',
            Cell: ({ value }: { value: RankCell }) => {
                return <TableComponent.RankCellElement {...value} />
            }
        },
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

                return (
                    <TableComponent.ButtonCellElement
                        state={STATE_SECONDARY}
                        iconName={ICON_REMOVE}
                        onClick={onRemoveElement}
                    />
                )
            }
        },
    ]

    const columnsTable = useMemo(() => columns, [])
    const dataTable = useMemo(() => props.data, [props.data])

    if (!props.data.length) return null

    return <TableComponent columns={columnsTable} data={dataTable} />
}

export default connector(TableContainer)
