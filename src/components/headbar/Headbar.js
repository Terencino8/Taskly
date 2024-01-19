import React, { useState } from 'react';
import './Headbar.css';
import Logo from "../../T_images/logotasklylogo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'



function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

const Headbar = () => {

    const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className='headbar'>
    <div className="bar">
        <div className="headlogo">
                <img src={Logo} alt=""/>
              
            </div>
            <div className="headDate">
            <p>
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;{currentDate}</p>
            </div>
    </div>
        
    </div>
  )
}

export default Headbar