import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const Homepage = () => {
  return (
    <div id='homepage'>
        <Navbar />
        <div id='content'>
            <Sidebar />
            <Dashboard />
        </div>
      
    </div>
  )
}

export default Homepage
