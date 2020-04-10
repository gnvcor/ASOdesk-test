import { combineReducers } from 'redux'
import tableReducer from './tableReducer'

const reducers = combineReducers({
    table: tableReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
