import React from 'react'
import styles from './styles.module.css'
import Navbar from '@/app/components/navbar/Navbar'
import { MenuList } from './MenuList'
import MenuItem from './MenuItem'
import Footer from '@/app/components/footer/Footer'
const Loans = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.menu}>
        <h1 className={styles.title}>Government Schemes</h1>
        <div className={styles.menuList}>
          {MenuList.map((menuItem,key)=>{
            return(
              <MenuItem
              key={key}
              // para={menuItem.para}
              para={menuItem.para}
              name={menuItem.name}
              state={menuItem.state}/>
            )
          })}

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Loans