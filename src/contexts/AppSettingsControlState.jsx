import { createContext, useContext, useState } from "react";

export const AppSettingsContext = createContext({
    availableTimeFormats: ['12hours', '12hoursWithSeconds', '24hours', '24hoursWithSeconds'],
    controls_clock: {
        selectedTimeFormat: "12hours", 
        bgColor: "e17100",
        fontSize: 50, // px
    },
    controls_appBackground: {
        bgColor: "1e2939",
        bgUploadImagePath: ""
    },
    changeTimeFormat: (formatSelected)=>{},
    changeClockBGColor: (color)=>{},
    changeAppBGColor: (color)=>{},
    uploadAppBGImg: (img_path) => {},
    changeClockTimeFontSize: (size)=>{}
})

export function AppSettingsContextProvider({children}) {

    const availableTimeFormats= ['12hr', '12hrWithSeconds', '24hr', '24hrWithSeconds']

    const [controls_clock, setClockControls]= useState(
        {
            selectedTimeFormat: availableTimeFormats[1], 
            bgColor: "#e17100",
            fontSize: 50, // px
        }
    )
    
    const [controls_appBackground, setAppBackground] = useState({
        bgColor: "#1e2939",
        bgUploadImagePath: ""
    })

    const changeClockTimeFontSize = (size)=>{
        if (size <= 50)
            size = 50
        setClockControls(prev => ({...prev, fontSize: size}))
    }
    
    const changeTimeFormat= (formatSelected)=>{
        if (!availableTimeFormats.includes(formatSelected)) {
            throw new Error(`Invalid Time Format given to the function: ${formatSelected}`)
        }
        setClockControls(prev => ({...prev, selectedTimeFormat: formatSelected}))
    }

    const changeClockBGColor= (color)=>{
        setClockControls(prev => ({...prev, bgColor: color}))
    }

    const changeAppBGColor= (color)=>{
        setAppBackground(prev => ({...prev, bgColor: color}))
    }

    const uploadAppBGImg= (img_path) => {
        setAppBackground(prev => ({...prev, bgUploadImagePath: img_path}))
    }

    const values = {
        availableTimeFormats,
        controls_clock,
        controls_appBackground,
        changeTimeFormat,
        changeClockBGColor,
        changeClockTimeFontSize,
        changeAppBGColor,
        uploadAppBGImg,
    }

    return <AppSettingsContext.Provider value={values}>
        {children}
    </AppSettingsContext.Provider>
}

export default function useAppSettingsStateContext(){
    return useContext(AppSettingsContext)
}