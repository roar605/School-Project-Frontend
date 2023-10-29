'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'

export const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  })
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async () => { 
    try {
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      })
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        })
        setStatus('success'); 
      } else {
        setStatus('error');
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  
  return (
    <form className={styles.contactform} onSubmit={handleSubmit}>
      <div className={styles.inputfield}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input type="text" name="username" id="username"
          placeholder="Enter your name"
          value={user.username}
          onChange={handleChange}
          autoComplete="off"
          required
          />
        </label>
      </div>
      <div className={styles.inputfield}>
        <label htmlFor="email" className={styles.label}>
          Enter your email
          <input type="text" name="email" id="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
          required
          />
        </label>
      </div>
      <div className={styles.inputfield}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone
          <input type="number" name="phone" id="phone"
          placeholder="Enter your phone"
          value={user.phone}
          onChange={handleChange}
         autoComplete="off"
         required
         />
        </label>
      </div>
      <div className={styles.inputfield}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea name="message" id="message" rows={5}
          placeholder="Enter your message"
          value={user.message}
          onChange={handleChange}
         autoComplete="off"
         required
         />
        </label>
      </div>
      <div className={styles.btn}>
        {status==='success' && <p className={styles.successmsg}>Thank you for your message</p>}
        {status==='error' && <p className={styles.errormsg}>There was an error</p>}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default ContactForm