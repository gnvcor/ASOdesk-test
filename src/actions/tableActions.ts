import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { ACTION_TABLE_DATA_LOAD } from '../constants/tableActionNamesConstants'
import tableService from '../services/tableService'
import { RootState } from "../reducers/reducers"

export const onLoadData = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    const onChange = (data: any) => ({ type: ACTION_TABLE_DATA_LOAD, payload: { data } })

    tableService.loadData()
        .then(response => dispatch(onChange(response)))
}
