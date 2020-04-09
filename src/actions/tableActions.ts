import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { ACTION_TABLE_DATA_LOAD } from '../constants/tableActionNamesConstants'
import tableService from '../services/tableService'
import { RootState } from '../reducers/reducers'
import dataConverter, { IData } from '../data/dataConverter'

export const onLoadData = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    const onChange = ({ data }: IData) => ({
        type: ACTION_TABLE_DATA_LOAD,
        payload: { data: dataConverter({ data }) }
    })

    tableService.loadData()
        .then(response => dispatch(onChange({ data: response.data })))
}
