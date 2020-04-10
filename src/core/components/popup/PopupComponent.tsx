import React, { ReactNode } from 'react'
import styles from './popupComponent.module.css'
import ButtonElement from '../../elements/button/ButtonElement'

interface IPopupComponent {
    title: string
    onClose(): void
    textButtonClose: string
    children: ReactNode
}

const PopupComponent = ({
    title,
    textButtonClose,
    onClose,
    children,
}: IPopupComponent) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                {title}
                <ButtonElement text={textButtonClose} onClick={onClose} />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.backdrop} onClick={onClose} />
    </div>
)

export default PopupComponent
