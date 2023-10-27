import React from "react";
// import Navbar from "../navbar/Navbar";
import Image from "next/image";
import img1 from "@/public/images/girl.png";
import bg1 from "@/public/images/bgImage1.png";
import bg2 from "@/public/images/bgImage2.png";
import students from "@/public/images/students.png";
import teachers from "@/public/images/teachers.png";
import investors from "@/public/images/investors.png";
import dev1 from "@/public/images/developer1.jpeg";

import styles from "./styles.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.container}>

      <section className={styles.section}>

        {/* first part */}
        <div className={styles.home} id="home">
          <Image id={styles.bg1} src={bg1}></Image>
          <Image id={styles.bg2} src={bg2}></Image>
          <div className={styles.hometext}>
            <h1>Who we are ??</h1>
         
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt iure error? Fugiat beatae exercitationem dolor ipsa, repudiandae animi doloremque libero minus voluptate reprehenderit modi quos blanditiis error at! Sequi.</p>
            <div className={styles.design}>
              <div className={styles.latter}>
                <form>
                  <input type="email" placeholder="Write your email" required></input>
                  <button className={styles.btnlg}><a href="#signin">LogIn</a></button>
                </form>
              </div>



            </div>
          </div>
          <div className={styles.homeimg}>
            <Image className={styles.img} src={img1} />
          </div>
        </div>

        {/* second part */}
        <div className={styles.features}>
          {/* card_01 */}
          <div className={styles.cards} id={styles.card1}>
            <Image className={styles.logo} src={students}></Image>
            <h2>Students</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure impedit, libero harum omnis veniam!</p>
            <button>&#x279C;</button>

          </div>
          {/* card_02 */}
          <div className={styles.cards} id={styles.card2}>
            <Image className={styles.logo} src={teachers}></Image>
            <h2>Teachers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure impedit, libero harum omnis veniam!</p>
            <button>&#x279C;</button>

          </div>
          {/* card_03 */}
          <div className={styles.cards} id={styles.card3}>
            <Image className={styles.logo} src={investors}></Image>
            <h2>Investors</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure impedit, libero harum omnis veniam!</p>
            <button>&#x279C;</button>

          </div>
        </div>


        {/* third part */}
        <div className={styles.content}>
          <div className={styles.color} id={styles.color1}></div>
          <div className={styles.text}>
            <h2>Welcome Message</h2>
            <p>Lorem ia facere in tempora voluptatibus ut eius iure reiciendis, officia enim quasi deleniti earum nemo eligendi dolor voluptatem debitis ad illo cupiditate nostrum maiores non. A in labore reiciendis itaque inventore enim aliquam placeat. Eaque at nihil repellat consequuntur velit eligendi a aut ipsa qui rem facere, beatae provident atque dolore laboriosam quod quisquam ad sunt nesciunt laborum expedita laudantium molestiae, tempora impedit. Magni nobis adipisci molestias vitae, consequuntur incidunt consequatur rerum id nihil perspiciatis quos dolor sed dolores voluptate expedita, eos beatae eum? sum dolor, sit amet consectetur adipisicing elit. Corporis quas at mollitia fuga, esse laboriosam adipisci labore eos nemo facere quod exercitationem, eveniet illum aliquid sequi quisquam aliquam. Tempora esse aliquam nemo fugiat praesentium aliquid eaque illum dolores, similique quo!lorem20
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className={styles.color} id={styles.color2}></div>
        </div>

        {/* fourth part */}
        <div className={styles.developers}>
          <div className={styles.heading}>
            <h2>Meet The Team</h2>
            <h3>Our Professionals</h3>
          </div>
          <div className={styles.devcards}>
            {/* developer_01 */}
            <div className={styles.dev} id={styles.dev1}>
              
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
              <div className={styles.media}>
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

            {/* developer_02 */}
            <div className={styles.dev} id={styles.dev1}>
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad minima aperiam. Magnam possimus laudantium praesentium perspiciatis?
              </p>
              <div className={styles.media}>
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

            {/* developer_03 */}
            <div className={styles.dev} id={styles.dev1}>
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, maxime quas.</p>
              <div className={styles.media}>
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

            {/* developer_04 */}
            <div className={styles.dev} id={styles.dev1}>
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores commodi explicabo quas nesciunt.</p>
              <div className={styles.media}>
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

            {/* developer_05 */}
            <div className={styles.dev} id={styles.dev1}>
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, molestias aliquam pariatur labore doloremque error?</p>
              <div className={styles.media}>
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

            {/* developer_06 */}
            <div className={styles.dev} id={styles.dev1}>
              <Image className={styles.devimages} src={dev1}></Image>
              <h3>Rohit Kumar Singh</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex provident saepe similique.</p>
              <div className={styles.media}>
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
          </div>



        </div>
      </section>
    </div>
  );
};

export default Home;