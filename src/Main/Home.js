import React from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'
import Headbar from "../components/headbar/Headbar"
import Sidenav from '../components/sidenav/Sidenav'

const Home = () => {
  return (
    
    <div className='homecontainer container'>
         <Headbar/>
         <div className="wrapper">
            <Sidenav/>
         </div>

    </div>
  )
}

export default Home
