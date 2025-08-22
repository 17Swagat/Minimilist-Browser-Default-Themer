import { useEffect, useState } from "react";
import useAppSettingsStateContext from "../../../contexts/AppSettingsControlState";

export function ClockSettings() {
    
    const {
        availableTimeFormats,
        controls_clock,
        changeTimeFormat,
        changeClockBGColor,
        } = useAppSettingsStateContext()
    
    
    const [selectedFormat, setSelectedFormat] = useState('12hr');
    const [selectedColor, setSelectedColor] = useState("#ff0000");

    useEffect(()=>{
        setSelectedFormat(controls_clock.selectedTimeFormat)
        setSelectedColor(controls_clock.bgColor)
    },[])


    const handleChange = (event) => {
        setSelectedFormat(event.target.value);
        changeTimeFormat(event.target.value)
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };


    return (
        <div className="w-full h-full p-4 flex flex-col bg-gray-200 shadow-sm">
            <div className="space-y-2">
                <h2 className="text-2xl text-gray-800 ">Clock Settings</h2>
                <div>
                    <p className="text-gray-600 mb-2 uppercase tracking-wide">Time Format</p>
                    <form className="space-y-2 select-none">
                        {[
                            { value: availableTimeFormats[0], label: '12-Hour (HH:MM AM/PM)' },
                            { value: availableTimeFormats[1], label: '12-Hour (HH:MM:SS AM/PM)' },
                            { value: availableTimeFormats[2], label: '24-Hour (HH:MM)' },
                            { value: availableTimeFormats[3], label: '24-Hour (HH:MM:SS)' }
                        ].map(({ value, label }) => (
                            <label 
                                key={value}
                                className="flex items-center space-x-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors"
                                role="radio"
                                aria-checked={selectedFormat === value}
                            >
                                <input
                                    type="radio"
                                    name="timeFormat"
                                    value={value}
                                    checked={selectedFormat === value}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center transition-colors group-hover:border-blue-500 ${
                                    selectedFormat === value ? 'bg-blue-500 border-blue-500' : ''
                                }`}>
                                    {selectedFormat === value && (
                                        <span className="w-2 h-2 rounded-full bg-white"></span>
                                    )}
                                </span>
                                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{label}</span>
                            </label>
                        ))}
                    </form>
                </div>

                <div>
                    <p className="text-gray-600 mb-2 uppercase tracking-wide">Background Color</p>
                    <div className="flex items-center gap-3">
                        <input
                            type="color"
                            value={selectedColor}
                            onChange={handleColorChange}
                            className="w-15 h-10 rounded cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
                            title="Choose clock background color"
                        />
                        <span className="text-gray-700 font-bold font-mono bg-gray-50 px-1.5 py-1 rounded">{selectedColor}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};