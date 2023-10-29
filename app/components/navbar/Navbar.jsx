import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
<<<<<<< HEAD
import{
  FaBars,
  FaCross
} from "react-icons/fa";

=======
// import logo from "@/public/images/logo.png"
>>>>>>> 6faeff3653ff12c46179132ded85af2fd3554108
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navwrapper}>
        <Link href="/" className={styles.logo}>
<<<<<<< HEAD
          <img src="../images/logo.png" alt="Logo" />
=======
           <img src="../images/logo.png" alt="Logo" />
           
           {/* <Image src={logo}></Image> */}
>>>>>>> 6faeff3653ff12c46179132ded85af2fd3554108
        </Link>
        <nav>
          <ul className={styles.navbar}>
            <li><Link href="#">Home</Link></li>
            <li className={styles.dropdown}>
              <Link href="/Categories">Categories </Link>
              
              <ul className={styles.dropdownContent}>
                <li className={styles.submenu}>
                  <Link href="/teacher">Teacher</Link>
                  {/* <ul className={styles.submenuContent}>
                  <li><Link href="/Uploadnotes">Study Materials</Link></li>
                  <li><Link href="/StudentProgress">Mentor Access</Link></li>
                  
                </ul> */}
                </li>
                <li className={styles.submenu}>
                  <Link href="/student">Student</Link>
                  {/* <ul className={styles.submenuContent}>
                  <li><Link href="/StudyMaterials">Study Materials</Link></li>
                  <li><Link href="/MentorAccess">Mentor Access</Link></li>
                  <li><Link href="/Loans">Loans</Link></li>
                </ul> */}
                </li>
                <li className={styles.submenu}>
                  <Link href="/investor">Investor</Link>
                  {/* <ul className={styles.submenuContent}>
                  <li><Link href="/Incentives">Incentives</Link></li>
                  <li><Link href="/Grants">Grants</Link></li>
                </ul> */}
                </li>
                <li className={styles.submenu}>
                  <Link href="/school">School</Link>
                  {/* <ul className={styles.submenuContent}>
                  <li><Link href="/Incentives">Incentives</Link></li>
                  <li><Link href="/Grants">Grants</Link></li>
                </ul> */}
                </li>
              </ul>
            </li>
            <li className={styles.navitem}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li><Link href="/feedback">Feedback</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            {/* <li><Link href="/school">School</Link></li> */}
          </ul>
        </nav>

      </div>

      {/* <button className={styles.btn}><NavLink to="#signin">Login</NavLink></button> */}
    </header>
  );
};

export default Navbar;
//School-Project-Frontend\pages\school
//School-Project-Frontend\pages\teacher