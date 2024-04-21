import { FC } from 'react'

import styles from './Paragraph.module.css'

const Description: FC<{ title: string, description: string }> = ({ title, description }) => {
    return (
        <div>
            <h2 className={styles.title}>{title}  </h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Description