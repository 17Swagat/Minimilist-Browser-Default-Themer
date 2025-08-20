// components/WebsiteShortcuts.jsx
import { useState, useEffect } from "react";
import {
  WebShortcutLinksButton,
  AddNewWebShortcutLinkButton,
} from "../components/WebShortcutLinksBtns";
import { loadShortcuts } from "../utils/loadShortcuts";
import { appStorageStates } from "../app_storage_states";
import { useAppStateContext } from "../contexts/AppStates";
import { SavedWebLinksStateContextProvider, useSavedWebLinksStateContext } from "../contexts/SavedWebLinksState";

export default function WebsiteShortcuts() {
//   return (
//       <View_WebsiteShortcuts/>
//   );
// }

// function View_WebsiteShortcuts() {

  const {webLinks, addNewWebLink, deleteWebLink}  = useSavedWebLinksStateContext();
  
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
    // WebShortcuts Button [Canvas] (On top of which buttons are present)
    <div className="bg-red-500 w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1">
      {/* (Button): WebShortCut-Button -> "Click" */}
      <div
        className="w-[100%] h-[100%] bg-amber-300 rounded-full absolute z-5
        flex justify-center items-center text-2xl text-black select-none hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          toggleWebShortcutsButton((prev) => !prev);
        }}
      >
        Click
      </div>

      {/* #1 */}
      {/* <div 
        style={{
          scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "#888 #f1f1f1", // For Firefox
    // For Chrome, Safari, and Edge
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-track": {
      // background: "#f1f1f1",
      background: "red",
    },
    "::-webkit-scrollbar-thumb": {
      // background: "#888",
      background: "green",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
        }}
        className={`w-[100%] h-[100%] absolute z-4 
        ${webShortcutLinksOpen ? 
        "bg-[#224b97a2] transition-all duration-300 translate-x-[65%] -translate-y-[70%] w-[635%] h-[350%]  flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1  overflow-y-scroll" 
        :
        "bg-transparent transition-all duration-500 translate-x-0 -translate-y-0 scale-x-100 scale-y-100 overflow-visible"}`} 
        onClick={(e)=>{
          e.stopPropagation()
        }}
        > */}
      
      {/* #2 */}
      {/* <div className={`w-[100%] h-[100%] absolute z-4 
      ${webShortcutLinksOpen ? 
        "bg-[#224b97a2] transition-all duration-300 translate-x-[65%] -translate-y-[70%] w-[625%] h-[350%] flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#888] scrollbar-track-[#1a1a1a]" 
        :
        "bg-transparent transition-all duration-500 translate-x-0 -translate-y-0 scale-x-100 scale-y-100 overflow-visible"}`
      } 
      onClick={(e)=>{
        e.stopPropagation()
      }}
> */}

  {/* <div 
  className={`w-[100%] h-[100%] absolute z-4 custom-scrollbar
    ${webShortcutLinksOpen ? 
      "bg-[#224b97a2] transition-all duration-300 translate-x-[65%] -translate-y-[70%] w-[630%] h-[350%] flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1 overflow-y-auto" 
      :
      "bg-transparent transition-all duration-500 translate-x-0 -translate-y-0 scale-x-100 scale-y-100 overflow-visible"
    }`}
  onClick={(e) => e.stopPropagation()}
> */}

{/* <div 
  className={`w-[100%] h-[100%] absolute z-4 custom-scrollbar scrollbar-consistent
    ${webShortcutLinksOpen ? 
      "bg-[#224b97a2] transition-all duration-300 translate-x-[65%] -translate-y-[70%] w-[635%] h-[350%] flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1 overflow-y-auto" 
      :
      "bg-transparent transition-all duration-500 translate-x-0 -translate-y-0 scale-x-100 scale-y-100 overflow-visible"
    }`}
  onClick={(e) => e.stopPropagation()}
> */}

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
              

              {/* Loads the Saved-Sites */}
              {/* ✅ */}
              {/* // 📌 */}
              {/* // shortcut.favIcon */}
              {/* // shortcut.siteName */}
              {/* // shortcut.siteUrl */}
              {/* {webLinks.map((shortcut, index) => (

                //2.3
                <div
                  onClick={() => {
                    window.open(
                      shortcut.websiteLink,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  key={index}
                  className="w-[100px] h-[100px] rounded-2xl bg-green-300 flex flex-col items-center justify-center cursor-pointer"
                >
                  <img
                    // TODO:
                    src = 'https://img.com'
                    alt="favicon"
                    width={16}
                    height={16}
                  />
                  {shortcut.websiteLink}
                </div>
              ))} */}
            
              {webLinks.map((webShortcutItem, index)=>
                <WebShortcutLinksButton 
                        key={webShortcutItem.id} 
                        id={webShortcutItem.id} 
                        siteName = {webShortcutItem.websiteName}
                        siteUrl = {webShortcutItem.websiteLink}
                        // siteFavicon = {webShortcutItem.favicon} 
                        />
              )}

            {/* 
              <WebShortcutLinksButton siteName="Example Site 1" siteUrl="https://example1.com" siteFavicon = 'https://example1.com/favicon.ico' />
            <WebShortcutLinksButton siteName="Example Site 2" siteUrl="https://example2.com" siteFavicon = 'https://example2.com/favicon.ico' />
            <WebShortcutLinksButton siteName="Example Site 3" siteUrl="https://example3.com" siteFavicon = 'https://example3.com/favicon.ico' /> */}
            </>
          )
        }
      </div>
    </div>
  );
}
