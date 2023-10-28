import React from 'react'
import styles from "./styles.module.css";
import Navbar from '@/app/components/navbar/Navbar';
// import CourseCard from './CourseCard';
import Link from 'next/link';
// import CourseCard from './CourseCard';
export const background = () => {
  return (
    <div>
        <Navbar/>
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h1 className={styles.heading}>WLECOME TO CLASSROOM</h1>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aut velit quod explicabo, eius officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic.</p>
                    <div className={styles.button}>
                        <button className={styles.primary}> LIVE CLASSES
                            
                        </button>
                        <button className={styles.primary}>
                            EXPLORE COURSES
                        </button>



                    </div>
                </div>
            </div>
        </section>
        <div className={styles.margin}>

        </div>
        {/* <CourseCard/> */}
        
    </div>
  )
}
export default background;