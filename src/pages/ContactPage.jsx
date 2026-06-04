import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'



const header = `Let’s Build \n Something Meaningful`;
  const description = "Whether you're a player, developer, press member, or potential collaborator — we’re open to conversations that matter.";
  const bgcolor = "#EB3EF1";

const ContactPage = (props) => {

  return (
   <>
   
    <PageHeader header = {header} description = {description} bgcolor={bgcolor} />
    </>
  )
}

export default ContactPage
