import React from 'react'
import styles from './Whatwedo.module.css'
import rocket_icon from '../../assets/images/icons/rocket.png'
import globe_icon from '../../assets/images/icons/globe-solid.png'


const Whatwedo = () => {
    return (
        <section className={styles.section}>
            <div className={styles.top} >
                <h2>What We Do</h2>
                <p>We create original games and collaborate with <br /> indie creators to bring bold ideas to life.</p>
            </div>
            <div className={styles.bottom}>
                {/* Cards */}
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <div>01</div>
                        <div>
                            <img  className={styles.rocket} src={rocket_icon} alt="rocket" />
                        </div>
                    </div>
                    <div className={styles.header}>Game <br /> Development</div>
                    <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolores itaque eaque quasi aliquid architecto nulla, dignissimos voluptatum repellat laudantium?</div>
                </div>
                {/* Card */}
                <div className={`${styles.card} ${styles.card2}`}>
                    <div className={styles.icon}>
                        <div>01</div>
                        <div>
                            <img  className={styles.rocket} src={globe_icon} alt="rocket" />

                        </div>
                    </div>
                    <div className={styles.header}>Game <br /> Development</div>
                    <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolores itaque eaque quasi aliquid architecto nulla, dignissimos voluptatum repellat laudantium?</div>
                </div>







            </div>

        </section>
    )
}

export default Whatwedo
