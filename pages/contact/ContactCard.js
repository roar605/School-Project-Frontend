// import styles from "./styles.module.css"
// import { MdEmail,MdVoiceChat,MdForum } from "react-icons/md";
// import Link from 'next/link';
// const ContactCard = () => {
//   return (
    
//     <div className={styles.developers}>
//     <div className={styles.devcards}>
//             {/* mail */}
//             <div className={styles.dev} id={styles.dev1}>
              
              
//               <h3>Email</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
//               <div className={styles.media}>
//                 <div className={styles.socialitem}>
//                   <MdEmail />
//                 </div>
                
//               </div>
//               {/* Voice Chat */}
//             <div className={styles.dev} id={styles.dev1}>
              
              
//               <h3>Voice Chat</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
//               <div className={styles.media}>
//                 <div className={styles.socialitem}>
//                   <MdVoiceChat />
//                 </div>
                
//               </div>
//               {/* Community*/}
//             <div className={styles.dev} id={styles.dev1}>
              
              
//               <h3>Community</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
//               <div className={styles.media}>
//                 <div className={styles.socialitem}>
//                   <MdForum />
//                 </div>
                
//               </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//   )
// }

// export default ContactCard
import styles from "./styles.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from 'next/link';

const ContactCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.developers}>
        <h1>Join our community</h1>
        <div className={styles.devcards}>
          
          {/* mail */}
          <div className={styles.dev}>
            <h3>Email</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
            <div className={styles.media}>
              <div className={styles.socialitem}>
                <Link href="/"><MdEmail /></Link>
                
              </div>
            </div>
          </div>
          {/* Voice Chat */}
          <div className={styles.dev}>
            <h3>Voice Chat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
            <div className={styles.media}>
              <div className={styles.socialitem}>
                <Link href="/"><MdVoiceChat /></Link>
                
              </div>
            </div>
          </div>
          {/* Community */}
          <div className={styles.dev}>
            <h3>Community</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, dolorum! Consectetur, laboriosam.</p>
            <div className={styles.media}>
              <div className={styles.socialitem}>
                <Link href="/"><MdForum /></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ContactCard;
