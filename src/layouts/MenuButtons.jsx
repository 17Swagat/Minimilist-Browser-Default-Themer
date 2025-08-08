// components/MenuButtons.jsx
import { MenuBtn } from "../components/MenuBtn";

export default function MenuButtons({
  menuButtonOn, set_MenuButtonOn,
  ModalOpen, set_ModalOpen,
  isMenu_SettingsOpen, set_MenuSettingsOpen,
  isMenu_TodoOpen, set_MenuTodoOpen,
  isMenu_ShortcutOpen, set_MenuShortcutOpen,
  isMenu_GoogleAppsOpen, set_MenuGoogleAppsOpen,
  isAddNewWebShortcutOpen, set_AddNewWebShortcutOpen
}) {
  const closeAllMenus = () => {
    set_MenuSettingsOpen(false);
    set_MenuTodoOpen(false);
    set_MenuShortcutOpen(false);
    set_MenuGoogleAppsOpen(false);
    set_AddNewWebShortcutOpen(false);
  };

  const handleClick = (setMenuOpen, isMenuOpen) => (e) => {
    e.stopPropagation();
    closeAllMenus();
    if (ModalOpen) setMenuOpen(true);
    else {
      set_ModalOpen(true);
      setMenuOpen(true);
    }
    set_MenuButtonOn(false);
  };

  return (
    <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 right-3 flex items-center justify-center z-1">
      <div
        className="bg-gray-600 size-full rounded-full absolute z-5"
        onClick={(e) => {
          e.stopPropagation();
          set_MenuButtonOn((prev) => !prev);
        }}
      ></div>

      <MenuBtn btnName="Settings" isVisible={menuButtonOn} color="bg-red-400" transitionAngle={0} onclick={handleClick(set_MenuSettingsOpen, isMenu_SettingsOpen)} />
      <MenuBtn btnName="Todo" isVisible={menuButtonOn} color="bg-cyan-800" transitionAngle={30} onclick={handleClick(set_MenuTodoOpen, isMenu_TodoOpen)} />
      <MenuBtn btnName="Shortcuts" isVisible={menuButtonOn} color="bg-green-400" transitionAngle={60} onclick={handleClick(set_MenuShortcutOpen, isMenu_ShortcutOpen)} />
      <MenuBtn btnName="Google Apps" isVisible={menuButtonOn} color="bg-yellow-400" transitionAngle={90} onclick={handleClick(set_MenuGoogleAppsOpen, isMenu_GoogleAppsOpen)} />
    </div>
  );
}
