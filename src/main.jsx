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
import DSMTest from './pages/DSMTest'
import Result from './pages/Result'
import DataPrivacy from './pages/DataPrivacy'

import { AuthProvider } from '../src/components/AuthContext';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TermsCondition from './pages/TermsCondition'
import Disclaimer from './pages/Disclaimer'

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
  },
  {
    path:"dsm-5-tr/test",
    element: <DSMTest/>
  },
  {
    path:"dsm-5-tr/test/result",
    element: <Result/>
  },
  {
    path:"dashboard",
    element: <Dashboard/>
  },
  {
    path:"data-privacy",
    element: <DataPrivacy/>
  },
  {
    path:"terms-and-conditions",
    element: <TermsCondition/>
  },
  {
    path:"what-is-dsm-5-tr/disclaimer",
    element: <Disclaimer/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
