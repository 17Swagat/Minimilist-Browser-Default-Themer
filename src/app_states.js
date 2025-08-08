// hooks/useAppStates.js
import { useState } from "react";

export function useAppStates() {
  // Main Screen Buttons
  const [menuButtonOn, set_MenuButtonOn] = useState(false);
  const [webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn] = useState(false); 

  // Menus
  const [ModalOpen, set_ModalOpen] = useState(false); 
  const [isMenu_SettingsOpen, set_MenuSettingsOpen] = useState(false);
  const [isMenu_TodoOpen, set_MenuTodoOpen] = useState(false);
  const [isMenu_ShortcutOpen, set_MenuShortcutOpen] = useState(false);
  const [isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen] = useState(false);

  // Add New Shortcut Menu
  const [isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen] = useState(false); 

  return {
    menuButtonOn, set_MenuButtonOn,
    webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn,
    ModalOpen, set_ModalOpen,
    isMenu_SettingsOpen, set_MenuSettingsOpen,
    isMenu_TodoOpen, set_MenuTodoOpen,
    isMenu_ShortcutOpen, set_MenuShortcutOpen,
    isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen,
    isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen
  };
}
