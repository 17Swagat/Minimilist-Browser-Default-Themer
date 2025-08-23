import { PopupMenu} from "../components/PopupMenus";
import { GMenu } from "./menus/GApps/GMenu";
import { useAppStateContext } from "../contexts/AppStates";
import AddWebShortcutMenu from "./menus/AddWebShortcut/AddWebShortcut";


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
      


      {/* Todo */}
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
