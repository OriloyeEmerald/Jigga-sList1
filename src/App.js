import { useState } from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { addTask, deleteTask, doneTask } from './features/todoapp/todoSlice';

function App({todolist}) {
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch();

  return (

    <div className="App">
      <div>
        <input type='text' placeholder='enter task...' value={newTask} onChange={(e) => setNewTask(e.target.value)} className='input'/>
       
        <button onClick={() => {dispatch(addTask(newTask))
         setNewTask('')
        }
      } className='btn'>add task</button>
      </div>
      <div>
        <ol>
        {todolist.map((todo, id) => {
            return <div key={todo.id} >
              <li className='text' style={{color: todo.completed && "green"}}>{todo.task}</li>
              <button onClick={() => dispatch(doneTask(todo.id))} className='btn' style={{backgroundColor: "green"}}>done</button>
              <button onClick={() => { dispatch(deleteTask(todo.id))} } className='btn' style={{backgroundColor: '#8b0000'}}>delete</button>
            </div>
      })}
          </ol>
          </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todolist: state.todolist
})
export default connect(mapStateToProps)(App);
