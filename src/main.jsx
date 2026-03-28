import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextPriver } from './context/SeasionContext.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <ContextPriver>

      <App />
      <ToastContainer />
  </ContextPriver>

)
