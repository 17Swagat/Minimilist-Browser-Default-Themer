//  #2
import { Clock } from "./layouts/Clock";
import MenuButtons from "./layouts/MenuButtons";
import { AppStateContextProvider, useAppStateContext } from "./contexts/AppStates";
import ModalMenus from './layouts/ModalMenus'
import WebsiteShortcuts from './layouts/WebsiteShortcutsArea'
import { WebShortcutLinksButton } from "./components/WebShortcutLinksBtns";
// import { SavedWebLinksStateContextProvider, useSavedWebLinksStateContext } from "../contexts/SavedWebLinksState";
import { SavedWebLinksStateContextProvider } from "./contexts/SavedWebLinksState";

export default function App() {
  return (
    <AppStateContextProvider>
      <SavedWebLinksStateContextProvider>
        <MainScreen />
      </SavedWebLinksStateContextProvider>
    </AppStateContextProvider>
  );
}

function MainScreen() {
  
  const { menuButtonOn,webShortcutLinksOpen, closeAllMenus } = useAppStateContext();

  return (
    <div
      id="mainScreen"
      className="flex justify-center items-center h-[100vh] bg-gray-800 font-GFont-Protest-Guerrilla tracking-wide"
      onClick={() => {
        if (menuButtonOn) {
          closeAllMenus();
        }
        if (webShortcutLinksOpen) {
          closeAllMenus()
        }
      }}
    >
      <Clock />
      <ModalMenus />
      <MenuButtons />
      <WebsiteShortcuts/>
      {/* <WebsiteShortcuts {...states} /> */}
    </div>
  );
}


