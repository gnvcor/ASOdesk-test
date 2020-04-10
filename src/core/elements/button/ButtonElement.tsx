import React from 'react'
import cn from 'classnames'
import styles from './buttonElement.module.css'

export const ICON_REMOVE = 'remove'

export const STATE_PRIMARY = 'primary'
export const STATE_SECONDARY = 'secondary'

interface IButtonElement {
    text?: string
    url?: string
    onClick?(): void
    state: 'primary' | 'secondary'
    iconName: string
}

const ButtonElement = ({
    text,
    url,
    onClick,
    state,
    iconName,
}: IButtonElement) => {
    const classes = cn(
        styles.button,
        styles[`button-${state}`],
        { [styles.icon]: !!iconName },
        { [styles[`icon-${iconName}`]]: !!iconName },
    )

    if (url) {
        return (
            <a
                href={url}
                onClick={onClick}
                className={classes}
            >{text}</a>
        )
    }

    return (
        <button
            onClick={onClick}
            className={classes}
        >{text}</button>
    )
}

ButtonElement.defaultProps = {
    state: STATE_PRIMARY,
    onClick: () => {},
}

export default ButtonElement
