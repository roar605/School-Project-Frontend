import React from 'react'
import styles from "./styles.module.css";
import Navbar from '@/app/components/navbar/Navbar';
// import Link from 'next/link';
// import contact from '@/pages/contact';
// import Link from 'next/link';

export const background = () => {
  return (
    <div>
        <Navbar/>
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h1 className={styles.heading}>ABOUT US</h1>
                    <div><p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aut velit quod explicabo, eius officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic officiis rerum odit et at hic.</p></div>
                    {/* // <Link href="/student">Student</Link> */}
                    <div className={styles.button}>
                        <button className={styles.primary}> JOIN OUR COMMUNITY</button>
                            
                        
                        <button className={styles.primary}>
                            EXPLORE 
                        </button>



                    </div>
                </div>
            </div>
        </section>
        <div className={styles.margin}>

        </div>
        <div className={styles.bottom}>
            <div className={styles.heading1}>
                <h2>Why Choose Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloremque unde? Magni, dicta voluptas sequi et architecto deserunt officia eos mollitia nobis minus? Enim dolorum suscipit accusamus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem aperiam dolor voluptas alias eaque laborum eos enim inventore! A est veritatis consectetur in rerum cupiditate facere iste voluptas necessitatibus officiis?</p>

            </div>
            <div className={styles.lastbottom}>
                <div className={styles.feature}>
                    <h2>Features we do Offer</h2>
                    <div className={styles.card}>
                        <div className={styles.featureItem}><h3>LIVE CLASSES</h3>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, laudantium!</p></div>
                    <div className={styles.featureItem}>
                    <h3>INTERACTIVE PLATFORM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quam!</p>
                        </div>
                    
                    <div className={styles.featureItem}>
                    <h3>EASY TO USE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, excepturi.</p></div>
                    </div>
                    
                    

                </div>
            </div>
        </div>
        {/* <CourseCard/> */}
        
    </div>
  )
}
export default background;