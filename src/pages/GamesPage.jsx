import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';



const header = 'Play Something \n Different';
  const description = "Explore the games we've crafted — each one built with creativity, curiosity, and a love for playful experiences.";
  const bgcolor = "#43CCFD";

const GamesPage = (props) => {
  return (
   <>
    <PageHeader header = {header} description = {description} bgcolor={bgcolor} />
    {/* <VideoPlayer /> */}
    </>
   
  )
}

export default GamesPage
