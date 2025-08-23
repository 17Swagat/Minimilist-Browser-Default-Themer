// import { useContext, useEffect, useState } from "react";
// import { PopupMenu_Mini } from "../../../components/PopupMenus";
import { useAppStateContext } from "../../../contexts/AppStates";
import { AddWebShortcut_Body } from "./AddWebShortcut_body";
import { useSavedWebLinksStateContext } from "../../../contexts/SavedWebLinksState";
import { WebShortcuts_PopupMini } from "./PopupMenuMini";

export default function AddWebShortcutMenu() {
    
    const {webLinks, addNewWebLink, deleteWebLink} = useSavedWebLinksStateContext()
    
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
        <WebShortcuts_PopupMini
            menuState={addWebShortcutLinkMenuOpen}
            toggleMenuStateFunc={toggleWebShortcutLinkMenu}
            menuName="Add Website Shortcut"
            menuBody={
                <AddWebShortcut_Body
                    onButtonClick={({ webname, url }) => {
                        if ((webname.trim() != '') && (url.trim() != '')) {
                            addNewWebLink(webname, url)
                            closeAllMenus()
                        }
                    }}
                />
            }
        />
    );
}