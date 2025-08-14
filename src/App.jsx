//  #2
import { Clock } from "./layouts/Clock";
import MenuButtons from "./layouts/MenuButtons";
import { AppStateContextProvider, useAppStateContext } from "./contexts/AppStates";

export default function App() {
  return (
    <AppStateContextProvider>
      <MainScreen />
    </AppStateContextProvider>
  );
}

function MainScreen() {
  const { menuButtonOn, closeAllMenus } = useAppStateContext();

  return (
    <div
      id="mainScreen"
      className="flex justify-center items-center h-[100vh] bg-gray-800 font-GFont-Protest-Guerrilla tracking-wide"
      onClick={() => {
        console.log("Main screen clicked, menuButtonOn:", menuButtonOn);
        if (menuButtonOn) {
          closeAllMenus(); // Close all menus when clicking outside
        }
      }}
    >
      <Clock />
      <MenuButtons />
    </div>
  );
}



// #1
// import { Clock } from "./layouts/Clock";
// import { useAppStates } from "./app_states";
// import ModalMenus from "./layouts/ModalMenus";
// import MenuButtons from "./layouts/MenuButtons";
// import WebsiteShortcuts from "./layouts/WebsiteShortcutsArea";
// import {useAppStateContext,  AppStateContext, AppStateContextProvider } from "./contexts/AppStates";
// import { useContext } from "react";

// export default function App() {
//   // const states = useAppStates();
  
//   // const {menuButtonOn, webShortcutLinksOpen, toggleMenuButton} = useContext(AppStateContext)
//   const {menuButtonOn, webShortcutLinksOpen, toggleMenuButton} = useAppStateContext()

//   return (


//     <AppStateContextProvider>
//     <div
//       id="mainScreen"
//       // className="flex justify-center items-center"
//       className="flex justify-center items-center h-[100vh] bg-gray-800 font-GFont-Protest-Guerrilla tracking-wide"
//       // style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
//       // style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
//       onClick={() => {
//         // if (states.menuButtonOn) states.set_MenuButtonOn(false);
//         // if (states.webshortcutslinksButtonOn) states.set_WebshortcutslinksButtonOn(false);
//         console.log('clicked')
//         console.log(menuButtonOn)
//         if (menuButtonOn) 
//           toggleMenuButton()
//       }}>

//       <Clock />
      

//         {/* <ModalMenus {...states} /> */}
//         <MenuButtons />
//         {/* <WebsiteShortcuts {...states} /> */}

//         </div>

//     </AppStateContextProvider>
//   );
// }


