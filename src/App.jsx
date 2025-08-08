import { Clock } from "./layouts/Clock";
import { useAppStates } from "./app_states";
import ModalMenus from "./layouts/ModalMenus";
import MenuButtons from "./layouts/MenuButtons";
import WebsiteShortcuts from "./layouts/WebsiteShortcutsArea";

export default function App() {
  const states = useAppStates();

  return (
    <div
      id="mainScreen"
      // className="flex justify-center items-center"
      className="flex justify-center items-center h-[100vh] bg-gray-800"
      // style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
      // style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
      onClick={() => {
        if (states.menuButtonOn) states.set_MenuButtonOn(false);
        if (states.webshortcutslinksButtonOn) states.set_WebshortcutslinksButtonOn(false);
      }}
    >
      <Clock />
      <ModalMenus {...states} />
      <MenuButtons {...states} />
      <WebsiteShortcuts {...states} />
    </div>
  );
}
