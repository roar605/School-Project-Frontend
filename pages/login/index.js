import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logInImage from '@/public/images/SignImage.png';
const index = () => {
    return (
        <div className={styles.login}>

            <div className={styles.form}>
                <Image className={styles.image} src={logInImage} />
                  
                
                <div className={styles.signinlogin}>
                    <h2 className={styles.title}>Log In</h2>
                </div>

                {/* <label htmlFor="">Email:</label> */}
                <input name="Email" type="email" placeholder='Enter your email' />
                {/* <label htmlFor="">Password:</label> */}
                <input name="password" type="password" placeholder='Enter password' />
                <button type='submit' className={styles.button}>Login</button>
                <div className={styles.account}>
                    <span>Not a member?</span>
                    <Link href='/signup' className={styles.btn}>
                        <span >Sign Up</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default index