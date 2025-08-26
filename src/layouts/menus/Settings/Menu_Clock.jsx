import { useCallback } from "react";
import useAppSettingsStateContext from "../../../contexts/AppSettingsControlState";

export function ClockSettings() {
    const {
        availableTimeFormats,
        controls_clock,
        changeTimeFormat,
        changeClockBGColor,
        changeClockTimeFontSize,
        timeBoxTransparent
    } = useAppSettingsStateContext();

    // Handlers use useCallback to avoid re-creation on every render
    const handleTimeFormatChange = useCallback(
        (e) => changeTimeFormat(e.target.value),
        [changeTimeFormat]
    );

    const handleColorChange = useCallback(
        (e) => changeClockBGColor(e.target.value),
        [changeClockBGColor]
    );

    const handleFontSizeChange = useCallback(
        (e) => {
            let value = Math.max(10, Number(e.target.value));
            changeClockTimeFontSize(value);
        },
        [changeClockTimeFontSize]
    );

    return (
        <div className="w-full h-full p-6 bg-white rounded-xl shadow-md flex flex-col space-y-6 overflow-y-auto">
            <h2 className="text-xl sm:text-2xl text-gray-800 font-medium">Clock Settings</h2>

            {/* Time Format */}
            <div>
                <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Time Format</p>
                <div className="space-y-2 select-none">
                    {[
                        { value: availableTimeFormats[0], label: '12-Hour (HH:MM AM/PM)' },
                        { value: availableTimeFormats[1], label: '12-Hour (HH:MM:SS AM/PM)' },
                        { value: availableTimeFormats[2], label: '24-Hour (HH:MM)' },
                        { value: availableTimeFormats[3], label: '24-Hour (HH:MM:SS)' }
                    ].map(({ value, label }) => (
                        <label
                            key={value}
                            className="flex items-center space-x-2 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                            role="radio"
                            aria-checked={controls_clock.selectedTimeFormat === value}
                        >
                            <input
                                type="radio"
                                name="timeFormat"
                                value={value}
                                checked={controls_clock.selectedTimeFormat === value}
                                onChange={handleTimeFormatChange}
                                className="hidden"
                            />
                            <span
                                className={`w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-colors group-hover:border-blue-500 ${
                                    controls_clock.selectedTimeFormat === value ? 'bg-blue-500 border-blue-500' : ''
                                }`}
                            >
                                {controls_clock.selectedTimeFormat === value && (
                                    <span className="w-3 h-3 rounded-full bg-white"></span>
                                )}
                            </span>
                            <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Background + Font Size */}
            <div>
                <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Background & Font Size</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <input
                        type="color"
                        value={controls_clock.bgColor}
                        onChange={handleColorChange}
                        className="w-12 h-10 rounded-md cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
                        title="Choose clock background color"
                        disabled={controls_clock.transparent}
                    />
                    <label className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700 tracking-wide">Transparent {controls_clock.transparent ? "ON" : "OFF"}</span>
                        <input 
                            type="checkbox" 
                            name="transparent" 
                            checked={controls_clock.transparent}
                            onChange={timeBoxTransparent}
                            className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                        />
                    </label>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label className="text-sm text-gray-700">Font Size: <span>{controls_clock.fontSize}px</span></label>
                        <input
                            type="range"
                            min={10}
                            max={100}
                            step={1}
                            value={controls_clock.fontSize}
                            onChange={handleFontSizeChange}
                            className="w-full h-6 rounded cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
                            title="Adjust font size"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

// Old:
// import { useCallback } from "react";
// import useAppSettingsStateContext from "../../../contexts/AppSettingsControlState";

// export function ClockSettings() {
//     const {
//         availableTimeFormats,
//         controls_clock,
//         changeTimeFormat,
//         changeClockBGColor,
//         changeClockTimeFontSize,
//         timeBoxTransparent
//     } = useAppSettingsStateContext();

//     // Handlers use useCallback to avoid re-creation on every render
//     const handleTimeFormatChange = useCallback(
//         (e) => changeTimeFormat(e.target.value),
//         [changeTimeFormat]
//     );

//     const handleColorChange = useCallback(
//         (e) => changeClockBGColor(e.target.value),
//         [changeClockBGColor]
//     );

//     const handleFontSizeChange = useCallback(
//         (e) => {
//             let value = Math.max(10, Number(e.target.value));
//             changeClockTimeFontSize(value);
//         },
//         [changeClockTimeFontSize]
//     );

//     return (
//         <div className="w-full h-full p-4 flex flex-col bg-gray-200 shadow-sm">
//             <div className="space-y-2">
//                 <h2 className="text-2xl text-gray-800">Clock Settings</h2>

//                 {/* Time Format */}
//                 <div>
//                     <p className="text-gray-600 mb-2 uppercase tracking-wide">Time Format</p>
//                     <form className="space-y-2 select-none">
//                         {[
//                             { value: availableTimeFormats[0], label: '12-Hour (HH:MM AM/PM)' },
//                             { value: availableTimeFormats[1], label: '12-Hour (HH:MM:SS AM/PM)' },
//                             { value: availableTimeFormats[2], label: '24-Hour (HH:MM)' },
//                             { value: availableTimeFormats[3], label: '24-Hour (HH:MM:SS)' }
//                         ].map(({ value, label }) => (
//                             <label
//                                 key={value}
//                                 className="flex items-center space-x-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors"
//                                 role="radio"
//                                 aria-checked={controls_clock.selectedTimeFormat === value}
//                             >
//                                 <input
//                                     type="radio"
//                                     name="timeFormat"
//                                     value={value}
//                                     checked={controls_clock.selectedTimeFormat === value}
//                                     onChange={handleTimeFormatChange}
//                                     className="hidden"
//                                 />
//                                 <span
//                                     className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center transition-colors group-hover:border-blue-500 ${controls_clock.selectedTimeFormat === value
//                                         ? 'bg-blue-500 border-blue-500'
//                                         : ''
//                                         }`}
//                                 >
//                                     {controls_clock.selectedTimeFormat === value && (
//                                         <span className="w-2 h-2 rounded-full bg-white"></span>
//                                     )}
//                                 </span>
//                                 <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{label}</span>
//                             </label>
//                         ))}
//                     </form>
//                 </div>

//                 {/* Background + Font Size */}
//                 <div>
//                     <p className="text-gray-600 mb-2 uppercase tracking-wide">Background Color & Font Size</p>
//                     <div className="flex items-center gap-3">
//                         <input
//                             type="color"
//                             value={controls_clock.bgColor}
//                             onChange={handleColorChange}
//                             className="w-15 h-10 rounded cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
//                             title="Choose clock background color"
//                             disabled = {(controls_clock.transparent)}
//                         />

//                         <label className="flex flex-col items-start w-1/3">
//                             <span className="tracking-wider">Transparent {controls_clock.transparent ? "ON":"OFF"}</span>
//                             <input 
//                                 type="checkbox" 
//                                 name="transparent" 
//                                 checked={controls_clock.transparent}
//                                 onChange={(e)=>{
//                                     // console.log(e.target.value)
//                                     timeBoxTransparent()
//                                 }}/>
//                         </label>

//                         <span className="w-5"></span>
//                         <div className="flex flex-col">
//                             <label className="text-gray-700">
//                                 Font Size: <span>{controls_clock.fontSize}px</span>
//                             </label>
//                             <input
//                                 type="range"
//                                 min={0}
//                                 max={200}
//                                 step={1}
//                                 value={controls_clock.fontSize}
//                                 onChange={handleFontSizeChange}
//                                 className="w-40 h-6 rounded cursor-pointer border border-gray-200 hover:border-blue-400 transition-all"
//                                 title="Adjust font size"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

