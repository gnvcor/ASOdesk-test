import React, { ReactNode } from 'react'
import styles from './layoutComponent.module.css'

interface ILayoutComponent {
    Aside?: ReactNode
    children: ReactNode
}

const LayoutComponent = ({ Aside, children }: ILayoutComponent) => (
    <div className={styles.container}>
        {Aside && <div className={styles.aside}>{Aside}</div>}
        <div className={styles.content}>{children}</div>
    </div>
)

export default LayoutComponent
