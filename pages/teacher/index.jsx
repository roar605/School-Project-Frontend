import React from 'react'
import Navbar from '@/app/components/navbar/Navbar'
import styles from './Teacher.module.css';
import Image from 'next/image';
import teacher from "@/public/images/teacher_avatar.png";
import Footer from '@/app/components/footer/Footer';
import Filter from '../filter/Filter';
function Teacher() {
  return (
    <div className={styles.containers}>

      <div>
        <Navbar />
        <h1 className={styles.header}> Teachers' Profile </h1>
      </div>
      <div className={styles.decor}>
        <div className={styles.filter}>
          <Filter className={styles.sorting}></Filter>
        </div>
        <div className={styles.head}>
          <div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: Hindi</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: Hindi</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: Sanskrit</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: English</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: Hindi</p>
            </div>
          </div><div className={styles.card}>
            <Image className={styles.teach} src={teacher}></Image>
            <div className={styles.tdetails}>
              <p>Name : Rohit Kumar Singh</p>
              <p>Classes : 6-12</p>
              <p>Subjects: All</p>
              <p>Language: Tamil</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Teacher