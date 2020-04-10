import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducers/reducers'
import { Action } from 'redux'

export type ActionCreator = ThunkAction<void, RootState, unknown, Action<string>>
