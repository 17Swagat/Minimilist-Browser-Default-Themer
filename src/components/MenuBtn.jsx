export function MenuBtn({ btnName, isVisible, color, transitionAngle, onclick=()=>{} }) {
    const moveLength = 250;
    const moveX = moveLength * Math.cos(transitionAngle * (Math.PI / 180));
    const moveY = moveLength * Math.sin(transitionAngle * (Math.PI / 180));

    const style = {
        transform: isVisible ? `translate(${-moveX}px, ${-moveY}px)` : 'translate(0, 0)',
        transition: 'transform 0.3s ease, background-color 0.5s ease',
    };

    return (
        <div
            id={btnName}
            style={style}
            className={
        `size-full absolute z-4 rounded-full flex justify-center items-center  ${isVisible ? `bg-${color}` : `bg-transparent`} `
    }
            onClick={onclick}  // Example click handler
            // onClick={() => console.log(`${btnName} clicked`)}  // Example click handler
        >
            {btnName}
            
        </div>
    );
}
