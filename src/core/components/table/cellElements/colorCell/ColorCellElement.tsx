import React from 'react'
import cn from 'classnames'
import styles from './colorCellElement.module.css'

interface IColorCellElement {
    color: number
}

const ColorCellElement = ({ color }: IColorCellElement) => (
    <div className={cn(styles.container, styles[`color-${color}`])} />
)

export default ColorCellElement
