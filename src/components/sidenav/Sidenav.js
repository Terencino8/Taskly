import React from 'react'
import { Link } from 'react-router-dom'
import UserImg from "../../T_images/userImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCalendarDays, faList, faChartSimple, faTrash, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Home from '../../Main/Home'



function displaySidenav (){
  document.getElementById('sidenav_wrapper').classList.toggle('active');

}

const Sidenav = () => {






  return (
    <div className='sidenav_wrapper' id='sidenav_wrapper'>
        <div className="top">     
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRightToBracket}  className='open' onClick={displaySidenav}/>
              </div>



          
            <Link to="/home" className="nav nav_task">
             
              <FontAwesomeIcon icon={faList} className='i'/>
                <span>My Tasks</span>
            </Link>
            <Link to="/calender" className="nav nav_calender">
            
                <FontAwesomeIcon icon={faCalendarDays} className='i'/>
                <span>calander</span>
              
            </Link>
            <div className="nav nav_Report" >
         
                <FontAwesomeIcon icon={faChartSimple} className='i'/>
                <span>Report</span>
            
            </div>
            <div className="nav" >
       
                  <FontAwesomeIcon icon={faTrash} className='i'/>
                  <span>Recycle Bin</span>
  
            </div>
            <Link to="/" className="nav" >
                  <FontAwesomeIcon icon={faRightFromBracket} className='i'/>
                  <span>Log Out</span>
            </Link>
            

          
        </div>

        <div className="user">
          <div className="userImg">
            <img src={UserImg} alt="users_image"/>
          </div>

              <div className="aboutUser">
                <p className='name'>Onyekachi Terence</p>
                <p className="occupation">UI Designer</p>
              </div>
        </div>
    </div>
  )


}

export default Sidenav