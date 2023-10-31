import React, { useContext, useState } from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router'
import logInImage from '@/public/images/SignImage.png';
import { AuthContext } from '@/context/authContext';
const index = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
      });

    const {loading,error,dispatch}=useContext(AuthContext);
    const [allgood,setAllgood]=useState(true);
    const router = useRouter()

   

    
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      console.log("res is ",res)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      if(allgood==false){
        setAllgood(true);
      }
      router.push("/")
    } catch (err) {
        console.log("error is ",err);
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      setAllgood(false);
    }
  };


    return (
        <div className={styles.login}>
          {!allgood?(<div>
                       Some Error Occured
                </div>):(<span></span>)}
                  

            <div className={styles.form}>
                <Image className={styles.image} src={logInImage} />
                
                
                <div className={styles.signinlogin}>
                    <h2 className={styles.title}>Log In</h2>
                </div>

                {/* <label htmlFor="">Email:</label> */}
                <input name="Email" type="email" id='email' placeholder='Enter your email'  onChange={handleChange} />
                {/* <label htmlFor="">Password:</label> */}
                <input name="password" type="password" id='password' placeholder='Enter password'  onChange={handleChange}/>
                <button type='submit' className={styles.button} disabled={loading}  onClick={handleClick}>Login</button>
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