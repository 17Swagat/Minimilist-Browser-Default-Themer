import { useAppStateContext } from "../../../contexts/AppStates";

export function MenuBodyTimer(
  menuState,
  toggleMenuStateFunc,
  menuName,
  menuBody
) {

  const {modalWindowOpen, toggleModalWindow, closeAllMenus } = useAppStateContext()

  return (
    <>
      {
        // isModalOpen_state && (
        (modalWindowOpen && menuState) && (
          <div
            className="w-1/3 h-1/2 bg-[#5c3fac3d] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center z-15"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from closing the modal
            }}>
            
            {/* Menu Heading */}
            <div className="flex items-center h-[15%]">
              <h1 className="text-white text-2xl tracking-wide">{menuName}</h1>
              
              {/* Close Button */}
              <div className="absolute right-3.5">
                <div
                  className=" bg-blue-500 p-3.5 rounded-full h-[30px] w-[30px] 
                  flex justify-center items-center 
                  text-white text-2xl font-bold 
                  transition duration-300 ease active:bg-red-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllMenus()
                    // toggleMenuStateFunc(!menuState)
                  }}>
               
                  X
                </div>

              </div>

            </div>

            {/* Menu Content */}
            <div className="w-full h-[85%] bg-[#4d45452b]">{menuBody}</div>
          </div>
        )
      }
    </>
  );
}
