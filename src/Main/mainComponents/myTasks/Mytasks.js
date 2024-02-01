import React, { useState } from  'react'
import './Mytasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Tasks from './tasks/Tasks'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './tasks/EditTodoForm'
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




      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
      }

      const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
      }


      const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo ))
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
              todo.isEditing ? (
                <EditTodoForm  editTodo={editTask} task = {todo}/>
              ) : (
                   <Tasks  task= {todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>

              )

            ))}
   

       
    </div>

</div>
   
  )
}

export default Mytasks