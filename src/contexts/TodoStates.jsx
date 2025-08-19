import { createContext, useContext, useState } from "react";

export const AppTodoStateContext = createContext({
    todos: [
        {
            id: 1,
            content: 'This is where you will write your Todos',
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo_content)=>{},
    deleteTodo: (id)=>{},
})

export function AppTodoStateContextProvider({children}){

    const [todos, setTodos] = useState([])
    const addTodo = (todo)=>{
        setTodos(prev => [todo, ...prev])
    }

    const updateTodo = (id, todo_content)=>{
        todos.map(todo_element => ()=>{
            if (todo_element.id === id) {
                return {id: id, content: todo_content, completed: todo_content.completed}
            } else {
                return todo_element
            }
            
        })
    }

    const deleteTodo = (id)=>{
    }
    
    const value = {}
    return <AppTodoStateContext.Provider value={value}>
        {children}
    </AppTodoStateContext.Provider>
}