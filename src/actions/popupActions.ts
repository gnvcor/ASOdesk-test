import { ACTION_POPUP_TOGGLE } from '../constants/popupActionNamesConstants'
import { ActionCreator } from '../types/types'

export const onTogglePopup = (): ActionCreator => dispatch => {
    dispatch({ type: ACTION_POPUP_TOGGLE })
}
