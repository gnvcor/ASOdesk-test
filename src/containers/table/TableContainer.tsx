import React, { useEffect, useMemo } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { onLoadData } from '../../actions/tableActions'
import TableComponent from '../../core/components/table/TableComponent'

const connector = connect(
    state => ({
        columns: [
            {
                Header: 'Keyword',
                accessor: 'keyword',
            },
            {
                Header: 'Traffic Score',
                accessor: 'trafficScore',
            },
            {
                Header: 'Rank',
                accessor: 'rank',
            },
            {
                Header: 'Total apps',
                accessor: 'totalApps',
            },
            {
                Header: 'Color',
                accessor: 'color',
            },
        ],
        data: [
            {
                keyword: '1',
                trafficScore: '2',
                rank: '3',
                totalApps: '4',
                color: '5',
            },
        ]
    }),
    { onLoadData },
)

type PropsFromRedux = ConnectedProps<typeof connector>

const TableContainer = (props: PropsFromRedux) => {
    useEffect(() => {
        props.onLoadData()
    }, [])

    const columnsTable = useMemo(() => props.columns, [])
    const dataTable = useMemo(() => props.data, [])

    return <TableComponent columns={columnsTable} data={dataTable} />
}

export default connector(TableContainer)
