import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './components/App2.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
