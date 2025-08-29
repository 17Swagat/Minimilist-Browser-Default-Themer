import { useState } from "react";
import { SettingsPopupMenu } from "./SettingsPopup";
import { useAppStateContext } from "../../../contexts/AppStates";
import { ClockSettings } from "./Menu_Clock";
import { Menu_BackgroundSelect } from "./Menu_BackgroundSelect";

export default function SettingsMenuUI() {
    const {
        settingsMenuOpen,
        toggleSettingsMenu,
    } = useAppStateContext()

    return SettingsPopupMenu(
        settingsMenuOpen,
        toggleSettingsMenu,
        "SETTINGS - MENU",
        settingsMenuOpen &&
        <MenuContent />
    )
}

function MenuContent() {
    const [clockOption, setClockOption] = useState(true)
    const [backgroundOption, setBackgroundOption] = useState(false)

    const closeAllSettingsMenu = ()=>{
        setClockOption(false)
        setBackgroundOption(false)
    }
    
    const handleSettingsMenus = (setFunc)=>{
        closeAllSettingsMenu()
        setFunc(prev => !prev)
    }

    return (
        <div className="grid grid-cols-8 h-full">
            <div 
            className="col-span-2 bg-[#4225aaff] h-full flex flex-col items-center justify-start p-4 gap-3">
                <MenuButton 
                    btnName="Clock" 
                    isActive={clockOption}
                    onclick={()=>handleSettingsMenus(setClockOption)}
                />
                <MenuButton 
                    btnName="Background" 
                    isActive={backgroundOption}
                    onclick={()=>handleSettingsMenus(setBackgroundOption)}
                />
            </div>
            <div className="col-span-6 bg-gray-100 h-full p-6 overflow-y-auto">
                {clockOption && <ClockSettings/>}
                {backgroundOption && <Menu_BackgroundSelect/>}
            </div>
        </div>
    )
}

function MenuButton({btnName = '', onclick = () => {}, isActive = false}){
    return (
        <button 
            className={`w-full py-3 px-4 text-white text-lg font-medium tracking-wide rounded-lg transition duration-300 ease-in-out hover:bg-amber-500 
                ${
                isActive ? 'bg-amber-600' : 'bg-[#3f3b35c9]'
            }
            
            `} 

            // focus:outline-none 
            // focus:ring-2 
            // focus:ring-purple-400

            onClick={onclick}>
            {btnName}
        </button>
    );
}
