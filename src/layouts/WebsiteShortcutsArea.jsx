// components/WebsiteShortcuts.jsx
import { useState, useEffect } from "react";
import btnIcons from "../assets/icons";
import {
  WebShortcutLinksButton,
  AddNewWebShortcutLinkButton,
} from "../components/WebShortcutLinksBtns";
// import { loadShortcuts } from "../utils/loadShortcuts";
// import { appStorageStates } from "../app_storage_states";
import { useAppStateContext } from "../contexts/AppStates";
import { SavedWebLinksStateContextProvider, useSavedWebLinksStateContext } from "../contexts/SavedWebLinksState";

export default function WebsiteShortcuts() {
  //   return (
  //       <View_WebsiteShortcuts/>
  //   );
  // }

  // function View_WebsiteShortcuts() {

  const { webLinks, addNewWebLink, deleteWebLink } = useSavedWebLinksStateContext();

  const {
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
  } = useAppStateContext();

  return (
    // WebShortcuts Button [Canvas] (On top of which buttons are present)
    <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1 ">
      
      {/* (Button): WebShortCut-Button -> "Click" */}
      <div
        className="w-[70px] h-[70px] bg-amber-300 rounded-full absolute left-0 bottom-0 z-5
        flex justify-center items-center text-2xl text-black select-none hover:cursor-pointer
        hover:brightness-150 active:invert hover:transition-all duration-300"
        onClick={(e) => {
          e.stopPropagation();
          toggleWebShortcutsButton((prev) => !prev);
        }}
      >
        <img src={btnIcons.weblinksShortcut} alt="" className="pointer-events-none"/>
      </div>

      <div
        className={`w-[100%] h-[100%] absolute z-4 custom-scrollbar scrollbar-consistent
        ${webShortcutLinksOpen ?
            "bg-[#224b97a2] transition-all duration-300 translate-x-[65%] -translate-y-[70%] w-[630%] h-[320%] flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1 overflow-y-auto"
            :
            "bg-transparent transition-all duration-500 translate-x-0 -translate-y-0 scale-x-100 scale-y-100 overflow-visible"
          }`}
        onClick={(e) => e.stopPropagation()}
      >


        {webShortcutLinksOpen && (
          <>
            <AddNewWebShortcutLinkButton
              onClick={(e) => {
                e.stopPropagation()
                // closeAllMenus();
                toggleWebShortcutLinkMenu();
              }}
            />

            {webLinks.map((webShortcutItem, index) =>
              <WebShortcutLinksButton
                key={webShortcutItem.id}
                id={webShortcutItem.id}
                siteName={webShortcutItem.websiteName}
                siteUrl={webShortcutItem.websiteLink}
              />
            )}

          </>
        )
        }
      </div>
    </div>
  );
}
