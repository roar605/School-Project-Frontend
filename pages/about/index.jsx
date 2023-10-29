import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import styles from "./styles.module.css"
import Footer from '@/app/components/footer/Footer'
import Background from "./Background";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.head}>
    <Background/>
    </p>


      
      
      <Footer/>
    </div>
  )
}

export default About