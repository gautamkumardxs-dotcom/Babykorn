import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import OurGames from '../components/OurGamesSection/OurGames'
import Whoweare from '../components/Whoweare/Whoweare'
import Whatwedo from '../components/WhatwedoCard/Whatwedo'
import LatestNews from '../components/LatestNews/LatestNews'
import Joincom from '../components/Joincom/Joincom'
import Publishwith from '../components/PublishWith/Publishwith'


const Homepage = () => {
  return (
   <>
   <VideoPlayer />
   <OurGames />
   <Whoweare />
   <Whatwedo />
   <LatestNews />
   <Publishwith />

   <Joincom />
   </>
  )
}

export default Homepage
