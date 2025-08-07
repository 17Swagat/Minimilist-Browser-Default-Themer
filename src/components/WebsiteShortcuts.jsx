// components/WebsiteShortcuts.jsx
import { WebShortcutLinksButton, AddNewWebShortcutLinkButton } from "./WebShortcutLinksBtn";

export default function WebsiteShortcuts({
  webshortcutslinksButtonOn, set_WebshortcutslinksButtonOn,
  set_ModalOpen,
  set_MenuSettingsOpen,
  set_MenuTodoOpen,
  set_MenuShortcutOpen,
  set_MenuGoogleAppsOpen,
  set_AddNewWebShortcutOpen
}) {
  return (
    <div className="bg-transparent w-25 h-25 text-white absolute bottom-3 left-3 flex items-center justify-center z-1">
      <div
        className="w-[100%] h-[100%] bg-amber-300 rounded-full absolute z-5"
        onClick={(e) => {
          e.stopPropagation();
          set_WebshortcutslinksButtonOn(prev => !prev);
        }}
      ></div>

      <div className={`w-[100%] h-[100%] absolute z-4 ${webshortcutslinksButtonOn ? "bg-blue-500 transition duration-300 translate-x-[65%] -translate-y-[70%] w-[550%] h-[250%]  flex gap-x-1.5 gap-y-2 flex-wrap place-content-start rounded-2xl p-1  overflow-y-auto" : "bg-transparent transition duration-300 translate-x-0 -translate-y-0 scale-x-100 scale-y-100"}`}>
        {webshortcutslinksButtonOn && (
          <>
            <AddNewWebShortcutLinkButton
              onClick={() => {
                set_WebshortcutslinksButtonOn(false);
                set_ModalOpen(true);
                set_MenuSettingsOpen(false);
                set_MenuTodoOpen(false);
                set_MenuShortcutOpen(false);
                set_MenuGoogleAppsOpen(false);
                set_AddNewWebShortcutOpen(true);
              }}
            />
            <WebShortcutLinksButton />
            <WebShortcutLinksButton />
          </>
        )}
      </div>
    </div>
  );
}