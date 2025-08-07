import { useState } from "react";
import { MenuBtn } from "./components/MenuBtn";
import { Clock } from "./components/ClockBtn";
import { WebShortcutLinksButton, AddNewWebShortcutLinkButton } from "./components/WebShortcutLinksBtn";
import { PopupMenu, PopupMenu_Mini } from "./components/PopupMenus";

// how to import all the states from the AppStates.jsx file?
// import {menuButtonOn, webshortcutslinksButtonOn} from "./AppStates.jsx";

// import * as AppStates from "./AppStates.jsx";
// import { menuButtonOn, set_MenuButtonOn, webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn, ModalOpen, set_ModalOpen, isMenu_SettingsOpen, set_MenuSettingsOpen, isMenu_TodoOpen, set_MenuTodoOpen, isMenu_ShortcutOpen, set_MenuShortcutOpen, isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen} from "./AppStates";

// import { ModalWindowUI } from "./sections/ModalWindowUI";
// import useAppStates from './AppStates';

//  const {
//     menuButtonOn,
//     set_MenuButtonOn,
//     webshortcutslinksButtonOn,
//     set_WebshortcutslinksButtonOn,
//     ModalOpen,
//     set_ModalOpen,
//     isMenu_SettingsOpen,
//     set_MenuSettingsOpen,
//     isMenu_TodoOpen,
//     set_MenuTodoOpen,
//     isMenu_ShortcutOpen,
//     set_MenuShortcutOpen,
//     isMenu_GoogleAppsOpen,
//     set_MenuGoogleAppsOpen,
//     isAddNewWebShortcutOpen,
//     set_AddNewWebShortcutOpen
//   } = useAppStates();


