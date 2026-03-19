import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'

import { BrowserRouter } from 'react-router-dom'
import ROTAS from './Rotas/Rotas'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <ROTAS />
  </StrictMode>
  </BrowserRouter>
  )
