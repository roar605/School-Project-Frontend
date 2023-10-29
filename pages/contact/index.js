import ContactCard from '@/pages/contact/ContactCard'
import React from 'react'
import styles from "./styles.module.css";
import ContactForm from '@/pages/contact/ContactForm'
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navbar/Navbar';
function Contact() {
  return (
    <div>
      <Navbar/>
      {/* <h1>Conatct us</h1> */}
      {/* <h1>Join your hands</h1> */}
      <div className={styles.card}>
        
      <ContactCard/>
      </div>
    
    <div className={styles.body}>
    <h2>We'd love to hear from you</h2>
    <section className={styles.container}>
      
      <ContactForm/>
    </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact