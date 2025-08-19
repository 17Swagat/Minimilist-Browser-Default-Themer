// components/WebsiteShortcuts.jsx
import { useState, useEffect } from "react";
import { WebShortcutLinksButton, AddNewWebShortcutLinkButton } from "../components/WebShortcutLinksBtn";
import { loadShortcuts } from "../utils/loadShortcuts";
import {appStorageStates} from '../app_storage_states'

export default function WebsiteShortcuts({
  webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn,
  set_ModalOpen,
  set_MenuSettingsOpen,
  set_MenuTodoOpen,
  set_MenuShortcutOpen,
  set_MenuGoogleAppsOpen,
  set_AddNewWebShortcutOpen
}) {


  // Retrieving saved shortcuts :=>
  /************************************************************************/
  // const [shortcuts, setShortcuts] = useState([]);
  // const appStorageState = appStorageStates();
  // let display_shortcuts_func = async () => {
  //   try {
  //     const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
  //     return webShortcuts;
  //   }
  //   catch(error){
  //     console.error("Failed to load shortcuts:", error);
  //     return [];
  //   }
  // }


    const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    const loadShortcuts = async () => {
      try {
        const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
        setShortcuts(webShortcuts);
      } catch (error) {
        console.error("Failed to load shortcuts:", error);
        setShortcuts([]);
      }
    };
    

    loadShortcuts();
  }, [appStorageStates.state_userSavedWebLinks]);
  ///////////////////////////////////////////////////////////////

  // let display_web_shortcuts = display_shortcuts_func();

  // useEffect(()=>{
  //   // display_web_shortcuts = display_shortcuts_func();
  // }, [appStorageState.state_userSavedWebLinks])

  // useEffect(() => {
  //   loadShortcuts(appStorageState.setState_userSavedWebLinks);
  // }, []);

  /************************************************************************/

  return (

    // WebShortcuts Button [Canvas] (On top of which buttons are present)
    <div className="bg-red-500 w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1">

      {/* (Button): WebShortCut-Button */}
      <div
        className="w-[100%] h-[100%] bg-amber-300 rounded-full absolute z-5
        flex justify-center items-center text-2xl text-black"
        onClick={(e) => {
          e.stopPropagation();
          set_WebshortcutslinksButtonOn(prev => !prev);
        }}
      >Click</div>

      <div className={`w-[100%] h-[100%] absolute z-4 ${webshortcutslinksButtonOn ? "bg-blue-500 transition duration-300 translate-x-[65%] -translate-y-[70%] w-[550%] h-[250%]  flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1  overflow-y-auto" : "bg-transparent transition duration-300 translate-x-0 -translate-y-0 scale-x-100 scale-y-100"}`}>
        {webshortcutslinksButtonOn && (
          <>
            <AddNewWebShortcutLinkButton
              onClick={() => {
                set_WebshortcutslinksButtonOn(false);
                set_MenuSettingsOpen(false);
                set_MenuTodoOpen(false);
                set_MenuShortcutOpen(false);
                set_MenuGoogleAppsOpen(false);
                // Setting True:
                set_ModalOpen(true);
                set_AddNewWebShortcutOpen(true);
              }}
            />

            {/* Loads the Saved-Sites */}
            {/* ✅ */}
            {/* {shortcuts.map((shortcut, index) => ( */}
            {/* {display_web_shortcuts.map((shortcut, index) => ( */}
            {/* // {appStorageState.state_userSavedWebLinks.map((shortcut, index) => ( */}
            {/* {appStorageState.state_userSavedWebLinks.map((shortcut, index) => ( */}
            {shortcuts.map((shortcut, index) => (
              // 📌
              // shortcut.favIcon
              // shortcut.siteName
              // shortcut.siteUrl

              //2.3
              <div
                onClick={()=>{
                  window.open(
                    shortcut.siteUrl, 
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                key={index}
                className="w-[100px] h-[100px] rounded-2xl bg-green-300 flex flex-col items-center justify-center cursor-pointer">
                  <img src={shortcut.favIcon} alt="favicon" width={16} height={16} />
                  {shortcut.siteName}
                  {/* <a href={shortcut.siteUrl} target="_blank" rel="noreferrer">
                    {shortcut.siteName}
                  </a> */}
              </div>

            ))

            }



            {/* <WebShortcutLinksButton siteName="Example Site 1" siteUrl="https://example1.com" siteFavicon = 'https://example1.com/favicon.ico' />
            <WebShortcutLinksButton siteName="Example Site 2" siteUrl="https://example2.com" siteFavicon = 'https://example2.com/favicon.ico' />
            <WebShortcutLinksButton siteName="Example Site 3" siteUrl="https://example3.com" siteFavicon = 'https://example3.com/favicon.ico' /> */}



          </>
        )}
      </div>
    </div>
  );
}