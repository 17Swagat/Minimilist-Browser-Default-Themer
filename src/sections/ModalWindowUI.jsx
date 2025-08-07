function ModalWindowUI(){
return (
    <div className= {ModalOpen ? "bg-zinc-800 w-full h-full absolute" : "bg-transparent w-full h-full absolute -z-10"} onClick={(e)=>{
          e.stopPropagation();
          set_ModalOpen(false);
          set_MenuSettingsOpen(false);
          set_MenuTodoOpen(false);
          set_MenuShortcutOpen(false);
          set_MenuGoogleAppsOpen(false);
          set_MenuButtonOn(false);
        }
        }>

          {/* #1  */}
          {/* Settings Menu */}
          {isMenu_SettingsOpen && 
          PopupMenu(
            set_ModalOpen, 
            ModalOpen, 
            set_MenuSettingsOpen, isMenu_SettingsOpen, 
            "SETTINGS - MENU", 
            <div>
              This is Settings content 
            </div>)}

          {/* #2  */}
          {/* Todo Menu */}
          {isMenu_TodoOpen && 
          PopupMenu(
            set_ModalOpen, 
            ModalOpen, 
            set_MenuTodoOpen, isMenu_TodoOpen, 
            "TODO - MENU", <div>
              This is 
              Todo Content
              </div>)
          }

          {/* #3 */}
          {/* Shortcuts Menu */}
          {isMenu_ShortcutOpen && 
          PopupMenu(
            set_ModalOpen, 
            ModalOpen, 
            set_MenuShortcutOpen, isMenu_ShortcutOpen, 
            "SHORTCUTS - MENU", <div>
              This is Shortcuts content
              </div>)
          }

          {/* #4 */}
          {/* Google Apps Menu */}
          {isMenu_GoogleAppsOpen && 
          PopupMenu(
            set_ModalOpen, 
            ModalOpen, 
            set_MenuGoogleAppsOpen, isMenu_GoogleAppsOpen, 
            "GOOGLE APPS - MENU", <div>
              This is Google Apps content
              </div>)
          }

          {/* ******************************************************** */}
          {/* #5 */}
          {/* Add New Website Shortcut Menu */}
          {isAddNewWebShortcutOpen && 
          PopupMenu_Mini(
            set_ModalOpen, 
            ModalOpen, 
            set_AddNewWebShortcutOpen, isAddNewWebShortcutOpen, 
            "ADD SHORTCUT", 
            <div>
              This is Add New Website Shortcut content
            </div>)
          }
          {/* ******************************************************** */}

        </div>
        
)
}