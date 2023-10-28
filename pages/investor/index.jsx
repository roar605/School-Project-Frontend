import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import styles from "./styles.module.css";
import Login from '../login/index';
import Link from 'next/link';
import Tabledata from './Tabledata';
import Footer from '@/app/components/footer/Footer';
function Investor() {
  return (
    <div className="investor">
      <div className={styles.contri}>
        <h3 className={styles.hd}>Do you want to make a change?</h3>
        <Link className={styles.link} href="/payment">Invest for it.</Link>
      </div>
      <div className={styles.Navbar}><Navbar /></div>
      <div className={styles.log}> <Login /></div>
      <div className={styles.table}><Tabledata></Tabledata></div>
      <Footer></Footer>
    </div>

  )
}

export default Investor