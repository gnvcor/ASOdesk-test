import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import PopupComponent from '../../core/components/popup/PopupComponent'
import { onTogglePopup } from '../../actions/popupActions'

const connector = connect(
    null,
    { onTogglePopup },
)

type PropsFromRedux = ConnectedProps<typeof connector>

const PopupContainer = (props: PropsFromRedux) => {
    const title = 'Suggestions'
    const textButtonClose = 'Close'
    const Content = 'Content'

    return (
        <PopupComponent
            title={title}
            textButtonClose={textButtonClose}
            onClose={props.onTogglePopup}
        >
            {Content}
        </PopupComponent>
    )
}

export default connector(PopupContainer)
