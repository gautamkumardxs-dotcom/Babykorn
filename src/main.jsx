import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, } from 'react-router-dom'



createRoot(document.getElementById('babykorn-studio')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
