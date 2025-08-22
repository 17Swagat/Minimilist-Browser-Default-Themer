//  #2
import { Clock } from "./layouts/Clock";
import MenuButtons from "./layouts/MenuButtons";
import { AppStateContextProvider, useAppStateContext } from "./contexts/AppStates";
import ModalMenus from './layouts/ModalMenus'
import WebsiteShortcuts from './layouts/WebsiteShortcutsArea'
import { SavedWebLinksStateContextProvider } from "./contexts/SavedWebLinksState";
import bgImages from "./assets/background_images";

import useAppSettingsStateContext, { AppSettingsContextProvider } from "./contexts/AppSettingsControlState";

export default function App() {
  return (
    <AppStateContextProvider>
      <SavedWebLinksStateContextProvider>
        <AppSettingsContextProvider>
          <MainScreen />
        </AppSettingsContextProvider>
      </SavedWebLinksStateContextProvider>
    </AppStateContextProvider>
  );
}

function MainScreen() {

  const { menuButtonOn, webShortcutLinksOpen, closeAllMenus } = useAppStateContext();

  const {
    availableTimeFormats,
    controls_clock,
    controls_appBackground,
    changeTimeFormat,
    changeClockBGColor,
    changeAppBGColor,
    uploadAppBGImg } = useAppSettingsStateContext()

  return (
    <div
      id="mainScreen"

      // style={
      //   controls_appBackground.bgUploadImagePath.trim() === ''
      //     ? {}
      //     : { backgroundImage: `url(${controls_appBackground.bgUploadImagePath})` }

      // }
      style={{
        backgroundColor: controls_appBackground.bgColor,
        backgroundImage:
          (controls_appBackground.bgUploadImagePath.trim() === '')
            ? undefined
            : `url(${controls_appBackground.bgUploadImagePath})`,
      }}

      className={`flex justify-center items-center h-[100vh]
       font-GFont-Protest-Guerrilla tracking-wide bg-no-repeat bg-center bg-cover`}
      // bg-[#772252] font-GFont-Protest-Guerrilla tracking-wide bg-no-repeat bg-center bg-cover`}
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
      <WebsiteShortcuts />
    </div>
  );
}


