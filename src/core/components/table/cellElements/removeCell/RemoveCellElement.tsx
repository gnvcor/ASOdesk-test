import React from 'react'
import ButtonElement, {
    ICON_REMOVE,
    STATE_SECONDARY,
} from '../../../../elements/button/ButtonElement'

interface IRemoveCellElement {
    onClick(): void
}

const RemoveCellElement = ({ onClick }: IRemoveCellElement) => (
    <ButtonElement iconName={ICON_REMOVE} onClick={onClick} state={STATE_SECONDARY} />
)

export default RemoveCellElement
