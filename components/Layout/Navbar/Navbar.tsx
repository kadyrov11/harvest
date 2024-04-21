"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

import LogoImage from '../../../public/logo.png'
import UserImage from '../../../public/user-icon.svg'

import styles from './Navbar.module.css'

const pages = [
    {
        title: 'Home',
        link: "/"
    },
    {
        title: 'Groups',
        link: "/groups"
    },
    {
        title: 'Volunteer',
        link: "/volunteer"
    },
    {
        title: 'About',
        link: "/about"
    }
];


function Navbar() {
    const [user, setUser] = useState(null)
    const pathName = usePathname()

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null)
    };

    useEffect(() => {
        const user = localStorage.getItem('user')


        if (user) {
            const userData = JSON.parse(user)
            setUser(userData)

            if (userData?.role === "manager") {
                pages.push({
                    title: 'Manage',
                    link: "/manage"
                })
            }
        }
    }, [])


    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image alt='Logo' src={LogoImage} />
                </Link>
                <ul className={styles.navList}>
                    {pages.map(({ title, link }) =>
                        <li key={title} className={`${styles.listItem} ${pathName === link ? styles.active : ""}`}>
                            <Link href={link}>{title}</Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className={styles.authContainer}>

                {
                    user ?
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <Image alt='user photo' src={UserImage} width={35} className={styles.userLogo} />
                        </> : <button>
                            <Link href='/auth'>
                                Sign In
                            </Link>
                        </button>
                }
            </div>
        </header>
    );
}
export default Navbar;
