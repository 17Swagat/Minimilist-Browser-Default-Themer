import { useState } from "react";
import { MenuBtn } from "./components/MenuBtn";
import { Clock } from "./components/ClockBtn";
import { WebShortcutLinksButton, AddNewWebShortcutLinkButton } from "./components/WebShortcutLinksBtn";

function App() {
  const [menuButtonOn, setMenuButtonOn] = useState(false);
  const [webshortcutslinksButtonOn, setWebshortcutslinksButtonOn] =
    useState(false);
  
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        id="mainScreen"
        className="flex justify-center items-center"
        style={{ backgroundColor: "#1c0353ff", height: "100vh" }}
      >
        <Clock />

        {/* Modal window */}
        <div className= {ModalOpen ? "bg-zinc-800 w-full h-full absolute" : "bg-transparent w-full h-full absolute -z-10"} onClick={()=>{setModalOpen((prev) => !prev)}}>

        </div>
        
        {/* Menu-Buttons:=> */}
        <div
          id="menuBody"
          className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1"
        >
          <div
            id="menuButton"
            className={`bg-gray-600 size-full rounded-full absolute z-5`}
            onClick={() => setMenuButtonOn((prev) => !prev)}
          ></div>

          {/* Options: */}
          <MenuBtn
            btnName="Settings"
            isVisible={menuButtonOn}
            color="red-600"
            transitionAngle={0}
            onclick={()=>{
              setModalOpen((prev) => !prev);
              setMenuButtonOn((prev) => !prev);
            }}
          />
          <MenuBtn
            btnName="Todo"
            isVisible={menuButtonOn}
            color="red-400"
            transitionAngle={30}
          />
          <MenuBtn
            btnName="Shortcuts"
            isVisible={menuButtonOn}
            color="red-400"
            transitionAngle={60}
          />
          <MenuBtn
            btnName="Google Apps"
            isVisible={menuButtonOn}
            color="blue-300"
            transitionAngle={90}
          />
        </div>

        {/* Website Shortcuts */}
        <div
          id="websiteShortcuts"
          className="bg-red-500 w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1"
        >
          <div
            id="webshortcutlinksButton"
            className="w-[100%] h-[100%] bg-amber-300 rounded-full absolute z-5"
            onClick={() => setWebshortcutslinksButtonOn((prev) => !prev)}
          ></div>

          {/* [Link Containing Menu] */}
          <div
            style={{ scrollbarWidth: "thin" }}
            className={`w-[100%] h-[100%] absolute z-4 
          ${webshortcutslinksButtonOn
                ? "bg-blue-500 transition duration-300 translate-x-[65%] -translate-y-[70%] w-[550%] h-[250%]  flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1  overflow-y-auto "
                : "bg-transparent transition duration-300 translate-x-0 -translate-y-0 scale-x-100 scale-y-100"
              }`}
          >
            {webshortcutslinksButtonOn && <AddNewWebShortcutLinkButton />}
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
