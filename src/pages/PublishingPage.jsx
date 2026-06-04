import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'


const header = 'Let’s bring your \n Game to players';
  const description = 'We partner with passionate indie developers to bring thoughtful games to the right audience.';
  const bgcolor = "#FFAB34";

const PublishingPage = (props) => {
  return (
   <>
   
    <PageHeader header = {header} description = {description} bgcolor={bgcolor} />
    </>
  )
}

export default PublishingPage
