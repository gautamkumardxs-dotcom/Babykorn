import React from 'react'
import styles from './PageHeader.module.css'
import headerbg from '../../assets/images/gallery/bg.jpeg'

const PageHeader = (props) => {
  return (
    <div className={styles.pageHeader} style={{ backgroundImage: `url(${headerbg})`, '--bg-color': props.bgcolor }}>
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      
    </div>
  )
}

export default PageHeader
