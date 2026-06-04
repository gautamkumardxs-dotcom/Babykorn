import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'

const Aboutpage = (props) => {
  const header = 'Small Studio, Big Ideas';
  const description = 'Baby Korn Studio is an indie game development and publishing studio driven by curiosity, creativity, and meaningful play.';
  const bgcolor = "#69EE76";
  return (
    <>
   
    <PageHeader header = {header} description = {description} bgcolor={bgcolor} />
    </>
  )
}

export default Aboutpage
