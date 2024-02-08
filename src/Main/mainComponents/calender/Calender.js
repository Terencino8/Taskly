import React from 'react'
import './calender.css'
import Headbar from '../../../components/headbar/Headbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import CalenderComponent from './CalenderComponent'

const Calender = () => {
  return (
    <div className='calender_Container container'>
    <Headbar/>
    <div className="wrapper">
        <Sidenav/>
        <div className="calenderwrapper">
        <CalenderComponent/>

        </div>
    </div>

    </div>
  )
}

export default Calender