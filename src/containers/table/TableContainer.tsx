import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onLoadData } from '../../actions/tableActions'

interface ITableContainer {
    onLoadData(): void
}

const TableContainer = ({ onLoadData }: ITableContainer) => {
    useEffect(() => {
        onLoadData()
    }, [])

    return <div>table container</div>
}

export default connect(
    null,
    { onLoadData },
)(TableContainer)
