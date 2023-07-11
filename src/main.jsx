import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// pages
import App from './App.jsx'
import Scoring from './pages/Scoring.jsx'
import Specialized from './pages/Specialized.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Resources from './pages/Resources.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
{/* <Li text='Scoring Guide' link='/scoring-guide'/>
<Li text='Specialized Tests' link='/specialized-tests'/>
<Li text='About Us' link='/about-us'/>
<Li text='Resources' link='/resources'/> */}
const router =  createBrowserRouter([
  {
    path:"/",
    element: <App/>
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
