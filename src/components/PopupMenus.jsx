import {CloseButton} from "./CloseButton.jsx";

export function PopupMenu(
  modalVisibility_func, // function to toggle modal visibility
  isModalOpen_state, // boolean
  menuState_func, // function to toggle menu state
  menuState,
  menuName,
  menuBody
) {
  return (
    <>
      {isModalOpen_state && (
        <div
          className="w-1/2 h-1/2 bg-[#5c3facff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center z-15"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from closing the modal
          }}
        >
          {/* Menu Heading */}
          <div className="flex">
            <h1 className="text-white text-2xl font-bold p-3">{menuName}</h1>
            {/* Close Button */}
            <CloseButton
              onClick={(e) => {
                e.stopPropagation();
                modalVisibility_func(!isModalOpen_state);
                menuState_func(!menuState);
                // setModalOpen((prev) => !prev);
              }}
          />

          </div>

          {/* Menu Content */}
          <div className="w-full h-full bg-green-600">{menuBody}</div>
        </div>
      )}
    </>
  );
}


export function PopupMenu_Mini(
  modalVisibility_func, // function to toggle modal visibility
  isModalOpen_state, // boolean
  menuState_func, // function to toggle menu state
  menuState,
  menuName,
  menuBody
) {
  return (
    <>
      {isModalOpen_state && (
        <div
          className="w-1/3 h-1/3 bg-[#5c3facff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center z-15"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from closing the modal
          }}
        >
          {/* Menu Heading */}
          <div className="bg-yellow-500 w-full flex justify-between items-center p-1 rounded-t-lg">
            <h1 className="text-white text-2xl font-bold p-3 mt-1">{menuName}</h1>
            
            <div
              className=" bg-blue-500 p-3.5 rounded-full h-[30px] w-[30px] 
                flex justify-center items-center 
                text-white text-2xl font-bold 
                transition duration-300 ease active:invert"
              onClick={(e) => {
                e.stopPropagation();
                modalVisibility_func(!isModalOpen_state);
                menuState_func(!menuState)
                // setModalOpen((prev) => !prev);
              }}
            >
              X
            </div>
          </div>
          
          {/* <h1 className="text-white text-2xl font-bold p-3 mt-1">{menuName}</h1> */}

          {/* Close Button */}
          {/* <div
            className="absolute top-2 right-2 bg-red-500 p-3.5 mb-1 rounded-full h-[30px] w-[30px] flex justify-center items-center text-white text-2xl font-bold transition duration-300 ease active:invert"
            onClick={(e) => {
              e.stopPropagation();
              modalVisibility_func(!isModalOpen_state);
              menuState_func(!menuState)
              // setModalOpen((prev) => !prev);
            }}
          >
            X
          </div> */}

          {/* Menu Content */}
          <div className="w-full h-full bg-green-600 flex items-center">{menuBody}</div>
        </div>
      )}
    </>
  );
}