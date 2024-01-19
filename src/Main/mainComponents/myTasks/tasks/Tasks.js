import React from 'react'
import './Tasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil }  from '@fortawesome/free-solid-svg-icons'

const Tasks = () => {
  return (
    <div className="task">

        <div className="taskwrapper">
            <div className="taskname">
                <h3 className="tname">start up my portfolio 2.0 update. </h3>
                <span className="tdate">tart up my portfolio 2.0 update</span>
            </div>
            
        </div>





        <div className="taskaction">
        <span className="action">Completed</span>
        <FontAwesomeIcon icon={faPencil} className='i editIcon'/>
        <FontAwesomeIcon icon={faTrash} className='i trashIcon'/>
        </div>
    </div>
  )
}

export default Tasks