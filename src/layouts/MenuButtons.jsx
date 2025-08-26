import { MenuBtn } from "../components/MenuBtn";
import { useAppStateContext } from "../contexts/AppStates";
import btnIcons from "../assets/icons";

export default function MenuButtons() {
 
  const {
    menuButtonOn,
    toggleMenuButton,
    toggleTodoMenu, 
    toggleSettingsMenu, 
    toggleGoogleAppsMenu, 
    // toggleShortcutsMenu,
    togglePomodoroTimerMenu,
    modalWindowOpen,
    toggleModalWindow,
    settingsMenuOpen,
    closeAllMenus
  } = useAppStateContext()

  return (
    // <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1">
    <div className="bg-transparent w-[70px] h-[70px] text-white absolute bottom-3 right-3 flex items-center justify-center z-1">
      
      {/* Menu Button */}
      <div
        className="bg-gray-600 size-full rounded-full absolute z-5 transition duration-100 ease-linear active:invert hover:cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenuButton()
        }}
      >
        <img src={btnIcons.menu} alt="" className="pointer-events-none"/>
      </div>

      {/* Settings */}
      <MenuBtn 
        // btnName="Settings" 
        btnName={
          <img src={btnIcons.settings} alt="" className="pointer-events-none"/>
        }
        isVisible={menuButtonOn} 
        color="bg-red-400" 
        transitionAngle={0} 
        onclick={
          (e)=>{
            e.stopPropagation()
            closeAllMenus()
            if (!settingsMenuOpen) {
              if (!modalWindowOpen)
                toggleModalWindow()
              toggleSettingsMenu()
            }
          }
        } />
      
      {/* Todo */}
      <MenuBtn 
        // btnName="Todo" 
        btnName={
          <img src={btnIcons.todos} alt="" className="pointer-events-none"/>
        }
        isVisible={menuButtonOn} 
        color="bg-cyan-800" 
        transitionAngle={30} 
        onclick={
          (e)=>{
            e.stopPropagation()
            toggleTodoMenu()
            toggleMenuButton()
          }
        } />
      
      {/* Shortcuts :=> [Will include it in the Settings Menu] */}
      {/* <MenuBtn 
        btnName={
          <img src={btnIcons.shortcut} alt="" className="pointer-events-none"/>
        }
        // btnName="Shortcuts" 
        isVisible={menuButtonOn} 
        color="bg-cyan-800" 
        transitionAngle={60} 
        onclick={
          (e)=>{
            e.stopPropagation()
            toggleShortcutsMenu()
            toggleMenuButton()
          }
        } /> */}

      
      {/* Pomodoro */}
      <MenuBtn 
        btnName={
          <img src={btnIcons.pomodoro} alt="" className="pointer-events-none"/>
        }
        // btnName="Shortcuts" 
        isVisible={menuButtonOn} 
        color="bg-cyan-800" 
        transitionAngle={60} 
        onclick={
          (e)=>{
            e.stopPropagation()
            // toggleShortcutsMenu()
            togglePomodoroTimerMenu()
            toggleMenuButton()
          }
        } />


       
      {/* Google Apps */}
      <MenuBtn 
        btnName={
          <img src={btnIcons.gapps} alt="" className="pointer-events-none"/>
        }
        // btnName="Google Apps" 
        isVisible={menuButtonOn} 
        color="bg-cyan-800" 
        transitionAngle={90} 
        onclick={
          (e)=>{
            e.stopPropagation()
            toggleGoogleAppsMenu()
            toggleMenuButton()
          }
        } />

    </div>
  );
}
