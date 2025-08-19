import { PopupMenu_Mini } from "../../../components/PopupMenus";
import {
  useAppStateContext
} from "../../../contexts/AppStates";
import { AddWebShortcut_Body } from "../../sub_layouts/AddWebShortcut_body";

export default function AddWebShortcutMenu() {
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
    <PopupMenu_Mini
      menuState={addWebShortcutLinkMenuOpen}
      toggleMenuStateFunc={toggleWebShortcutLinkMenu}
      menuName="Add Website Shortcut"
      menuBody={
        <AddWebShortcut_Body
          onButtonClick={() => {
            console.log("Hello World");
          }}
        />
      }
    />
  );
}
