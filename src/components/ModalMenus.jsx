// components/ModalMenus.jsx
import { PopupMenu, PopupMenu_Mini } from "./PopupMenus";

export default function ModalMenus({
  ModalOpen, set_ModalOpen,
  isMenu_SettingsOpen, set_MenuSettingsOpen,
  isMenu_TodoOpen, set_MenuTodoOpen,
  isMenu_ShortcutOpen, set_MenuShortcutOpen,
  isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen,
  isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen
}) {
  return (
    <div className={ModalOpen ? "bg-zinc-800 w-full h-full absolute" : "bg-transparent w-full h-full absolute -z-10"} onClick={(e) => {
      e.stopPropagation();
      set_ModalOpen(false);
      set_MenuSettingsOpen(false);
      set_MenuTodoOpen(false);
      set_MenuShortcutOpen(false);
      set_MenuGoogleAppsOpen(false);
    }}>
      {isMenu_SettingsOpen && PopupMenu(set_ModalOpen, ModalOpen, set_MenuSettingsOpen, isMenu_SettingsOpen, "SETTINGS - MENU", <div>This is Settings content</div>)}
      {isMenu_TodoOpen && PopupMenu(set_ModalOpen, ModalOpen, set_MenuTodoOpen, isMenu_TodoOpen, "TODO - MENU", <div>This is Todo Content</div>)}
      {isMenu_ShortcutOpen && PopupMenu(set_ModalOpen, ModalOpen, set_MenuShortcutOpen, isMenu_ShortcutOpen, "SHORTCUTS - MENU", <div>This is Shortcuts content</div>)}
      {isMenu_GoogleAppsOpen && PopupMenu(set_ModalOpen, ModalOpen, set_MenuGoogleAppsOpen, isMenu_GoogleAppsOpen, "GOOGLE APPS - MENU", <div>This is Google Apps content</div>)}
      
      {/* Add Shortcut Menu */}
      {isAddNewWebShortcutOpen && PopupMenu_Mini(set_ModalOpen, ModalOpen, set_AddNewWebShortcutOpen, isAddNewWebShortcutOpen, "ADD SHORTCUT", 
      <div>
        {/* This is Add New Website Shortcut content */}
        <input type="text" name="new-website-shortcut-name" id="new-website-shortcut-name" placeholder="Enter website Name"
        className="bg-black text-3xl border border-gray-700 rounded-md p-2" />
      </div>)}
    </div>
  );
}
