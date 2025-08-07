// useAppStates.js
import { useState } from "react";

const useAppStates = () => {
  const [menuButtonOn, setMenuButtonOn] = useState(false);
  const [webshortcutslinksButtonOn, setWebshortcutslinksButtonOn] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [isMenu_SettingsOpen, setMenuSettingsOpen] = useState(false);
  const [isMenu_TodoOpen, setMenuTodoOpen] = useState(false);
  const [isMenu_ShortcutOpen, setMenuShortcutOpen] = useState(false);
  const [isMenu_GoogleAppsOpen, setMenuGoogleAppsOpen] = useState(false);
  const [isAddNewWebShortcutOpen, setAddNewWebShortcutOpen] = useState(false);

  return {
    menuButtonOn,
    setMenuButtonOn,
    webshortcutslinksButtonOn,
    setWebshortcutslinksButtonOn,
    ModalOpen,
    setModalOpen,
    isMenu_SettingsOpen,
    setMenuSettingsOpen,
    isMenu_TodoOpen,
    setMenuTodoOpen,
    isMenu_ShortcutOpen,
    setMenuShortcutOpen,
    isMenu_GoogleAppsOpen,
    setMenuGoogleAppsOpen,
    isAddNewWebShortcutOpen,
    setAddNewWebShortcutOpen
  };
};

export default useAppStates;





// #*
// import { useState } from "react";

// // Main Screen Buttons:
// export const [menuButtonOn, set_MenuButtonOn] = useState(false);
// export const [webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn] = useState(false);

// // Menus:
// export const [ModalOpen, set_ModalOpen] = useState(false);
// export const [isMenu_SettingsOpen, set_MenuSettingsOpen] = useState(false);
// export const [isMenu_TodoOpen, set_MenuTodoOpen] = useState(false);
// export const [isMenu_ShortcutOpen, set_MenuShortcutOpen] = useState(false);
// export const [isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen] = useState(false);

// // Add New Website Shortcuts
// export const [isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen] = useState(false);