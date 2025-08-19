// components/ModalMenus.jsx
import { appStorageStates } from "../app_storage_states";
import { PopupMenu, PopupMenu_Mini } from "../components/PopupMenus";
import { useAppStateContext } from "../contexts/AppStates";
import { getFaviconUrl } from "../utils/getFavicon";
import { saveShortcut } from "../utils/saveShortcuts";
import { AddWebShortcut_Body } from "./menus/AddWebShortcut/AddWebShortcut_body";
import AddWebShortcutMenu from "./menus/AddWebShortcut/AddWebShortcut";

import gicon_search from "../assets/icons/google_apps/google.png";
import gicon_mail from "../assets/icons/google_apps/gmail.png";
import gicon_forms from "../assets/icons/google_apps/google-forms.png";
import gicon_keep from "../assets/icons/google_apps/keeps.png";
import gicon_youtube from "../assets/icons/google_apps/youtube.png";
import gicon_maps from "../assets/icons/google_apps/maps.png";


// Menu Importing
import TodoMenuUI from "./menus/Todo/TodoMenu";

export default function ModalMenus() {
  const {
    menuButtonOn,
    webShortcutLinksOpen,
    modalWindowOpen,
    settingsMenuOpen,
    shortcutsMenuOpen,
    googleAppsMenuOpen,
    todoMenuOpen,
    addWebShortcutLinkMenuOpen,
    toggleMenuButton,
    toggleWebShortcutsButton,
    toggleModalWindow,
    toggleSettingsMenu,
    toggleShortcutsMenu,
    toggleGoogleAppsMenu,
    toggleTodoMenu,
    toggleWebShortcutLinkMenu,
    closeAllMenus,
  } = useAppStateContext();

  return (
    <div
      className={
        // ModalOpen
        modalWindowOpen
          ? "bg-zinc-800 w-full h-full absolute"
          : "bg-transparent w-full h-full absolute -z-10"
      }
      onClick={(e) => {
        e.stopPropagation();
        closeAllMenus();
      }}
    >
      {/* Settings */}
      {PopupMenu(
        settingsMenuOpen,
        toggleSettingsMenu,
        "SETTINGS - MENU",
        settingsMenuOpen && <div>This is Settings content</div>
      )}


      {/* Todo */}
      {/* {TodoMenuUI()} */}
      <TodoMenuUI/>
      
      

      {/* Shortcuts */}
      {PopupMenu(
        shortcutsMenuOpen,
        toggleShortcutsMenu,
        "SHORTCUTS",
        shortcutsMenuOpen && <div>This is Shortcuts content</div>
      )}

      {/* Google Apps */}
      {/* #2 */}
      {PopupMenu(
        googleAppsMenuOpen,
        toggleGoogleAppsMenu,
        "Google Apps",
        googleAppsMenuOpen && (
          <div className="w-full h-full bg-red-400 flex flex-wrap overflow-y-auto">
            {[
              { name: "Search", icon: gicon_search },
              { name: "Gmail", icon: gicon_mail },
              { name: "Keep", icon: gicon_keep },
              { name: "Forms", icon: gicon_forms },
              { name: "Maps", icon: gicon_maps },
              { name: "YouTube", icon: gicon_youtube },
            ].map((app) => (
              <div
                key={app.name}
                className="w-1/4 flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 p-2 rounded-lg transition"
                onClick={() => {
                  if (app.name.toLowerCase() != "youtube") {
                    window.open(
                      `https://${app.name.toLowerCase()}.google.com`,
                      "_blank"
                    );
                  } else {
                    window.open(
                      `https://${app.name.toLowerCase()}.com`,
                      "_blank"
                    );
                  }
                }}
              >
                <img
                  src={app.icon}
                  alt={`${app.name} icon`}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-white text-sm text-center">
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        )
      )}


      {/* Add WebShortcut Shortcut Menu */}
      {/* 0.2 */}
      <AddWebShortcutMenu/>
      

      {/* 0.1: */}
      {/* 
      {addWebShortcutLinkMenuOpen &&
        PopupMenu_Mini(
          ()=>{},
          true,
          ()=>{},
          true,
          "ADD SHORTCUT",
          <AddWebShortcut_Body
            onButtonClick={(data) => {
              // // 1. Get Site favicon
              // const siteName = data.name;
              // const siteUrl = data.url;

              // // 2. Get favicon
              // const favIcon = getFaviconUrl(siteUrl);

              // // 3. Save Site Name & Link (Data-Persists)
              // const shortcutData = { siteName, siteUrl, favIcon };

              // // Saving Shortcuts [State Update Happens Inside the function]
              // saveShortcut(shortcutData).then((result) => {
              //   appStorageStates.setState_userSavedWebLinks(result);
              // });

              // // Turning Off the Modal Windows
              // set_AddNewWebShortcutOpen(false);
              // set_ModalOpen(false);
            }}
          />
        )} */}
    </div>
  );
}
