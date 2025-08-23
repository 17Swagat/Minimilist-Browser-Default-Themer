import { PopupMenu, PopupMenu_Mini } from "../components/PopupMenus";
import { GMenu } from "./menus/GApps/GMenu";
import { useAppStateContext } from "../contexts/AppStates";
import AddWebShortcutMenu from "./menus/AddWebShortcut/AddWebShortcut";

// import gicon_search from "../assets/icons/google_apps/google.png";
// import gicon_mail from "../assets/icons/google_apps/gmail.png";
// import gicon_forms from "../assets/icons/google_apps/google-forms.png";
// import gicon_keep from "../assets/icons/google_apps/keeps.png";
// import gicon_youtube from "../assets/icons/google_apps/youtube.png";
// import gicon_maps from "../assets/icons/google_apps/maps.png";
// import gicon_ytmusic from "../assets/icons/google_apps/yt_music.png";
import GAppsIcons from "../assets/icons/google_apps";


// Menu Importing
import TodoMenuUI from "./menus/Todo/TodoMenu";
import SettingsMenuUI from "./menus/Settings/SettingsMenuUI";
import { GMenu_Body } from "./menus/GApps/GMenuBody";

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
          ? "bg-[#3d3b3bd4] w-full h-full absolute"
          : "bg-transparent w-full h-full absolute -z-10"
      }
      onClick={(e) => {
        e.stopPropagation();
        closeAllMenus();
      }}
    >
      {/* Settings */}
      <SettingsMenuUI />
      {/* {PopupMenu(
        settingsMenuOpen,
        toggleSettingsMenu,
        "SETTINGS - MENU",
        settingsMenuOpen && <div>This is Settings content</div>
      )} */}


      {/* Todo */}
      {/* {TodoMenuUI()} */}
      <TodoMenuUI />


      {/* Shortcuts */}
      {PopupMenu(
        shortcutsMenuOpen,
        toggleShortcutsMenu,
        "SHORTCUTS",
        shortcutsMenuOpen && <div>This is Shortcuts content</div>
      )}

      {/* Google Apps */}
      {/* #1 */}
      {GMenu({
        menuState: googleAppsMenuOpen,
        toggleMenuStateFunc: toggleGoogleAppsMenu,
        menuName: "Google Apps",
        menuBody: googleAppsMenuOpen && (
          <GMenu_Body/>
        )
      })}


      {/* Add WebShortcut Shortcut Menu */}
      {/* 0.2 */}
      <AddWebShortcutMenu />

    </div>
  );
}
