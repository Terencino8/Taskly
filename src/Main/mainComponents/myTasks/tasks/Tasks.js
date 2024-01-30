import React from 'react'
import { Textfit } from 'react-textfit';
import './Tasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil }  from '@fortawesome/free-solid-svg-icons'

const Tasks = ({task}) => {
  return (
    <div className="task">

        <div className="taskwrapper">
            <Textfit className="taskname">
                <h3 className="tname">{task.task}</h3>
                
            </Textfit>
            
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