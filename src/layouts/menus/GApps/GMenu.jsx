// New:
import { useAppStateContext } from "../../../contexts/AppStates";

export function GMenu({ menuState, toggleMenuStateFunc, menuName, menuBody }) {
  const { modalWindowOpen, closeAllMenus } = useAppStateContext();

  return (
    <>
      {modalWindowOpen && menuState && (
        <div
          className="w-[900px] max-w-[90vw] h-[800px] max-h-[80vh] bg-gradient-to-br from-[#5c3facff] to-[#3b2a7bff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl flex flex-col z-50
          custom-scrollbar scrollbar-consistent
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Heading */}
          <div className="flex items-center justify-between h-[60px] px-6 border-b border-white/10">
            <h1 className="text-white tracking-wide">{menuName}</h1>
            <button
              className="bg-blue-600 hover:bg-blue-700 active:bg-red-600 p-2 rounded-full h-8 w-8 flex justify-center items-center text-white text-lg font-bold transition duration-200"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              ✕
            </button>
          </div>

          {/* Menu Content */}
          <div className="w-full h-[calc(100%-60px)] bg-gray-900/80 backdrop-blur-sm rounded-b-xl overflow-y-auto p-4">
            {menuBody}
          </div>
        </div>
      )}
    </>
  );
}
