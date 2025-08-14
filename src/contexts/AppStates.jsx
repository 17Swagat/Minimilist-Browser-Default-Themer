// AppStates.js
import { createContext, useContext, useState } from "react";

// Create the context with default values
export const AppStateContext = createContext({
  menuButtonOn: false,
  webShortcutLinksOpen: false,
  modalWindowOpen: false,
  settingsMenuOpen: false,
  shortcutsMenuOpen: false,
  googleAppsMenuOpen: false,
  todoMenuOpen: false,
  toggleMenuButton: () => {},
  toggleWebShortcutsButton: () => {},
  toggleModalWindow: () => {},
  toggleSettingsMenu: () => {},
  toggleShortcutsMenu: () => {},
  toggleGoogleAppsMenu: () => {},
  toggleTodoMenu: () => {},
  closeAllMenus: () => {},
});

// Custom provider component to manage state
export function AppStateContextProvider({ children }) {
  const [menuButtonOn, setMenuButtonOn] = useState(false);
  const [webShortcutLinksOpen, setWebShortcutLinksOpen] = useState(false);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [shortcutsMenuOpen, setShortcutsMenuOpen] = useState(false);
  const [googleAppsMenuOpen, setGoogleAppsMenuOpen] = useState(false);
  const [todoMenuOpen, setTodoMenuOpen] = useState(false);

  const toggleMenuButton = () => setMenuButtonOn(!menuButtonOn);
  const toggleWebShortcutsButton = () => setWebShortcutLinksOpen(!webShortcutLinksOpen);
  const toggleModalWindow = () => setModalWindowOpen(!modalWindowOpen);
  const toggleSettingsMenu = () => setSettingsMenuOpen(!settingsMenuOpen);
  const toggleShortcutsMenu = () => setShortcutsMenuOpen(!shortcutsMenuOpen);
  const toggleGoogleAppsMenu = () => setGoogleAppsMenuOpen(!googleAppsMenuOpen);
  const toggleTodoMenu = () => setTodoMenuOpen(!todoMenuOpen);
  const closeAllMenus = () => {
    setMenuButtonOn(false);
    setWebShortcutLinksOpen(false);
    setModalWindowOpen(false);
    setSettingsMenuOpen(false);
    setShortcutsMenuOpen(false);
    setGoogleAppsMenuOpen(false);
    setTodoMenuOpen(false);
  };

  const value = {
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
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

// Custom hook to use the context
export function useAppStateContext() {
  return useContext(AppStateContext);
}



// import { createContext, useContext } from "react";

// // Create a context with a default value
// export const AppStateContext = createContext({
    
//     // Buttons:=>
//     menuButtonOn: false,
//     webShortcutLinksOpen: false,
    
//     // Menus:=>
//     modalWindowOpen: false,
//     settingsMenuOpen: false,
//     shortcutsMenuOpen: false,
//     googleAppsMenuOpen: false,
//     todoMenuOpen: false,
    
//     // Functions [Buttons]:
//     toggleMenuButton: ()=>{},
//     toggleWebShortcutsButton: ()=>{},
    
//     // Functions [Menus]:
//     toggleModalWindow: ()=>{},
//     toggleSettingsMenu: ()=>{},
//     toggleShortcutsMenu: ()=>{},
//     toggleGoogleAppsMenu: ()=>{},
//     toggleTodoMenu: ()=>{},
//     closeAllMenus:()=>{}
// });

// export const AppStateContextProvider = AppStateContext.Provider


// export default function useAppStateContext(){
//     return useContext(AppStateContext);
// }