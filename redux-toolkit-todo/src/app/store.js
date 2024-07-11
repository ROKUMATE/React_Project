import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todos/todoSlice";

const store = configureStore({
    reducer: todoReducer,
});

export default store;

// Major mistake we shouldnt directly export the variables
// first we should declare it then we should export that variable
