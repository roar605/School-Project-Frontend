import React from 'react'
import Navbar from '@/app/components/navbar/Navbar'
import Image from "next/image";
import Link from 'next/link';

import Login from '../login/index'
import styles from './styles.module.css'
import loans from "@/public/images/loans.png";
import studyMaterial from "@/public/images/studyMaterial.png";
import trackprogress from "@/public/images/trackprogress.png";
import Footer from '@/app/components/footer/Footer';


function Student() {
  return (
    <div>Student
      <Navbar/>
      <Login/>
      
      <div className={styles.para}><p>Select your goal</p></div>
      {/* Card part */}
      <div className={styles.card}>
        <div className={styles.container} id={styles.container1}>
        <Image className={styles.logo} src={studyMaterial}></Image>
        
        <Link href="/studymaterials/StudyMaterials">Study Materials </Link>
        </div>
      

      {/* card2 */}
      <div className={styles.container} id={styles.container2}>
        <Image className={styles.logo} src={loans}></Image>
        <Link href="/loans/Loans">Loans</Link>
      

      </div>
      {/* card3 */}

      <div className={styles.container} id={styles.container3}>
        <Image className={styles.logo} src={trackprogress}></Image>
        <Link href="/trackprogress/TrackProgress">Track Progress</Link>
      </div>
      </div>

      
    <Footer/>


    </div>

  )
}

export default Student