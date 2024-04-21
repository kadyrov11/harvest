import { FC } from 'react'

import styles from './Button.module.css'

const Button: FC<{ onClick?: () => void, title: string, type?: string }> = ({ onClick, title, type = 'button' }) => {
    return (
        <button className={styles.btn}>{title}</button>
    )
}

export default Button