import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todolist',
    initialState:[],
    reducers: {
        addTask: (state, action) => {
            const todo = {
               id: Date.now(),
               task: action.payload,
               completed: false
            }
            state.push(todo);
        },

        doneTask: (state, {payload}) => {
           const todo = state.find((todo) => todo.id === payload);
           if (todo) {
             todo.completed = true
           }
        },
        deleteTask: (state, {payload}) => {
            return state.filter((todo) => todo.id !== payload)
        }
    }
})


export const {addTask, doneTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer;