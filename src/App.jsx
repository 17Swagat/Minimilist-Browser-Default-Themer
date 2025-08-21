//  #2
import { Clock } from "./layouts/Clock";
import MenuButtons from "./layouts/MenuButtons";
import { AppStateContextProvider, useAppStateContext } from "./contexts/AppStates";
import ModalMenus from './layouts/ModalMenus'
import WebsiteShortcuts from './layouts/WebsiteShortcutsArea'
import { SavedWebLinksStateContextProvider } from "./contexts/SavedWebLinksState";
import bgImages from "./assets/background_images";

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
      // style={{backgroundImage: `url('${bgImages.bgImg2}')`}} 
      className="flex justify-center items-center h-[100vh]
      bg-gray-800 font-GFont-Protest-Guerrilla tracking-wide bg-no-repeat bg-center bg-cover"
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
    </div>
  );
}


