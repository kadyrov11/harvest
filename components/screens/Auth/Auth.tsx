"use client"
import { FC, useState, SyntheticEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/ui/Input'
import Button from '@/ui/Button'

import styles from './Auth.module.css'

interface IUser {
    email: string,
    password: string,
    role?: string
}

const Auth: FC = () => {
    const [isUserExist, setIsUserExist] = useState(true)
    const [user, setUser] = useState<IUser>({
        email: "",
        password: "",
        role: 'basic'
    })
    const { push } = useRouter()

    const handleChange: (e: any) => void = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(user))
        setUser({
            email: "",
            password: "",
            role: 'guest'
        })
        push('/')
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.heading}>{isUserExist ? "Log in" : "Sign up"}</h2>
                <Input label='E-mail' name='email' onChange={handleChange} type='email' value={user.email} />
                <Input label='Password' name='password' onChange={handleChange} type='password' value={user.password} />
                {!isUserExist ?
                    <>
                        <span className={styles.roleText}>Choose the role:  </span>
                        <select name="Role">
                            <option value="guest">Guest</option>
                            <option value="host">Host</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="master gardener">Master gardener</option>
                        </select>
                    </> : <></>}
                <div className={styles.btnWrapper}>
                    <Button title={isUserExist ? "Log in" : "Sign up"} type={isUserExist ? "Log in" : "Sign up"} />
                    <button onClick={() => setIsUserExist(!isUserExist)}> {isUserExist ? "Create an account" : "Log in"}</button>
                </div>

            </form>
        </div>
    )
}

export default Auth