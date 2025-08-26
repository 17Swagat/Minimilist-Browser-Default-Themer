import { createContext, useContext, useState } from "react";

// Create the context with default values
export const AppStateContext = createContext({
  menuButtonOn: false,
  webShortcutLinksOpen: false,
  modalWindowOpen: false,
  settingsMenuOpen: false,
  // shortcutsMenuOpen: false,
  pomodoroTimerMenuOpen:false,
  googleAppsMenuOpen: false,
  todoMenuOpen: false,
  addWebShortcutLinkMenuOpen: false,
  toggleMenuButton: () => {},
  toggleWebShortcutsButton: () => {},
  toggleModalWindow: () => {},
  toggleSettingsMenu: () => {},
  // toggleShortcutsMenu: () => {},

  togglePomodoroTimerMenu: () => {},

  toggleGoogleAppsMenu: () => {},
  toggleTodoMenu: () => {},
  toggleWebShortcutLinkMenu: () => {},
  closeAllMenus: () => {},
});

// Custom provider component to manage state
export function AppStateContextProvider({ children }) {
  const [menuButtonOn, setMenuButtonOn] = useState(false);
  const [webShortcutLinksOpen, setWebShortcutLinksOpen] = useState(false);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [
pomodoroTimerMenuOpen,
setPomodoroTimerMenuOpen
    // shortcutsMenuOpen, 
    // setShortcutsMenuOpen,
  ] = useState(false);
  const [googleAppsMenuOpen, setGoogleAppsMenuOpen] = useState(false);
  const [todoMenuOpen, setTodoMenuOpen] = useState(false);
  const [addWebShortcutLinkMenuOpen, setAddWebShortcutLinkMenu] = useState(false);

  const closeAllMenus = () => {
    setMenuButtonOn(false);
    setWebShortcutLinksOpen(false);
    setModalWindowOpen(false);
    setSettingsMenuOpen(false);
    // setShortcutsMenuOpen(false);
    setPomodoroTimerMenuOpen(false);
    setGoogleAppsMenuOpen(false);
    setAddWebShortcutLinkMenu(false);
    setTodoMenuOpen(false);
  };

  const toggleMenuButton = () => setMenuButtonOn(!menuButtonOn);
  const toggleWebShortcutsButton = () => setWebShortcutLinksOpen(!webShortcutLinksOpen);
  const toggleModalWindow = () => setModalWindowOpen(!modalWindowOpen);

  const toggleSettingsMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setSettingsMenuOpen((prev) => !prev);
  };

  const toggleTodoMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setTodoMenuOpen((prev) => !prev);
  };

  const togglePomodoroTimerMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    // setShortcutsMenuOpen((prev) => !prev);
    setPomodoroTimerMenuOpen(prev => !prev)
  };

  const toggleGoogleAppsMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setGoogleAppsMenuOpen((prev) => !prev);
  };

  const toggleWebShortcutLinkMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setAddWebShortcutLinkMenu((prev) => !prev);
  };

  const value = {
    menuButtonOn,
    webShortcutLinksOpen,
    modalWindowOpen,
    settingsMenuOpen,
    // shortcutsMenuOpen,
    pomodoroTimerMenuOpen,
    googleAppsMenuOpen,
    todoMenuOpen,
    addWebShortcutLinkMenuOpen,
    toggleMenuButton,
    toggleWebShortcutsButton,
    toggleModalWindow,
    toggleSettingsMenu,
    // toggleShortcutsMenu,
    togglePomodoroTimerMenu,
    toggleGoogleAppsMenu,
    toggleTodoMenu,
    toggleWebShortcutLinkMenu,
    closeAllMenus,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

// Custom hook to use the context
export function useAppStateContext() {
  return useContext(AppStateContext);
}
