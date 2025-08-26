import { useAppStateContext } from "../../../contexts/AppStates";

export function SettingsPopupMenu(
  menuState,
  toggleMenuStateFunc,
  menuName,
  menuBody
) {
  const { modalWindowOpen, closeAllMenus } = useAppStateContext()

  return (
    <>
      {
        (modalWindowOpen && menuState) && (
          <div
            className="w-[80vw] sm:w-[80vw] md:w-[60vw] h-[600px] sm:h-[500px] bg-gradient-to-b from-[#5c3fac] to-[#3b2582] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl flex flex-col z-20"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from closing the modal
            }}>
            
            {/* Menu Heading */}
            <div className="flex items-center h-[10%] p-4 sm:p-6 ">
              <h1 className="text-white text-xl sm:text-2xl font-medium tracking-widest">{menuName}</h1>
              
              {/* Close Button */}
              <button
                className="ml-auto bg-blue-500 p-2 sm:p-3 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center text-white text-lg sm:text-xl font-bold transition duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAllMenus()
                }}>
                ✕
              </button>
            </div>

            {/* Menu Content */}
            <div className="w-full h-[90%]">{menuBody}</div>
          </div>
        )
      }
    </>
  );
}


// Old:
// import { useAppStateContext } from "../../../contexts/AppStates";

// export function SettingsPopupMenu(
//   menuState,
//   toggleMenuStateFunc,
//   menuName,
//   menuBody
// ) {

//   const {modalWindowOpen, toggleModalWindow, closeAllMenus } = useAppStateContext()

//   return (
//     <>
//       {
//         // isModalOpen_state && (
//         (modalWindowOpen && menuState) && (
//           <div
//             className="w-[40vw] h-[400px] bg-[#5c3facff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center z-15"
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent click from closing the modal
//             }}>
            
//             {/* Menu Heading */}
//             <div className="flex items-center h-[15%]">
//               <h1 className="text-white text-2xl tracking-wide">{menuName}</h1>
              
//               {/* Close Button */}
//               <div className="absolute right-3.5">
//                 <div
//                   className=" bg-blue-500 p-3.5 rounded-full h-[30px] w-[30px] 
//                   flex justify-center items-center 
//                   text-white text-2xl font-bold 
//                   transition duration-300 ease active:bg-red-700"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     closeAllMenus()
//                     // toggleMenuStateFunc(!menuState)
//                   }}>
               
//                   X
//                 </div>

//               </div>

//             </div>

//             {/* Menu Content */}
//             <div className="w-full h-[85%]">{menuBody}</div>
//           </div>
//         )
//       }
//     </>
//   );
// }