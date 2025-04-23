import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    // this 'todos' is a property
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    // the followings are methods only, functionality of these methods written in App.jsx
    addTodo: (id) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}
