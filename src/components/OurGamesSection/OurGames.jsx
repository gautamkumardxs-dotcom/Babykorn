import React from 'react'
import styles from './OurGames.module.css'
import gamepic1 from "../../assets/images/gallery/boba-a pig's tale.webp"
import { Link } from 'react-router-dom'


const OurGames = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Our Games</h2>
                <Link className={styles.more}>More<i class="ri-arrow-right-s-fill"></i></Link>

            </div>
            <div className={styles.Cards}>
                <div className={styles.card}>
                    <div><img className={styles.banner} src={gamepic1} alt="" /></div>
                    <h4 className={styles.name}>Boba: A Pig’s Tale</h4>
                </div>
                <div className={styles.card}>
                    <div><img className={styles.banner} src={gamepic1} alt="" /></div>
                    <h4 className={styles.name}>Boba: A Pig’s Tale</h4>
                </div>
                 <div className={styles.card}>
                    <div><img className={styles.banner} src={gamepic1} alt="" /></div>
                    <h4 className={styles.name}>Boba: A Pig’s Tale</h4>
                </div>
                
            </div>

        </section>
    )
}

export default OurGames
