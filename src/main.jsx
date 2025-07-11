import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ItsTime from './components/ItsTime.jsx'
import DarkMode from './components/DarkMode.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ItsTime />
  </>,
)
