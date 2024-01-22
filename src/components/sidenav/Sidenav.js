import React from 'react'

import UserImg from "../../T_images/userImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCalendarDays, faList, faChartSimple, faTrash, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Sidenav = () => {

  let btn = document.querySelector('.open')
  let sidebar = document.querySelector('.sidenav_wrapper')
  btn.onclick = function (){
    sidebar.classList.toggle('active');
  
  }


  return (
    <div className='sidenav_wrapper'>
        <div className="top">     
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRightToBracket}  className='open' id='open'/>
              </div>



          
            <div className="nav" >
             
              <FontAwesomeIcon icon={faList} className='i'/>
                <span>My Tasks</span>
            </div>
            <div className="nav" >
            
                <FontAwesomeIcon icon={faCalendarDays} className='i'/>
                <span>calander</span>
              
            </div>
            <div className="nav" >
         
                <FontAwesomeIcon icon={faChartSimple} className='i'/>
                <span>Report</span>
            
            </div>
            <div className="nav" >
       
                  <FontAwesomeIcon icon={faTrash} className='i'/>
                  <span>Recycle Bin</span>
  
            </div>
            <div className="nav" >
                  <FontAwesomeIcon icon={faRightFromBracket} className='i'/>
                  <span>Log Out</span>
            </div>
            

          
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