function App() {

  // Main Screen Buttons:
  const [menuButtonOn, set_MenuButtonOn] = useState(false);
  const [webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn] = useState(false);

  // Menus:
  const [ModalOpen, set_ModalOpen] = useState(false);
  const [isMenu_SettingsOpen, set_MenuSettingsOpen] = useState(false);
  const [isMenu_TodoOpen, set_MenuTodoOpen] = useState(false);
  const [isMenu_ShortcutOpen, set_MenuShortcutOpen] = useState(false);
  const [isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen] = useState(false);

  // Add New Website Shortcuts
  const [isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen] = useState(false);

  return (
    <>
      <div
        id="mainScreen"
        className="flex justify-center items-center"
        style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from bubbling up to the main screen
          // console.log("Main Screen Clicked");
          if (menuButtonOn)
            set_MenuButtonOn(false)
          if (webshortcutslinksButtonOn)
            set_WebshortcutslinksButtonOn(false)
        }}
      >
        <Clock />

        {/* 📌 Modal window */}
        <div className={ModalOpen ? "bg-zinc-800 w-full h-full absolute" : "bg-transparent w-full h-full absolute -z-10"} onClick={(e) => {
          e.stopPropagation();
          set_ModalOpen(false);
          set_MenuSettingsOpen(false);
          set_MenuTodoOpen(false);
          set_MenuShortcutOpen(false);
          set_MenuGoogleAppsOpen(false);
          set_MenuButtonOn(false);
        }
        }>

          {/* #1  */}
          {/* Settings Menu */}
          {isMenu_SettingsOpen &&
            PopupMenu(
              set_ModalOpen,
              ModalOpen,
              set_MenuSettingsOpen, isMenu_SettingsOpen,
              "SETTINGS - MENU",
              <div>
                This is Settings content
              </div>)}

          {/* #2  */}
          {/* Todo Menu */}
          {isMenu_TodoOpen &&
            PopupMenu(
              set_ModalOpen,
              ModalOpen,
              set_MenuTodoOpen, isMenu_TodoOpen,
              "TODO - MENU", <div>
              This is
              Todo Content
            </div>)
          }

          {/* #3 */}
          {/* Shortcuts Menu */}
          {isMenu_ShortcutOpen &&
            PopupMenu(
              set_ModalOpen,
              ModalOpen,
              set_MenuShortcutOpen, isMenu_ShortcutOpen,
              "SHORTCUTS - MENU", <div>
              This is Shortcuts content
            </div>)
          }

          {/* #4 */}
          {/* Google Apps Menu */}
          {isMenu_GoogleAppsOpen &&
            PopupMenu(
              set_ModalOpen,
              ModalOpen,
              set_MenuGoogleAppsOpen, isMenu_GoogleAppsOpen,
              "GOOGLE APPS - MENU", <div>
              This is Google Apps content
            </div>)
          }

          {/* ******************************************************** */}
          {/* #5 */}
          {/* Add New Website Shortcut Menu */}
          {isAddNewWebShortcutOpen &&
            PopupMenu_Mini(
              set_ModalOpen,
              ModalOpen,
              set_AddNewWebShortcutOpen, isAddNewWebShortcutOpen,
              "ADD SHORTCUT",
              <div>
                This is Add New Website Shortcut content
              </div>)
          }
          {/* ******************************************************** */}

        </div>

        {/* <ModalWindowUI /> */}



        {/* 📌 [Bottom-Right] Menu-Buttons:=> */}
        <div
          id="menuBody"
          className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1"
        >
          <div
            id="menuButton"
            className={`bg-gray-600 size-full rounded-full absolute z-5`}
            onClick={(e) => {
              e.stopPropagation();
              set_MenuButtonOn((prev) => !prev)
            }}
          ></div>

          {/* Options: */}
          <MenuBtn
            btnName="Settings"
            isVisible={menuButtonOn}
            color="bg-red-400"
            transitionAngle={0}
            onclick={(e) => {
              e.stopPropagation();
              if (isMenu_TodoOpen)
                set_MenuTodoOpen(false);
              if (isMenu_ShortcutOpen)
                set_MenuShortcutOpen(false);
              if (isMenu_GoogleAppsOpen)
                set_MenuGoogleAppsOpen(false);
              if (isAddNewWebShortcutOpen)
                set_AddNewWebShortcutOpen(false);
              if (ModalOpen)
                set_MenuSettingsOpen(true);
              // set_MenuTodoOpen((prev) => !prev);
              else {
                set_ModalOpen((prev) => !prev);
                set_MenuSettingsOpen(true);
              }
              set_MenuButtonOn((prev) => !prev);
            }}
          />

          <MenuBtn
            btnName="Todo"
            isVisible={menuButtonOn}
            color="bg-cyan-800"
            transitionAngle={30}
            onclick={(e) => {
              e.stopPropagation();
              if (isMenu_SettingsOpen)
                set_MenuSettingsOpen(false);
              if (isMenu_ShortcutOpen)
                set_MenuShortcutOpen(false);
              if (isMenu_GoogleAppsOpen)
                set_MenuGoogleAppsOpen(false);
              if (isAddNewWebShortcutOpen)
                set_AddNewWebShortcutOpen(false);

              if (ModalOpen)
                set_MenuTodoOpen(true);
              // set_MenuTodoOpen((prev) => !prev);
              else {
                set_ModalOpen((prev) => !prev);
                set_MenuTodoOpen(true);
              }
              set_MenuButtonOn((prev) => !prev);
            }}
          />

          <MenuBtn
            btnName="Shortcuts"
            isVisible={menuButtonOn}
            color="bg-green-400"
            transitionAngle={60}
            onclick={(e) => {
              e.stopPropagation();
              if (isMenu_SettingsOpen)
                set_MenuSettingsOpen(false);
              if (isMenu_TodoOpen)
                set_MenuTodoOpen(false);
              if (isMenu_GoogleAppsOpen)
                set_MenuGoogleAppsOpen(false);
              if (isAddNewWebShortcutOpen)
                set_AddNewWebShortcutOpen(false);

              if (ModalOpen)
                set_MenuShortcutOpen(true);
              // set_MenuShortcutOpen((prev) => !prev);
              else {
                set_ModalOpen((prev) => !prev);
                set_MenuShortcutOpen(true);
              }
              set_MenuButtonOn((prev) => !prev);
            }}
          />

          <MenuBtn
            btnName="Google Apps"
            isVisible={menuButtonOn}
            color="bg-yellow-400"
            transitionAngle={90}
            onclick={(e) => {
              e.stopPropagation();
              if (isMenu_SettingsOpen)
                set_MenuSettingsOpen(false);
              if (isMenu_TodoOpen)
                set_MenuTodoOpen(false);
              if (isMenu_ShortcutOpen)
                set_MenuShortcutOpen(false);
              if (isAddNewWebShortcutOpen)
                set_AddNewWebShortcutOpen(false);

              if (ModalOpen)
                set_MenuGoogleAppsOpen(true);
              // set_MenuGoogleAppsOpen((prev) => !prev);
              else {
                set_ModalOpen((prev) => !prev);
                set_MenuGoogleAppsOpen(true);
              }
              set_MenuButtonOn((prev) => !prev);
            }}
          />
        </div>

        {/* 📌 Website Shortcuts */}
        <div
          id="websiteShortcuts"
          className="bg-transparent w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1"
        >

          {/* [Button]: Show Saved Web Shortcuts */}
          <div
            id="webshortcutlinksButton"
            className="w-[100%] h-[100%] bg-amber-300 rounded-full absolute z-5"
            onClick={(e) => {
              e.stopPropagation();
              set_WebshortcutslinksButtonOn((prev) => !prev);
            }}
          ></div>

          {/* [Menu]: Containing Saved Web Links */}
          <div
            style={{ scrollbarWidth: "thin" }}
            className={`w-[100%] h-[100%] absolute z-4 
          ${webshortcutslinksButtonOn
                ? "bg-blue-500 transition duration-300 translate-x-[65%] -translate-y-[70%] w-[550%] h-[250%]  flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1  overflow-y-auto "
                : "bg-transparent transition duration-300 translate-x-0 -translate-y-0 scale-x-100 scale-y-100"
              }`}
          >
            {webshortcutslinksButtonOn && <AddNewWebShortcutLinkButton onClick={
              () => {
                set_WebshortcutslinksButtonOn(false);
                set_ModalOpen(true);
                set_MenuSettingsOpen(false);
                set_MenuTodoOpen(false);
                set_MenuShortcutOpen(false);
                set_MenuGoogleAppsOpen(false);
                set_AddNewWebShortcutOpen(true)
              }
            }
            />}
            {/* Added Links:=> */}
            {webshortcutslinksButtonOn && <WebShortcutLinksButton />}
            {webshortcutslinksButtonOn && <WebShortcutLinksButton />}

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
