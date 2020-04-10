import { ACTION_POPUP_TOGGLE } from '../constants/popupActionNamesConstants'

interface IStateReducer {
    isOpen: boolean
}

interface IActionReducer {
    type: string
}

const initialState = {
    isOpen: false,
}

export default (state: IStateReducer = initialState, { type }: IActionReducer) => {
    if (type === ACTION_POPUP_TOGGLE) {
        return {
            ...state,
            isOpen: !state.isOpen,
        }
    }

    return state
}
