import React from 'react'
import cn from 'classnames'
import styles from './rankCellElement.module.css'

interface IRankCellElement {
    position: number | string
    change: number | null
}

const RankCellElement = ({ position, change }: IRankCellElement) => (
    <div className={styles.container}>
        {position}
        {!!change && (
            <span
                className={cn(styles.change, {
                    [styles.changePositive]: change > 0,
                    [styles.changeNegative]: change < 0,
                })}
            >({change})</span>
        )}
    </div>
)

export default RankCellElement
