import React from 'react'
import styles from './styles.module.css'
function MenuItem(props) {
    const{para,name,state}=props;
  return (
    <div className={styles.menuitem}>
         {/* <div style={{backgroundImage:`url(${image})`}}></div> */}
         
         <p>{para}</p>
        <h1>{name}</h1>
        <p>{state}</p>

    </div>
  )
}

export default MenuItem