import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Footer from './components/Footer/Footer'
import GamesPage from './pages/GamesPage'
import NewsPage from './pages/NewsPage'
import PublishingPage from './pages/PublishingPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (<>

    <Navbar />

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage header="About Us" />} />
      <Route path="/games" element={<GamesPage header="Games page" />} />
      <Route path="/news" element={<NewsPage header="News page" />} />
      <Route path="/publishing" element={<PublishingPage header="Publishing page" />} />
      <Route path="/contact" element={<ContactPage header="Contact page" />} />
    </Routes>

    <Footer />


  </>
  )
}



export default App
