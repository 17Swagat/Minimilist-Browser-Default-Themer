// import btnIcons from "../assets/icons";

// export function MenuBtn({ btnName, isVisible, color, transitionAngle, onclick=()=>{} }) {
//     const moveLength = 190;
//     const moveX = moveLength * Math.cos(transitionAngle * (Math.PI / 180));
//     const moveY = moveLength * Math.sin(transitionAngle * (Math.PI / 180));

//     const style = {
//         transform: isVisible ? `translate(${-moveX}px, ${-moveY}px)` : 'translate(0, 0)',
//         transition: 'transform 0.3s ease, background-color 0.5s ease',
//     };

//     return (
//         <div
//             id={btnName}
//             style={style}
//             className={
//         `transition ease-in active:invert 
        
//           hover:brightness-150 hover:transition-all duration-500 hover:ease-in
//         w-[70px] h-[70px]  absolute z-4 rounded-full flex justify-center items-center  ${isVisible ? `${color}` : `bg-transparent`} `
//     }
//             onClick={onclick}  // Example click handler
//             // onClick={() => console.log(`${btnName} clicked`)}  // Example click handler
//         >
//             {btnName}

            
//         </div>
//     );
// }



export function MenuBtn({ btnName, isVisible, color, transitionAngle, onclick = () => {} }) {
    const moveLength = 190;
    const moveX = moveLength * Math.cos(transitionAngle * (Math.PI / 180));
    const moveY = moveLength * Math.sin(transitionAngle * (Math.PI / 180));

    const style = {
        transform: isVisible ? `translate(${-moveX}px, ${-moveY}px)` : 'translate(0, 0)',
    };

    return (
        <div
            id={btnName}
            style={style}
            className={`
                transition-all duration-230 ease-in
                w-[70px] h-[70px] absolute z-4 rounded-full flex justify-center items-center
                ${isVisible ? `${color}` : `bg-transparent`}
                hover:brightness-150 active:invert
            `}
            onClick={onclick}
        >
            {btnName}
        </div>
    );
}