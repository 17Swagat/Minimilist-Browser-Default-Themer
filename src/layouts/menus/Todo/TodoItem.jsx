// new:
import React, { useState } from "react";
// import { useTodo } from "../contexts/TodoContext";
import { useTodoStateContext } from "../../../contexts/TodoStates";
export default function TodoItem({ todo_item }) {
  const [todoContent, setTodoContent] = useState(todo_item?.content || '');
  const [isEditable, setIsEditable] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete
  } = useTodoStateContext()

  return (
    <div className="flex items-center bg-gray-300 rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">

      {/* V1 */}
      {/* <input
        type="text"
        className="flex-1 p-3 text-gray-800 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-auto"
        value={todoContent}
        readOnly={!isEditable}
        onChange={(e) => setTodoContent(e.target.value)}
      /> */}

      <input
        type="text"
        className={`flex-1 p-3 rounded-md border overflow-y-auto focus:outline-none focus:ring-2 ${isEditable
            ? 'text-black bg-gray-100 border-2 border-blue-500 shadow-sm focus:ring-blue-500'
            : 'text-gray-800 bg-gray-50 border-gray-200'
          }`}
        value={todoContent}
        readOnly={!isEditable}
        onChange={(e) => setTodoContent(e.target.value)}
      />



      <button
        className="ml-3 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 active:scale-95 select-none font-medium"
        onClick={() => {
          if (isEditable) {
            updateTodo(todo_item.id, todoContent)
          }
          setIsEditable(prev => {
            return !prev;
          })
        }}
      >
        {isEditable ? 'Save' : 'Edit'}
      </button>
      <button
        className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 active:scale-95 select-none font-medium"
        onClick={() => {
          deleteTodo(todo_item.id)
        }}>
        Delete
      </button>
    </div>
  );
}
