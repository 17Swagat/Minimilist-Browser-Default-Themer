import { createContext, useContext, useEffect, useState } from "react";

export const AppTodoStateContext = createContext({
    todos: [
        {
            id: 1,
            content: 'Template...',
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo_content)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export function AppTodoStateContextProvider({children}){

    const [todos, setTodos] = useState([
        // {
        //     id: 1,
        //     content: '1 This is where you will write your Todos',
        //     completed: false
        // },
        // {
        //     id: 2,
        //     content: '2 This is where you will write your Todos',
        //     completed: false
        // },
        // {
        //     id: 3,
        //     content: '3 This is where you will write your Todos',
        //     completed: false
        // },
        // {
        //     id: 4,
        //     content: '4 This is where you will write your Todos',
        //     completed: false
        // }
    ])
    
    const addTodo = (todoContent)=>{
        // For Id:
        let now = new Date()
        let id = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}/${now.getHours()}/${now.getMinutes()}/${now.getSeconds()}/${now.getMilliseconds()}` // (DD/MM/YY/T_H/T_M/T_S/T_M)

        setTodos(prev => [
            {id: id, content: todoContent, completed: false}, ...prev])
    }

    const updateTodo = (id, todoContent)=>{
        setTodos(prev => prev.map(
            (item => {
                if (item.id === id) {
                    item.content = todoContent;
                    return item;
                }
                return item;

            })
        )
    )
        
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter((todoItem)=>(todoItem.id != id)))
    }

    const toggleComplete= (id)=>{
    }

    // Local-Storage Saving:=>
    // [Retreving Data]
    useEffect(()=>{
        const todos_ = JSON.parse(localStorage.getItem('TODOS'))
        if (todos_ && (todos_.length > 0)) {
            setTodos(todos_)
        }
    }, [])

    // [Saving Data]
    useEffect(()=>{
        localStorage.setItem('TODOS', JSON.stringify(todos))
    },[todos])
    
    const value = {
        todos, 
        addTodo, 
        updateTodo, 
        deleteTodo,
        toggleComplete
    }
    return <AppTodoStateContext.Provider value={value}>
        {children}
    </AppTodoStateContext.Provider>
}

export function useTodoStateContext(){
    return useContext(AppTodoStateContext)
}