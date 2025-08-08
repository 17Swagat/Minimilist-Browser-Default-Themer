// components/WebsiteShortcuts.jsx
import { useState, useEffect } from "react";
import { WebShortcutLinksButton, AddNewWebShortcutLinkButton } from "../components/WebShortcutLinksBtn";
// import { loadShortcuts } from "../utils/loadShortcuts";

import { saveShortcut } from "../utils/saveShortcuts";
import { loadShortcuts } from "../utils/loadShortcuts";

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
  // const [name, setName] = useState("");
  // const [link, setLink] = useState("");
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    loadShortcuts(setShortcuts);
  }, []);

  // TODO: Might have to remove `handleSave` function as this component will not 
  //       handle tasks related to saving shortcuts.
  //       Only Displaying the saved ones.
  // CODE:=>
  // const handleSave = () => {
  //   if (!name || !link) return;

  //   const favicon = getFaviconUrl(link);
  //   const shortcutData = { name, link, favicon };

  //   saveShortcut(shortcutData, () => {
  //     setShortcuts((prev) => [...prev, shortcutData]);
  //     setName("");
  //     setLink("");
  //   });
  // };
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
                set_ModalOpen(true);
                set_MenuSettingsOpen(false);
                set_MenuTodoOpen(false);
                set_MenuShortcutOpen(false);
                set_MenuGoogleAppsOpen(false);
                set_AddNewWebShortcutOpen(true);
              }}
            />

            {/* Loads the Saved-Sites */}

            {/* ✅ */}
            {/* {shortcuts.map((shortcut, index) =>{
              console.log(shortcut.favIcon)
              console.log(shortcut.siteName)
              console.log(shortcut.siteURL)
            })} */}


            {/* // 2.4 */}
            {shortcuts.map((shortcut, index) => (

           //2.3
           <div
          key={index}
          className="w-[100px] h-[100px] rounded-2xl bg-green-300 flex flex-col items-center justify-center cursor-pointer"
        >
          <img src={shortcut.favIcon} alt="favicon" width={16} height={16} />
          <a href={shortcut.siteURL} target="_blank" rel="noreferrer">
            {shortcut.siteName}
          </a>
        </div>

          // 2.2
          // <div key={index} className="w-[100px] h-[100px] rounded-2xl bg-green-300 flex flex-col items-center justify-center cursor-pointer">
          //   <img src={shortcut.favicon} alt="favicon" width={16} height={16} />
          //   <a href={shortcut.link} target="_blank" rel="noreferrer">
          //     {shortcut.name}
          //   </a>
          // </div>

          // 2.1
          //   <WebShortcutLinksButton
          //     key={index}
          //     siteName={shortcut.name}
          //     siteUrl={shortcut.link}
          //     siteFavicon={shortcut.favicon}
          // />

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