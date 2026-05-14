import React from 'react'
import LeftPartJD from './LeftPartJD'
import MainJD from './MainJD'
import Navbar from './Navbar'

const PostJD = () => {
  return (
    <div className='post-jd-page flex flex-col h-screen'>
        <Navbar />
        <div className='post-jd'>
            <LeftPartJD /> 
            <MainJD />
        </div>
        
    </div>
  )
}

export default PostJD
