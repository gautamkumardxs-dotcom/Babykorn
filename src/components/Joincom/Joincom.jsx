import React from 'react'
import styles from './Joincom.module.css'



const Joincom = () => {
  return (
   <>
   <section>
    <div className={styles.top}>
        <h1>Join Our Community</h1>
        <p>See what we’re building, breaking, and launching next.</p>
    </div>
    <div className={styles.bottom}>
        {/*card  */}
        <div className={styles.card}>
            <img src="src\assets\images\logos\facebook.png" alt="hu" />
            <h4>FaceBook</h4>
        </div>
         {/*card  */}
        <div className={styles.card}>
            <img src="src\assets\images\logos\instagramm.png" alt="hu" />
            <h4>Instagram</h4>
        </div> {/*card  */}
        <div className={styles.card}>
            <img src="src\assets\images\logos\youtube.png" alt="hu" />
            <h4>Youtube</h4>
        </div> {/*card  */}
        <div className={styles.card}>
            <img src="src\assets\images\logos\discord.png" alt="hu" />
            <h4>Discord</h4>
        </div> {/*card  */}
        <div className={styles.card}>
            <img src="src\assets\images\logos\linkedinn.png" alt="hu" />
            <h4>Linkedin</h4>
        </div>
    </div>

   </section>
   </>
  )
}

export default Joincom
