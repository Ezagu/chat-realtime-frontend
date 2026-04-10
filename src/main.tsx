import { createRoot } from 'react-dom/client'
import "react-time-ago/locale/en"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <App />
)
