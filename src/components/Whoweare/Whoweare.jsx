import React from 'react'
import styles from './Whoweare.module.css'
import image from '../../assets/images/gallery/Group Photo 2.webp'

const Whoweare = () => {
  return (
    <section className={styles.section}>
        <div className={styles.left}>
            <h3>Who We Are</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, facilis voluptate rem, dicta voluptatibus provident rerum ipsa, enim nulla ad vel fugiat ullam debitis in consequatur modi at tempore vitae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum inventore iste blanditiis non cumque amet, natus nihil maxime repudiandae dignissimos quam ab recusandae deleniti porro voluptates eaque reprehenderit atque?</p>
            <button>Meet the team<i class="ri-arrow-right-double-line"></i></button>
        </div>
        <div className={styles.right}>
            <img src={image} alt="" />
        </div>

    </section>
  )
}

export default Whoweare
