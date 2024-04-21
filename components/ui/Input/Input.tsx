import { FC } from 'react'

import styles from './Input.module.css'

const Input: FC<{ name: string, onChange: (e: any) => void, label: string, type?: string, value?: string }> = ({ onChange, name, label, type = 'text', value }) => {
    return (
        <label className={styles.label}>
            {label}
            <input required={true} type={type} className={styles.input} name={name} onChange={onChange} value={value} />
        </label>
    )
}

export default Input