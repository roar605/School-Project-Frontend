import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logInImage from '@/public/images/SignImage.png';
const index = () => {
    return (
        <div className={styles.signup}>
            <div className={styles.form}>
                <Image className={styles.image} src={logInImage} />
                <div className={styles.signinlogin}>
                    <h2 className={styles.title}>Sign Up</h2>
                </div>
                <input name="name" type="text" placeholder='Enter your name' />
                <input name="email" type="email" placeholder='Enter your email' />
                <input name="phone" type="text" placeholder='Enter your phone no' />
                <input name="password" type="password" placeholder='Enter password' />
                <button type='submit' className={styles.button}>Signup</button>
                <div className={styles.account}>
                    <span>Already have an account?</span>
                    <Link href='/login' className={styles.btn}>
                        <span >Login</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default index