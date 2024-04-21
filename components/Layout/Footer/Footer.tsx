import { FC } from 'react'
import Image from 'next/image'

import styles from './Footer.module.css'

import FacebookIcon from '../../../public/facebook.svg'
import InstagramIcon from '../../../public/instagram.png'
import MailIcon from '../../../public/mail.webp'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li className={styles.listItem}>
                    <Image alt='facebook' src={FacebookIcon} width={25} className={styles.icon} />
                    Harvest initiative
                </li>
                <li className={styles.listItem}>
                    <Image alt='facebook' src={InstagramIcon} width={25} className={styles.icon} />
                    @harvest_initiative
                </li>
                <li className={styles.listItem}>
                    <Image alt='facebook' src={MailIcon} width={25} className={styles.icon} />
                    harvest.initiative@gmail.com
                </li>
            </ul>
        </footer>
    )
}

export default Footer