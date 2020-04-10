import {
    ACTION_TABLE_DATA_LOAD,
    ACTION_TABLE_ELEMENT_REMOVE,
} from '../constants/tableActionNamesConstants'

interface IStateReducer {
    data: { [key: string]: any }[]
}

interface IActionReducer {
    type: string
    payload: any
}

const initialState = {
    data: [],
}

export default (state: IStateReducer = initialState, { type, payload }: IActionReducer) => {
    if (type === ACTION_TABLE_DATA_LOAD) {
        return {
            ...state,
            data: payload.data,
        }
    }

    if (type === ACTION_TABLE_ELEMENT_REMOVE) {
        return {
            ...state,
            data: state.data.filter(element => element.remove !== payload.id),
        }
    }

    return state
}
