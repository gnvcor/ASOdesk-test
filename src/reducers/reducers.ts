import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import popupReducer from './popupReducer'

const reducers = combineReducers({
    table: tableReducer,
    popup: popupReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
