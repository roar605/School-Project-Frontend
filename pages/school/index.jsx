import React from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import styles from './school.modules.css';
import Image from 'next/image';
import teacher from "@/public/images/school.png";
import Filterschool from '../filter school/Filterschool';
import Footer from '@/app/components/footer/Footer';
function School() {
    return (
        <div className='containers'>

            <div>
                <Navbar />
                <h1 className='header'> School Details </h1>
            </div>
            <div className='decor'>
                <div className='filter'>
                    <Filterschool className='sorting'></Filterschool>
                </div>
                <div className='head'>
                    <div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div><div className='card'>
                        <Image className='teach' src={teacher}></Image>
                        <div className='tdetails'>
                            <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default School

{/* <p>School: Lohia Nagar Mount Carmel</p>
                            <p>Board: ICSE</p>
                            <p>Location: Wayanad</p>
                            <p>Mode of education: English, Malyalam</p> */}