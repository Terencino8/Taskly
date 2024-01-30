import React, { useState } from  'react'
import './Mytasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Tasks from './tasks/Tasks'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Mytasks = () => {

  const [value, setValue] = useState("")

        const handleSubmit = e =>{
            e.preventDefault();

            addTodo(value);

            setValue ("")
        } 


        const [todos,  setTodos] = useState([]);

        const addTodo = todo => {
          setTodos ([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}])
          console.log(todos)
      }
      



  return (
    <div className="center_container"  addTodo={addTodo}>

    <div className="titlebar">
        <h1 className="title">My Tasks</h1>
            <form className="buttons" onSubmit={handleSubmit}>
                <div className="searchbar">
                   <input type="text" value={value} placeholder='What are We Doing Today...?' onChange={(e) =>setValue(e.target.value)}/>

                </div>
                <button type='submit'>
                    <FontAwesomeIcon icon={faPlus}/> <span>Add Task</span>
                </button>
            </form>
    </div>



    <div className="task_container">

            {todos.map((todo, index)=> (
              <Tasks  task= {todo} key={index}/>

            ))}
   

       
    </div>

</div>
   
  )
}

export default Mytasks