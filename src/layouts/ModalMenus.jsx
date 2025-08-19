// components/ModalMenus.jsx
import { appStorageStates } from "../app_storage_states";
import { PopupMenu, PopupMenu_Mini } from "../components/PopupMenus";
import { useAppStateContext } from "../contexts/AppStates";
import { getFaviconUrl } from "../utils/getFavicon";
import { saveShortcut } from "../utils/saveShortcuts";
import { AddWebShortcut_Body } from "./sub_layouts/AddWebShortcut_body";

import gicon_search from '../assets/icons/google_apps/google.png';
import gicon_mail from '../assets/icons/google_apps/gmail.png';
import gicon_forms from '../assets/icons/google_apps/google-forms.png';
import gicon_keep from '../assets/icons/google_apps/keeps.png';
import gicon_youtube from '../assets/icons/google_apps/youtube.png';
import gicon_maps from '../assets/icons/google_apps/maps.png';


export default function ModalMenus(
) {

  const {
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
      {PopupMenu(
        todoMenuOpen,
        toggleTodoMenu,
        "TODO - MENU",
        todoMenuOpen && 
        <div className="h-full">
          {/* Todo Input Area */}
          <div className="flex text-2xl">
            <input type="text" className="bg-amber-500 w-full p-2" placeholder="Write Your Todos . . . " />
            <div id="addTaskButton" className="bg-blue-500 w-[100px] flex justify-center items-center active:invert transition duration 300 select-none">
              ADD
            </div>
          </div>
          {/* Entered Todo */}
          <div className="bg-pink-400 w-full h-full text-2xl">
            {/* Todo Elements */}
            {/* Task 1 */}
            <div id="todo1" className="w-full bg-amber-900 flex p-2">
              {/* Task Name */}
              <div className="w-full p-2 bg-green-600" contentEditable="false">
                Morning Walk Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum cum amet labore, culpa ut nam ipsa eum adipisci magnam.
              </div>
              <div id="addTaskButton" className="bg-cyan-300 w-[100px] flex justify-center items-center active:invert transition duration 300 select-none">
                Edit
              </div>
              <div id="addTaskButton" className="bg-red-500 w-[100px] flex justify-center items-center active:invert transition duration 300 select-none">
                DELETE
              </div>
            </div>

            {/* Task 2 */}
            <div id="todo2" className="w-full bg-amber-900 flex p-2">
              {/* Task Name */}
              <div className="w-full p-2 bg-green-600" contentEditable="false">
                Morning Walk Lorem ipsum dolor sit apisci magnam.
              </div>
              <div id="addTaskButton" className="bg-cyan-300 w-[100px] flex justify-center items-center active:invert transition duration 300 select-none">
                Edit
              </div>
              <div id="addTaskButton" className="bg-red-500 w-[100px] flex justify-center items-center active:invert transition duration 300 select-none">
                DELETE
              </div>
            </div>
          </div>
        </div>
      )}


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
              if (app.name.toLowerCase() != 'youtube') {
                window.open(`https://${app.name.toLowerCase()}.google.com`, "_blank")
              } else {
                window.open(`https://${app.name.toLowerCase()}.com`, "_blank")
              }
            }
          }
          >
            <img src={app.icon} alt={`${app.name} icon`} className="w-12 h-12 mb-2" />
            <span className="text-white text-sm text-center">{app.name}</span>
          </div>
        ))}
          </div>
        )
      )}



      {/* #1 */}
      {/* {PopupMenu(
        googleAppsMenuOpen,
        toggleGoogleAppsMenu,
        "Google Apps",
        googleAppsMenuOpen && <div>This is Google Apps content</div>
      )} */}
      

      {/* Add Shortcut Menu */}
      {/* {
      // isAddNewWebShortcutOpen &&
      webShortcutLinksOpen &&
        PopupMenu_Mini(
          set_ModalOpen,
          ModalOpen,
          set_AddNewWebShortcutOpen,
          isAddNewWebShortcutOpen,
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
