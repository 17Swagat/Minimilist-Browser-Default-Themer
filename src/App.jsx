import { Clock } from "./components/ClockBtn";
import { useAppStates } from "./hooks/useAppStates";
import ModalMenus from "./components/ModalMenus";
import MenuButtons from "./components/MenuButtons";
import WebsiteShortcuts from "./components/WebsiteShortcuts";

export default function App() {
  const states = useAppStates();

  return (
    <div
      id="mainScreen"
      className="flex justify-center items-center"
      style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
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
