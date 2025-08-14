// components/ModalMenus.jsx
import { appStorageStates } from "../app_storage_states";
import { PopupMenu, PopupMenu_Mini } from "../components/PopupMenus";
import { getFaviconUrl } from "../utils/getFavicon";
import { saveShortcut } from "../utils/saveShortcuts";
import {AddWebShortcut_Body} from "./sub_layouts/AddWebShortcut_body";

export default function ModalMenus({
  ModalOpen, set_ModalOpen,
  isMenu_SettingsOpen, set_MenuSettingsOpen,
  isMenu_TodoOpen, set_MenuTodoOpen,
  isMenu_ShortcutOpen, set_MenuShortcutOpen,
  isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen,
  isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen
}) {

  const appStorageState = appStorageStates();

  return (
    <div className={ModalOpen ? "bg-zinc-800 w-full h-full absolute" : "bg-transparent w-full h-full absolute -z-10"} onClick={(e) => {
      e.stopPropagation();
      set_ModalOpen(false);
      set_MenuSettingsOpen(false);
      set_MenuTodoOpen(false);
      set_MenuShortcutOpen(false);
      set_MenuGoogleAppsOpen(false);
    }}>
      {/* Settings */}
      {isMenu_SettingsOpen && 
      PopupMenu(set_ModalOpen, ModalOpen, set_MenuSettingsOpen, isMenu_SettingsOpen, "SETTINGS - MENU", 
      <div>This is Settings content</div>)}

      {/* Todo */}
      {isMenu_TodoOpen && 
      PopupMenu(set_ModalOpen, ModalOpen, set_MenuTodoOpen, isMenu_TodoOpen, "TODO - MENU", 
      <div>This is Todo Content</div>)}

      {/* Shortcuts */}
      {isMenu_ShortcutOpen && 
      PopupMenu(set_ModalOpen, ModalOpen, set_MenuShortcutOpen, isMenu_ShortcutOpen, "SHORTCUTS - MENU", 
      <div>This is Shortcuts content</div>)}

      {/* Google Apps */}
      {isMenu_GoogleAppsOpen && 
      PopupMenu(set_ModalOpen, ModalOpen, set_MenuGoogleAppsOpen, isMenu_GoogleAppsOpen, "GOOGLE APPS - MENU", 
      <div>This is Google Apps content</div>)}
      
      {/* Add Shortcut Menu */}
      {isAddNewWebShortcutOpen && 
      PopupMenu_Mini(set_ModalOpen, ModalOpen, set_AddNewWebShortcutOpen, isAddNewWebShortcutOpen, "ADD SHORTCUT", 
        <AddWebShortcut_Body onButtonClick={(data)=>{
          // 1. Get Site favicon
          const siteName = data.name;
          const siteUrl = data.url;
          
          // 2. Get favicon
          const favIcon = getFaviconUrl(siteUrl)

          // 3. Save Site Name & Link (Data-Persists)
          const shortcutData = {siteName, siteUrl, favIcon};
          
          // Saving Shortcuts [State Update Happens Inside the function]
          saveShortcut(shortcutData).then(
            (result) =>{
              appStorageStates.setState_userSavedWebLinks(result)

            }
          )
          
          // Turning Off the Modal Windows
          set_AddNewWebShortcutOpen(false);
          set_ModalOpen(false);
        }}/>
      
    )}
    </div>
  );
}
