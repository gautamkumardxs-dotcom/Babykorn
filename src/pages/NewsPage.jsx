import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'



const header = 'From the Studio';
  const description = 'Stay updated with announcements, development stories, and the latest happenings at Baby Korn Studio.';
  const bgcolor = "#9574FF";

const NewsPage = (props) => {
  return (
    <>
   
    <PageHeader header = {header} description = {description} bgcolor={bgcolor} />
    </>
  )
}

export default NewsPage
