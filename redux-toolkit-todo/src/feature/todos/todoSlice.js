import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello there",
        },
    ],
};

// function hello() {
//     console.log("Say hello!");
// }

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //      exampleHello = hello; // we have to just give the reference and we dont have to call the function.

        addTodo: (state, action) => {
            // currently what all state is there or we have that is stored in the state
            // action gives the id and the aaditional items

            const todo = {
                id: nanoid(),
                text: action.payload,
            };

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) =>
        //         todo.id === action.payload.id
        //             ? {
        //                   text: action.payload.text,
        //                   ...todo,
        //               }
        //             : todo
        //     );
        // },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
