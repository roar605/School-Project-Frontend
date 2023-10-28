import React from 'react'
import styles from "./styles.module.css";
import Navbar from '@/app/components/navbar/Navbar';
// import bg1 from "@/public/images/studybackground.png";
import Image from 'next/image';
import Links from 'next/link'
import Background from './Background';
import CourseCard from './CourseCard';
import Footer from '@/app/components/footer/Footer';

const StudyMaterials = () => {
  return (
    <>
    <p className={styles.head}>
    <Background/>
    </p>
    <p className={styles.second}><CourseCard/></p>
    <Footer/>
     

    
    </>
  )
} 

export default StudyMaterials;