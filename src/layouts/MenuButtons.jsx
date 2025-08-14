// components/MenuButtons.jsx
import { useState } from "react";
import { MenuBtn } from "../components/MenuBtn";
import { AppStateContextProvider, useAppStateContext } from "../contexts/AppStates";

export default function MenuButtons({
  // menuButtonOn, set_MenuButtonOn,
  // ModalOpen, set_ModalOpen,
  // isMenu_SettingsOpen, set_MenuSettingsOpen,
  // isMenu_TodoOpen, set_MenuTodoOpen,
  // isMenu_ShortcutOpen, set_MenuShortcutOpen,
  // isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen,
  // isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen
}) {
  // Part 1
  // const closeAllMenus = () => {
  //   set_MenuSettingsOpen(false);
  //   set_MenuTodoOpen(false);
  //   set_MenuShortcutOpen(false);
  //   set_MenuGoogleAppsOpen(false);
  //   set_AddNewWebShortcutOpen(false);
  // };

  // const handleClick = (setMenuOpen, isMenuOpen) => (e) => {
  //   e.stopPropagation();
  //   closeAllMenus();
  //   if (ModalOpen) setMenuOpen(true);
  //   else {
  //     set_ModalOpen(true);
  //     setMenuOpen(true);
  //   }
  //   set_MenuButtonOn(false);
  // };

  // Part 2
  // CONTEXT API
  // const [menuButtonOn, setMenuButtonOn] = useState(false)
  // const toggleMenuButton = ()=>{
  //   setMenuButtonOn(prev => !prev)
  // }
  
  // const [modalWindowOpen, setModalWindowOpen] = useState(false)
  // const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  // const [shortcutsMenuOpen, setShortcutsMenuOpen] = useState(false)
  // const [googleAppsMenuOpen, setGoogleAppsMenuOpen] = useState(false)
  // const [todoMenuOpen, setTodoMenuOpen] = useState(false)

  // const closeAllMenus= ()=>{
  //   setModalWindowOpen(false)
  //   setSettingsMenuOpen(false)
  //   setShortcutsMenuOpen(false)
  //   setGoogleAppsMenuOpen(false)
  //   setTodoMenuOpen(false)
  // }

  // const toggleSettingsMenu= ()=>{
  //   closeAllMenus()
  //   setMenuButtonOn(false)
  //   setModalWindowOpen(true)
  //   setSettingsMenuOpen(true)
  // }

  // const toggleShortcutsMenu= ()=>{
  //   closeAllMenus()
  //   setMenuButtonOn(false)
  //   setModalWindowOpen(true)
  //   setShortcutsMenuOpen(true)
  // }
  
  // const toggleGoogleAppsMenu= ()=>{
  //   closeAllMenus()
  //   setMenuButtonOn(false)
  //   setModalWindowOpen(true)
  //   setGoogleAppsMenuOpen(true)
  // }
  // const toggleTodoMenu= ()=>{
  //   closeAllMenus()
  //   setMenuButtonOn(false)
  //   setModalWindowOpen(true)
  //   setTodoMenuOpen(true)
  // }


  // Part 3
  const {menuButtonOn,toggleMenuButton,toggleTodoMenu, toggleSettingsMenu, toggleGoogleAppsMenu, toggleShortcutsMenu} = useAppStateContext()

  return (
    
    // <AppStateContextProvider value={{menuButtonOn, modalWindowOpen, settingsMenuOpen, shortcutsMenuOpen, googleAppsMenuOpen, todoMenuOpen, toggleMenuButton, toggleSettingsMenu, toggleShortcutsMenu, toggleGoogleAppsMenu, toggleTodoMenu, closeAllMenus}}>
      

      <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1">
        <div
          className="bg-gray-600 size-full rounded-full absolute z-5"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenuButton()
            console.log('Menu Button: ' + menuButtonOn)
          }}
        ></div>

        <MenuBtn 
          btnName="Settings" 
          isVisible={menuButtonOn} 
          color="bg-red-400" 
          transitionAngle={0} 
          onclick={
            // handleClick(set_MenuSettingsOpen, isMenu_SettingsOpen)
            (e)=>{
              e.stopPropagation()
              toggleSettingsMenu()
            }
          } />
        
        <MenuBtn 
          btnName="Todo" 
          isVisible={menuButtonOn} 
          color="bg-cyan-800" 
          transitionAngle={30} 
          onclick={
            // handleClick(set_MenuTodoOpen, isMenu_TodoOpen)
            (e)=>{
              e.stopPropagation()
              toggleTodoMenu()
            }
          } />
        
        <MenuBtn 
          btnName="Shortcuts" 
          isVisible={menuButtonOn} 
          color="bg-green-400" 
          transitionAngle={60} 
          onclick={
            // handleClick(set_MenuShortcutOpen, isMenu_ShortcutOpen)
            (e)=>{
              e.stopPropagation()
              toggleShortcutsMenu()
            }
          } />

        <MenuBtn 
          btnName="Google Apps" 
          isVisible={menuButtonOn} 
          color="bg-yellow-400" 
          transitionAngle={90} 
          onclick={
            (e)=>{
              e.stopPropagation()
              toggleGoogleAppsMenu()
            }
          } />
      </div>
  );
}
