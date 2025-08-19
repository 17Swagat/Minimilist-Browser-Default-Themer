import { MenuBtn } from "../components/MenuBtn";
import { useAppStateContext } from "../contexts/AppStates";

export default function MenuButtons() {
 
  const {
    menuButtonOn,
    toggleMenuButton,
    toggleTodoMenu, 
    toggleSettingsMenu, 
    toggleGoogleAppsMenu, 
    toggleShortcutsMenu,
    modalWindowOpen,
    toggleModalWindow,
    settingsMenuOpen,
    closeAllMenus
  } = useAppStateContext()

  return (
    <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1">
      <div
        className="bg-gray-600 size-full rounded-full absolute z-5"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenuButton()
        }}
      ></div>

      <MenuBtn 
        btnName="Settings" 
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
      
      <MenuBtn 
        btnName="Todo" 
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
      
      <MenuBtn 
        btnName="Shortcuts" 
        isVisible={menuButtonOn} 
        color="bg-cyan-800" 
        transitionAngle={60} 
        onclick={
          (e)=>{
            e.stopPropagation()
            toggleShortcutsMenu()
            toggleMenuButton()
          }
        } />

       
      <MenuBtn 
        btnName="Google Apps" 
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
