export function CloseButton(onClick) {
    return (
            <div
              className=" bg-blue-500 p-3.5 rounded-full h-[30px] w-[30px] 
                flex justify-center items-center 
                text-white text-2xl font-bold 
                transition duration-300 ease active:invert"
              onClick={ onclick
            //     (e) => {
            //     e.stopPropagation();
            //     modalVisibility_func(!isModalOpen_state);
            //     menuState_func(!menuState)
            //     // setModalOpen((prev) => !prev);
            //   }
            }
            >
              X
            </div>
    );
}