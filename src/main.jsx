import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/scss/index.scss"
import "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import { root } from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={root}/>
  </StrictMode>,
)
