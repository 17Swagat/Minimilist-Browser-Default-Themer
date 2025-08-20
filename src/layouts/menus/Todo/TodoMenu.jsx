import { useState } from "react";
import { PopupMenu } from "../../../components/PopupMenus";
import { useAppStateContext } from "../../../contexts/AppStates";
import { AppTodoStateContextProvider, useTodoStateContext } from "../../../contexts/TodoStates";
import TodoItem from "./TodoItem";


export default function TodoMenuUI() {
  return (
    <AppTodoStateContextProvider>
      <TodoMenu/>
    </AppTodoStateContextProvider>
  );

}



function TodoMenu(){

  const [inputText, setInputText] = useState('')
  
  const {
    menuButtonOn,
    webShortcutLinksOpen,
    modalWindowOpen,
    settingsMenuOpen,
    shortcutsMenuOpen,
    googleAppsMenuOpen,
    todoMenuOpen,
    toggleMenuButton,
    toggleWebShortcutsButton,
    toggleModalWindow,
    toggleSettingsMenu,
    toggleShortcutsMenu,
    toggleGoogleAppsMenu,
    toggleTodoMenu,
    closeAllMenus,
  } = useAppStateContext();


  const {todos, addTodo} = useTodoStateContext()
  
  const onAddButtonClick = ()=>{
    addTodo(inputText)
    setInputText('')
  }
  
  return PopupMenu(
    todoMenuOpen,
    toggleTodoMenu,
    "TODO - MENU",
    todoMenuOpen && (
      <div className="h-full p-3 bg-gray-900 ">
        {/* Todo Input Area */}
        <div className="flex mb-6 gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-400"
            value={inputText}
            placeholder="Write your todos here..."
            onChange={(e)=>{
               setInputText(e.target.value)
            }}
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 active:scale-95 select-none" onClick={onAddButtonClick}>
            Add
          </button>
        </div>


        {/* Todo List */}
        <div className=" overflow-y-auto flex flex-col gap-2 h-[80%]">
          
          {todos.map((todo_item, index)=>{
            return <TodoItem todo_item={todo_item} key={todo_item.id} />
          })}
          
        </div>
      </div>
    ))
  
}

