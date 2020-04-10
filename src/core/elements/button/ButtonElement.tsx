import React from 'react'
import cn from 'classnames'
import styles from './buttonElement.module.css'
import { STATE_PRIMARY } from '../../constants/buttonConstants'

export interface IButtonElement {
    text?: string
    url?: string
    onClick?(): void
    state?: 'primary' | 'secondary'
    iconName?: string
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
