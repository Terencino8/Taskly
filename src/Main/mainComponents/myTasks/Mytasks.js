import React from 'react'
import './Mytasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import Tasks from './tasks/Tasks'

const Mytasks = () => {
  return (
    <div className="center_container">


    <div className="titlebar">
        <h1 className="title">My Tasks</h1>
            <div className="buttons">
                <div className="searchbar">
                   <input type="text" placeholder='Search'/>
                   <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchBtn'/>

                </div>
                <button>
                    <FontAwesomeIcon icon={faPlus}/> <span>New Task</span>
                </button>
            </div>
    </div>
    <div className="task_container">
        
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/> 

    </div>

</div>
   
  )
}

export default Mytasks