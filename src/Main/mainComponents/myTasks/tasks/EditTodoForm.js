import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Tasks.css'



const EditTodoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue ("")
    } 



  return (
    <form className="Updatebuttons" onSubmit={handleSubmit}>
                <div className="searchbar">
                   <input type="text" value={value} placeholder='Update Task' onChange={(e) =>setValue(e.target.value)} className='updateInput'/>

                </div>
                <button type='submit' className='updateBtn'>
                    <FontAwesomeIcon icon={faPlus}/> <span>Update</span>
                </button>
            </form>
  )
}

export default EditTodoForm