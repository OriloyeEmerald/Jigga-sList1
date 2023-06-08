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
        <input type='text' placeholder='enter task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={() => {dispatch(addTask(newTask))
         setNewTask('')
        }
      }>add task</button>
      </div>
      <div>
        <ul>
        {todolist.map((todo, id) => {
            return <div key={todo.id} >
              <li style={{color: todo.completed && "green"}}>{todo.task}</li>
              <button onClick={() => dispatch(doneTask(todo.id))}>done</button>
              <button onClick={() => { dispatch(deleteTask(todo.id))} }>delete</button>
            </div>
      })}
          </ul>
          </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todolist: state.todolist
})
export default connect(mapStateToProps)(App);
