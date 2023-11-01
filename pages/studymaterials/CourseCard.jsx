import React from 'react'
import styles from "./styles.module.css";
import Image from 'next/image';
import dev1 from "@/public/images/studycard.png";
import { MenuList } from './MenuList';
import MenuItem from './MenuItem';
export const CourseCard = ({ courseData }) => {
  return (
    <div>
      
<div className={styles.menu}>
        <h1 className={styles.title}>LIVE CLASSES</h1>
        <div className={styles.menuList}>
          {MenuList.map((menuItem,key)=>{
            return(
              <MenuItem
              key={key}
              // para={menuItem.para}
              para={menuItem.para}
              // image={menuItem.image}
              name={menuItem.name}
              state={menuItem.state}/>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default CourseCard;
