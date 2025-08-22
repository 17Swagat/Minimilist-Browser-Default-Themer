// With indexedDB Stuff
import { createContext, useContext, useEffect, useState } from "react";
import { getImage } from "../indexedDB/idb";

export const AppSettingsContext = createContext({
    availableTimeFormats: ["12hours", "12hoursWithSeconds", "24hours", "24hoursWithSeconds"],
    controls_clock: {
        selectedTimeFormat: "12hours",
        bgColor: "#e17100",
        fontSize: 50,
        transparent: false
    },
    controls_appBackground: {
        bgColor: "#1e2939",
        bgUploadImagePath: "",
    },
    changeTimeFormat: (formatSelected) => { },
    timeBoxTransparent: ()=>{},
    changeClockBGColor: (color) => { },
    changeAppBGColor: (color) => { },
    uploadAppBGImg: (img_path) => { },
    changeClockTimeFontSize: (size) => { },
});

export function AppSettingsContextProvider({ children }) {
    const availableTimeFormats = ["12hr", "12hrWithSeconds", "24hr", "24hrWithSeconds"];

    const [controls_clock, setClockControls] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("APP_SETTINGS"));
        return (
            saved?.["clock-settings"] || {
                selectedTimeFormat: availableTimeFormats[1],
                bgColor: "#e17100",
                fontSize: 50,
                transparent: false
            }
        );
    });

    // const [controls_appBackground, setAppBackground] = useState({
    //     bgColor: "#1e2939",
    //     bgUploadImagePath: "",
    // });
    const [controls_appBackground, setAppBackground] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("APP_SETTINGS"));
    return (
        saved?.["app-settings"] || {
            bgColor: "#1e2939",
            bgUploadImagePath: "",
        }
    );
});




    
    // Load image from IndexedDB on mount
    useEffect(() => {
        async function loadImage() {
            try {
                const blob = await getImage("backgroundImage");
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    setAppBackground((prev) => ({ ...prev, bgUploadImagePath: url }));
                }
            } catch (error) {
                console.error("Error loading image from IndexedDB:", error);
            }
        }
        loadImage();

        // Cleanup URL on unmount
        return () => {
            if (controls_appBackground.bgUploadImagePath) {
                URL.revokeObjectURL(controls_appBackground.bgUploadImagePath);
            }
        };
    }, []); // Empty dependency array to run only on mount

    // Save settings to localStorage
    useEffect(() => {
        const app_settings = { "clock-settings": controls_clock, "app-settings": { bgColor: controls_appBackground.bgColor } };
        localStorage.setItem("APP_SETTINGS", JSON.stringify(app_settings));
    }, [controls_clock, controls_appBackground.bgColor]);

    const changeClockTimeFontSize = (size) => {
        setClockControls((prev) => ({ ...prev, fontSize: size }));
    };

    const changeTimeFormat = (formatSelected) => {
        if (!availableTimeFormats.includes(formatSelected)) {
            throw new Error(`Invalid Time Format given to the function: ${formatSelected}`);
        }
        setClockControls((prev) => ({ ...prev, selectedTimeFormat: formatSelected }));
    };

    const changeClockBGColor = (color) => {
        setClockControls((prev) => ({ ...prev, bgColor: color }));
    };

    const changeAppBGColor = (color) => {
        setAppBackground((prev) => ({ ...prev, bgColor: color }));
    };

    const uploadAppBGImg = (img_path) => {
        setAppBackground((prev) => {
            // Revoke previous URL if it exists
            if (prev.bgUploadImagePath) {
                URL.revokeObjectURL(prev.bgUploadImagePath);
            }
            return { ...prev, bgUploadImagePath: img_path };
        });
    };

    const timeBoxTransparent= ()=>{
        setClockControls((prev) => ({ ...prev, transparent: !(prev.transparent)}));
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
        timeBoxTransparent
    };

    return <AppSettingsContext.Provider value={values}>{children}</AppSettingsContext.Provider>;
}

export default function useAppSettingsStateContext() {
    return useContext(AppSettingsContext);
}