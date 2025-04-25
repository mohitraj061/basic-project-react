// We can name the file todo.js, but it’s a good practice to name it something like todoSlice.js so it’s clear that Redux toolkit is being used. It's naming convention.

import { createSlice, nanoid } from "@reduxjs/toolkit";  // nanoid generate unique IDs like Date.now()

// Initial state for the todo slice containing one default todo item
// const initialState = {
// todos: [{ id: 1, text: "Hello World !" }]
// };

export const todoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [{ id: 1, text: "Hello World !" }]
    },
    
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const updateTodo = state.todos.find((todo) => todo.id === id);
            if (updateTodo) {
                updateTodo.text = newText;
            };
        }
    }
});

// Export actions and reducer
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
