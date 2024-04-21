import { FC } from 'react'
import Image from 'next/image'
import Paragraph from '@/ui/Paragraph'
import Footer from '@/components/Layout/Footer'

import HomeAboutImg from '../../../public/home-about.png'

import VolunteerImg from '../../../public/child-square.png'
import ManagerImg from '../../../public/woman-square.png'
import HostsImg from '../../../public/food-square.png'
import MasterGardenerImg from '../../../public/man-square.png'
import SponsorsImg from '../../../public/sponsors.png'

import styles from './Home.module.css'
import Link from 'next/link'

const Home: FC = () => {
    return (
        <>
            <div className='container'>
                <section className={styles.aboutWrapper}>
                    <Image src={HomeAboutImg} alt='' className={styles.aboutImg} />
                    <div className={styles.description}>
                        <Paragraph title='The Harvest Initiative' description='Community lead organization based around getting back to our roots and building community around clean safe food. Our network has a place for anyone who wants to embrace healthier eating and living habits through natural local food grown by you! Gain reputation and achievements by becoming an integral part of our network and make sure no one goes hungry on your watch. ' />
                    </div>
                </section>
                <div className='underline'></div>
                <section className={styles.roleSection}>
                    <ul className={styles.roleList}>
                        <li className={styles.listItem} title='More info'>
                            <Link href='/about'>
                                <Image className={styles.img} src={VolunteerImg} alt='volunteer' />
                                <h3>Volunteer</h3>
                            </Link>
                        </li>
                        <li className={styles.listItem} title='More info'>
                            <Link href='/about'>
                                <Image className={styles.img} src={MasterGardenerImg} alt='Master gardener' />
                                <h3>Master gardener</h3>
                            </Link>
                        </li>
                        <li className={styles.listItem} title='More info'>
                            <Link href='/about'>
                                <Image className={styles.img} src={HostsImg} alt='hosts' />
                                <h3>Hosts</h3>
                            </Link>
                        </li>
                        <li className={styles.listItem} title='More info'>
                            <Link href='/about'>
                                <Image className={styles.img} src={ManagerImg} alt='Manager' />
                                <h3>Manager</h3>
                            </Link>
                        </li>
                    </ul>
                </section>
                <div className='underline'></div>
                <section className={styles.sponsorsWrapper}>
                    <h2 className={styles.sponsorsHeading}>Future Sponsors</h2>
                    <Image src={SponsorsImg} alt='sponsors' />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home