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
            className="col-span-2 bg-[#4225aaff] h-[100%] flex flex-col items-center">
                <MenuButton 
                    btnName="Clock" 
                    isActive={clockOption}
                    onclick={()=>{
                        handleSettingsMenus(setClockOption)
                    }}
                />
                <MenuButton 
                    btnName="Background" 
                    isActive={backgroundOption}
                    onclick={()=>{
                        handleSettingsMenus(setBackgroundOption)
                    }}
                />
            </div>
            <div className="col-span-6">
                {clockOption && <ClockSettings/>}
                {backgroundOption && <Menu_BackgroundSelect/>}
            </div>
        </div>
    )
}

function MenuButton({btnName = '', onclick = () => {}, isActive = false}){
    return (
        <div 
            className={`w-full p-2 text-white tracking-wide transition duration-300 ease-in-out active:invert hover:cursor-pointer select-none ${
                isActive ? 'bg-amber-600': 'bg-[#3f3b35c9]'
            }`} 
            onClick={onclick}>
            {btnName}
        </div>
    );
}