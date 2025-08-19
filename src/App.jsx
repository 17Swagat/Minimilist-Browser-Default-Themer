//  #2
import { Clock } from "./layouts/Clock";
import MenuButtons from "./layouts/MenuButtons";
import { AppStateContextProvider, useAppStateContext } from "./contexts/AppStates";
import ModalMenus from './layouts/ModalMenus'

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
        if (menuButtonOn) {
          closeAllMenus();
        }
      }}
    >
      <Clock />
      <ModalMenus />
      <MenuButtons />
      {/* <WebsiteShortcuts {...states} /> */}
    </div>
  );
}


