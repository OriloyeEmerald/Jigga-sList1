import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "./features/todoapp/todoSlice";

export const store = configureStore({
    reducer: {
       todolist: todoReducer, 
    }
})

