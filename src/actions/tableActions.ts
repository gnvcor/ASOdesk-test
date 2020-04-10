import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import {
    ACTION_TABLE_DATA_LOAD,
    ACTION_TABLE_ELEMENT_REMOVE,
} from '../constants/tableActionNamesConstants'
import tableService from '../services/tableService'
import { RootState } from '../reducers/reducers'
import dataConverter from '../data/dataConverter'

type ActionCreator = ThunkAction<void, RootState, unknown, Action<string>>

export const onLoadData = (): ActionCreator => dispatch => {
    tableService.loadData()
        .then(response => dispatch({
            type: ACTION_TABLE_DATA_LOAD,
            payload: { data: dataConverter({ data: response.data }) }
        }))
}

export const onRemoveElement = (id: number): ActionCreator => dispatch => {
    dispatch({
        type: ACTION_TABLE_ELEMENT_REMOVE,
        payload: { id }
    })
}
