import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// pages
import App from './App.jsx'
import DSMAbout from './pages/DSMAbout'
import Scoring from './pages/Scoring.jsx'
import Specialized from './pages/Specialized.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Resources from './pages/Resources.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'

const router =  createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"what-is-dsm-5-tr",
    element: <DSMAbout/>
  },
  {
    path:"scoring-guide",
    element: <Scoring/>
  },
  {
    path:"specialized-tests",
    element: <Specialized/>
  },
  {
    path:"about-us",
    element: <AboutUs/>
  },
  {
    path:"resources",
    element: <Resources/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
