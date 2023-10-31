import React, { useRef, useState } from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import logInImage from '@/public/images/SignImage.png';
import { useRouter } from 'next/router'
const index = () => {

    const username=useRef("");
    const email=useRef("");
    const password=useRef("");
    const [role,setRole]=useState("student");
    const phone=useRef("");
    const [allgood,setAllgood]=useState(true);
    const router = useRouter()

    const handleChange = (e) => {
        
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
        setRole(e.target.value);

      }

      const handleClick = async (e) => {
        e.preventDefault();
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            phone:phone.current.value,
            role:role,
          };
          try {
            await axios.post("http://localhost:5000/api/auth/register", user);
            if(allgood==false){
              setAllgood(true);
            }
            router.push("/login");
            
          } catch (err) {
            console.log(err);
            setAllgood(false);
          }
        
      };

    return (
        <div className={styles.signup}>
          {!allgood?(
            <div>
              Some Error Occured
            </div>
          ):(<span></span>)}
            <div className={styles.form}>
                <Image className={styles.image} src={logInImage} />
                <div className={styles.signinlogin}>
                    <h2 className={styles.title}>Sign Up</h2>
                </div>
                 
                <span className="checkmark">
                

                <h4>I want to join as a:</h4>
              </span>
              <br />
              <div>
                <span>
                  <h2>
                    Student
                    <input type="radio" name="check" value="student" onChange={handleChange}  />
                  </h2>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <span>
                  <h2>
                    Tutor <input type="radio" name="check" value="teacher" onChange={handleChange} />
                  </h2>
                  
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <span>
                  <h2>
                    Investor <input type="radio" name="check" value="investor" onChange={handleChange} />
                  </h2>
                  
                </span>
                
                
                
              </div>


                <input name="username" type="text" placeholder='Enter your username' ref={username}/>
                <input name="email" type="email" placeholder='Enter your email' ref={email} />
                <input name="phone" type="text" placeholder='Enter your phone no' ref={phone} />
                <input name="password" type="password" placeholder='Enter password' ref={password} />
                <button type='submit' className={styles.button} onClick={handleClick}>Signup</button>
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