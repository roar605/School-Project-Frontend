import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import styles from "./styles.module.css";
import FeedbackForm from './FeedbackForm';
import Footer from '@/app/components/footer/Footer';
function Feedback() {
  return (
    <div>
      <Navbar/>
      <div className={styles.heading}>
        <h2>Feedback Form</h2>
        <div className={styles.input}>
          <FeedbackForm/>
        </div>


      </div>
    {/* <h2>SOME FEEDBACK GIVEN BY OUR STUDENTS</h2> */}

      
    </div>
  )
}

export default Feedback