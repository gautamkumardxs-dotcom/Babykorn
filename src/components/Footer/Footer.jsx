import React from 'react'
import header_logo from '../../assets/images/logos/header_logo.svg'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer>
            <section className={styles.mainSec}>
            <section>
                <div className={`${styles.containter} ${styles.containter_1}`}>
                    <img src={header_logo} alt="Logo" />
                    <p>Independent game development
                        and publishing studio based in
                        Assam, India.</p>

                </div>
            </section>
            <section className={styles.linkSec}>
                <div className={`${styles.containter} ${styles.containter_2}`}    >
                    <h3>Explore</h3>
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/games'>Games</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/publishing'>Publishing</Link>
                        <Link to='/contact'>Contact</Link>


                    </div>
                </div>
                <div className={`${styles.containter} ${styles.containter_2}`}>
                    <h3>Games</h3>
                    <div>
                        <Link>The Square</Link>
                        <Link>Boba: A Pig’s Tale</Link>
                        <Link>4X4 Chess</Link>
                        <Link>All Games</Link>
                    </div>

                </div>
                <div className={`${styles.containter} ${styles.containter_3}`}>
                    <h3>Connect</h3>
                    <div>
                        <Link>Instagram</Link>
                        <Link>Facebook</Link>
                        <Link>Linkedin</Link>
                        <Link>Youtube</Link>
                        <Link>Twitter</Link>
                        <Link>Discord</Link>
                    </div>
                </div>
            </section>
            </section>
            <hr style={{margin:'3rem 1rem 1rem 1rem'}} />
            <section className={styles.bottomSec}>


                <div>@ 2026 Baby Korn Studio. All rights reserved.</div>
                <div>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                </div>
            </section>


        </footer >
    )
}

export default Footer
