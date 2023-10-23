import React from 'react'
import styles from './styles.module.css'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footermain}>
      <div className={styles.footfirst}>
        <div className={styles.foottitle4}>Connect With Us</div>
        <div className={styles.sociallink}>
          <div className={styles.socialitem}>
            <FaInstagram />
          </div>
          <div className={styles.socialitem}>
            <FaFacebookF />
          </div>
          <div className={styles.socialitem}>
            <FaLinkedin />
          </div>
          <div className={styles.socialitem}>
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className={styles.footsecond}>
        <div className={styles.foottitle}>About Us</div>
        <div className={styles.footeritem}>
          &#x2022; &nbsp; terms & Conditions
        </div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Privacy Policy</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Contact</div>
      </div>

      <div className={styles.footthird}>
        <div className={styles.foottitle2}> Quick Links</div>
        <div className={styles.footeritem}>
          {" "}
          &#x2022; &nbsp;Research Methodology
        </div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Career</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Media Citations</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; FAQ</div>
      </div>

      <div className={styles.footthird}>
        <div className={styles.foottitle1}>Links</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Instagram</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; LinkedIn</div>
        <div className={styles.footeritem}>&#x2022; &nbsp; Gmail</div>
      </div>
    </div>
  )
}

export default Footer