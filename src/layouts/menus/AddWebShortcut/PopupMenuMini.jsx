import { useAppStateContext } from "../../../contexts/AppStates";

export function WebShortcuts_PopupMini(
  {menuState,
  toggleMenuStateFunc,
  menuName,
  menuBody}

) {

  const {modalWindowOpen, toggleModalWindow, closeAllMenus } = useAppStateContext()

  return (
    <>
      {(modalWindowOpen && menuState) && (
        <div
          className="w-1/3 h-1/3 bg-[#513e86] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center z-15"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from closing the modal
          }}
        >
          {/* Menu Heading */}
          <div className="bg-[#066188] w-full flex justify-between items-center p-1 rounded-t-lg">
            <h1 className="text-white text-2xl p-3 mt-1">{menuName}</h1>

            {/* Close Menu Button */}
            <div
              className=" bg-red-500 p-3.5 rounded-full h-[30px] w-[30px] 
                flex justify-center items-center  mr-2
                text-white text-2xl 
                transition duration-300 ease active:bg-red-700 select-none hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              X
            </div>
          </div>

          {/* Menu Content */}
          <div className="w-full h-full bg-transparent flex items-center">
            {menuBody}
          </div>
        </div>
      )}
    </>
  );
}