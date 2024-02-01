import React from 'react'
import { Textfit } from 'react-textfit';
import './Tasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil }  from '@fortawesome/free-solid-svg-icons'


function showMessage(){
  let message1 = 'Completed';
  document.getElementById("action").innerHTML = message1;
  document.getElementById("action").style.color = 'green'

}

const Tasks = ({task, deleteTodo, editTodo}) => {


  return (
    <div className="task">

        <div className="taskwrapper" >
            <Textfit className="taskname">
                <h3  className='tname' onClick={showMessage}>{task.task}</h3>
                
            </Textfit>
            
        </div>





        <div className="taskaction">
         
        <span className="action" id='action' >Processing</span>
        <FontAwesomeIcon icon={faPencil} className='i editIcon' onClick={() =>editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} className='i trashIcon' onClick={() =>deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Tasks