import { ACTION_TABLE_DATA_LOAD } from '../constants/tableActionNamesConstants'

interface ITableReducer {
    type: string
    payload: any
}

export default (state = {}, { type, payload }: ITableReducer) => {
    if (type === ACTION_TABLE_DATA_LOAD) {
        return {
            ...state,
            data: payload.data,
        }
    }

    return state
}
