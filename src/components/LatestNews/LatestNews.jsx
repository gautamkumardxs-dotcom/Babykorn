import React from 'react'
import styles from './LatestNews.module.css'
import Image1 from '../../assets/images/gallery/Group photo 9.webp'


const LatestNews = () => {
    return (
        <>
            <section>
                <div className={styles.top}>
                    <h1>Latest News</h1>
                    <p>Stay updated with development logs and studio announcements</p>
                </div>
                <div className={styles.bottom}>


                    {/* card */}
                    <div className={styles.card}>
                        <div className={styles.card_top}><img src={Image1} alt="" /></div>
                        <div className={styles.card_bottom}>
                            <p>February 26, 2026</p>
                            <h3 className={styles.card_title}>How We Designed the Pain From the Ground Up</h3>
                            <i class="ri-arrow-right-double-line"></i>
                        </div>
                    </div>
                    {/* card */}
                    <div className={styles.card}>
                        <div className={styles.card_top}><img src={Image1} alt="" /></div>
                        <div className={styles.card_bottom}>
                            <p>February 26, 2026</p>
                            <h3 className={styles.card_title}>How We Designed the Pain From the Ground Up</h3>
                            <i class="ri-arrow-right-double-line"></i>
                        </div>
                    </div>{/* card */}
                    <div className={styles.card}>
                        <div className={styles.card_top}><img src={Image1} alt="" /></div>
                        <div className={styles.card_bottom}>
                            <p>February 26, 2026</p>
                            <h3 className={styles.card_title}>How We Designed the Pain From the Ground Up</h3>
                            <i class="ri-arrow-right-double-line"></i>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default LatestNews
