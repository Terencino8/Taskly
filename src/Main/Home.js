import React from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'
import "../components/sidenav/Sidenav.css"
import Headbar from "../components/headbar/Headbar"
import Sidenav from '../components/sidenav/Sidenav'
import Mytasks from './mainComponents/myTasks/Mytasks'
import CalculatorApp from './mainComponents/myTasks/calculator/CalculatorApp'





const Home = () => {





  
  return (
    
    <div className='homecontainer container'>
         <Headbar/>
         <div className="wrapper">

            <Sidenav/>
            <Mytasks/>
            


            <div className="calculatorContainer">
                <CalculatorApp/>
            </div>
         </div>

    </div>
  )
}

export default Home
