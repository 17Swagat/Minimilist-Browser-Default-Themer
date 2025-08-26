// #0
import { useAppStateContext } from "../../../contexts/AppStates";
// import { useTimerContext } from "../../../contexts/TimerContext";
import { useTimerContext } from "../../../contexts/PomodoroTimerState";
import { useState, useEffect, useRef } from "react";
import { MenuBodyTimer } from "./MenuBodyTimer";

export default function PomodoroMenu() {
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

    return MenuBodyTimer(
        shortcutsMenuOpen,
        toggleShortcutsMenu,
        "Timer",
        shortcutsMenuOpen && 
        <MenuBody/>
    )
}

const timerTypes = {
  short: { name: 'Short Break', duration: 5 * 60 },
  long: { name: 'Long Break', duration: 15 * 60 },
  focus: { name: 'Focus Mode', duration: 45 * 60 },
};

function MenuBody() {
  const { selectedTimer, setSelectedTimer, timeLeft, setTimeLeft, isRunning, setIsRunning } =
    useTimerContext();

  // Format time for display (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start/pause timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerTypes[selectedTimer].duration);
  };

  // Select timer type
  const selectTimer = (type) => {
    setSelectedTimer(type);
    setTimeLeft(timerTypes[type].duration);
    setIsRunning(false);
  };

  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center p-1">
      <div className="p-4 w-74 py-5 bg-[#04143a] rounded-2xl">
        <div className="text-center mb-4">
          <div className="text-3xl text-white font-bold mb-2">{formatTime(timeLeft)}</div>
          <div className="text-sm text-gray-300">{timerTypes[selectedTimer].name}</div>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded ${
              isRunning ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
            } text-white transition`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
          >
            Reset
          </button>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => selectTimer('short')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'short' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Short Break (5 min)
          </button>
          <button
            onClick={() => selectTimer('long')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'long' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Long Break (15 min)
          </button>
          <button
            onClick={() => selectTimer('focus')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'focus' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Focus Mode (45 min)
          </button>
        </div>
      </div>
    </div>
  );
}





// #1
// import { createContext, useContext, useState } from "react";

// // Create the context with default values
// export const AppStateContext = createContext({
//   menuButtonOn: false,
//   webShortcutLinksOpen: false,
//   modalWindowOpen: false,
//   settingsMenuOpen: false,
//   shortcutsMenuOpen: false,
//   googleAppsMenuOpen: false,
//   todoMenuOpen: false,
//   addWebShortcutLinkMenuOpen: false,
//   toggleMenuButton: () => {},
//   toggleWebShortcutsButton: () => {},
//   toggleModalWindow: () => {},
//   toggleSettingsMenu: () => {},
//   toggleShortcutsMenu: () => {},
//   toggleGoogleAppsMenu: () => {},
//   toggleTodoMenu: () => {},
//   toggleWebShortcutLinkMenu: () => {},
//   closeAllMenus: () => {},
// });

// // Custom provider component to manage state
// export function AppStateContextProvider({ children }) {
//   const [menuButtonOn, setMenuButtonOn] = useState(false);
//   const [webShortcutLinksOpen, setWebShortcutLinksOpen] = useState(false);
//   const [modalWindowOpen, setModalWindowOpen] = useState(false);
//   const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
//   const [shortcutsMenuOpen, setShortcutsMenuOpen] = useState(false);
//   const [googleAppsMenuOpen, setGoogleAppsMenuOpen] = useState(false);
//   const [todoMenuOpen, setTodoMenuOpen] = useState(false);
//   const [addWebShortcutLinkMenuOpen, setAddWebShortcutLinkMenu] = useState(false);

//   const closeAllMenus = () => {
//     setMenuButtonOn(false);
//     setWebShortcutLinksOpen(false);
//     setModalWindowOpen(false);
//     setSettingsMenuOpen(false);
//     setShortcutsMenuOpen(false);
//     setGoogleAppsMenuOpen(false);
//     setAddWebShortcutLinkMenu(false);
//     setTodoMenuOpen(false);
//   };

//   const toggleMenuButton = () => setMenuButtonOn(!menuButtonOn);
//   const toggleWebShortcutsButton = () => setWebShortcutLinksOpen(!webShortcutLinksOpen);
//   const toggleModalWindow = () => setModalWindowOpen(!modalWindowOpen);

//   const toggleSettingsMenu = () => {
//     closeAllMenus();
//     setModalWindowOpen((prev) => !prev);
//     setSettingsMenuOpen((prev) => !prev);
//   };

//   const toggleTodoMenu = () => {
//     closeAllMenus();
//     setModalWindowOpen((prev) => !prev);
//     setTodoMenuOpen((prev) => !prev);
//   };

//   const toggleShortcutsMenu = () => {
//     closeAllMenus();
//     setModalWindowOpen((prev) => !prev);
//     setShortcutsMenuOpen((prev) => !prev);
//   };

//   const toggleGoogleAppsMenu = () => {
//     closeAllMenus();
//     setModalWindowOpen((prev) => !prev);
//     setGoogleAppsMenuOpen((prev) => !prev);
//   };

//   const toggleWebShortcutLinkMenu = () => {
//     closeAllMenus();
//     setModalWindowOpen((prev) => !prev);
//     setAddWebShortcutLinkMenu((prev) => !prev);
//   };

//   const value = {
//     menuButtonOn,
//     webShortcutLinksOpen,
//     modalWindowOpen,
//     settingsMenuOpen,
//     shortcutsMenuOpen,
//     googleAppsMenuOpen,
//     todoMenuOpen,
//     addWebShortcutLinkMenuOpen,
//     toggleMenuButton,
//     toggleWebShortcutsButton,
//     toggleModalWindow,
//     toggleSettingsMenu,
//     toggleShortcutsMenu,
//     toggleGoogleAppsMenu,
//     toggleTodoMenu,
//     toggleWebShortcutLinkMenu,
//     closeAllMenus,
//   };

//   return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
// }

// // Custom hook to use the context
// export function useAppStateContext() {
//   return useContext(AppStateContext);
// }


// #2
// import { useAppStateContext } from "../../../contexts/AppStates";
// import { useState, useEffect, useRef } from "react";
// import { MenuBodyTimer } from "./MenuBodyTimer";

// export default function PomodoroMenu() {

//     const {
//         menuButtonOn,
//         webShortcutLinksOpen,
//         modalWindowOpen,
//         settingsMenuOpen,
//         shortcutsMenuOpen,
//         googleAppsMenuOpen,
//         todoMenuOpen,
//         addWebShortcutLinkMenuOpen,
//         toggleMenuButton,
//         toggleWebShortcutsButton,
//         toggleModalWindow,
//         toggleSettingsMenu,
//         toggleShortcutsMenu,
//         toggleGoogleAppsMenu,
//         toggleTodoMenu,
//         toggleWebShortcutLinkMenu,
//         closeAllMenus,
//     } = useAppStateContext();

//     return MenuBodyTimer(
//         shortcutsMenuOpen,
//         toggleShortcutsMenu,
//         "Timer",
//         shortcutsMenuOpen && 
//         <MenuBody/>
//         // <div>This is Shortcuts content</div>
//     )
// }


// const timerTypes = {
//   short: { name: 'Short Break', duration: 5 * 60 },
//   long: { name: 'Long Break', duration: 15 * 60 },
//   focus: { name: 'Focus Mode', duration: 45 * 60 },
// };

// function MenuBody() {
//   const { selectedTimer, setSelectedTimer, timeLeft, setTimeLeft, isRunning, setIsRunning } =
//     useAppStateContext();

//   // Format time for display (MM:SS)
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Start/pause timer
//   const toggleTimer = () => {
//     setIsRunning(!isRunning);
//   };

//   // Reset timer
//   const resetTimer = () => {
//     setIsRunning(false);
//     setTimeLeft(timerTypes[selectedTimer].duration);
//   };

//   // Select timer type
//   const selectTimer = (type) => {
//     setSelectedTimer(type);
//     setTimeLeft(timerTypes[type].duration);
//     setIsRunning(false);
//   };

//   return (
//     <div className="w-full h-full bg-transparent flex justify-center items-center p-1">
//       <div className="p-4 w-74 py-5 bg-[#04143a] rounded-2xl">
//         <div className="text-center mb-4">
//           <div className="text-3xl text-white font-bold mb-2">{formatTime(timeLeft)}</div>
//           <div className="text-sm text-gray-300">{timerTypes[selectedTimer].name}</div>
//         </div>

//         <div className="flex justify-center space-x-2 mb-4">
//           <button
//             onClick={toggleTimer}
//             className={`px-4 py-2 rounded ${
//               isRunning ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
//             } text-white transition`}
//           >
//             {isRunning ? 'Pause' : 'Start'}
//           </button>
//           <button
//             onClick={resetTimer}
//             className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="space-y-2">
//           <button
//             onClick={() => selectTimer('short')}
//             className={`w-full py-2 rounded ${
//               selectedTimer === 'short' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             Short Break (5 min)
//           </button>
//           <button
//             onClick={() => selectTimer('long')}
//             className={`w-full py-2 rounded ${
//               selectedTimer === 'long' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             Long Break (15 min)
//           </button>
//           <button
//             onClick={() => selectTimer('focus')}
//             className={`w-full py-2 rounded ${
//               selectedTimer === 'focus' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             Focus Mode (45 min)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

