import { useState } from "react";

export function ClockSettings() {
    const [selectedFormat, setSelectedFormat] = useState('12hr');
    const [selectedColor, setSelectedColor] = useState("#ff0000");

    const handleChange = (event) => {
        setSelectedFormat(event.target.value);
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
                            { value: '12hr', label: '12-Hour (HH:MM AM/PM)' },
                            { value: '12hrWithSeconds', label: '12-Hour (HH:MM:SS AM/PM)' },
                            { value: '24hr', label: '24-Hour (HH:MM)' },
                            { value: '24hrWithSeconds', label: '24-Hour (HH:MM:SS)' }
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


// Old:
// import { useState } from "react";

// export function ClockSettings() {
//     // "12hr", "12hrWithSeconds", "24hr", "24hrWithSeconds"
//     const [selectedFormat, setSelectedFormat] = useState('12hr');
//     const [selectedColor, setSelectedColor] = useState("#ff0000");

//     const handleChange = (event) => {
//         setSelectedFormat(event.target.value);
//     };

//     const handleColorChange = (e) => {
//         setSelectedColor(e.target.value);
//     };

//     return (
//         <div className="w-full pl-5 pt-5 h-[400px] flex flex-col bg-gray-200 shadow-md">
//             <div>
//                 <h2 className="text-xl  mb-4 text-gray-800">CLOCK</h2>
//                 <p className="text-gray-600 mb-2 underline decoration-2">TIME FORMATS</p>
//                 <form className="space-y-3 select-none">
//                     <label className="flex items-center space-x-3 cursor-pointer">
//                         <input
//                             type="radio"
//                             name="timeFormat"
//                             value="12hr"
//                             checked={selectedFormat === '12hr'}
//                             onChange={handleChange}
//                             className="form-radio text-purple-600"
//                         />
//                         <span className="text-gray-700">12-Hour Format (HH:MM - AM/PM)</span>
//                     </label>

//                     <label className="flex items-center space-x-3 cursor-pointer">
//                         <input
//                             type="radio"
//                             name="timeFormat"
//                             value="12hrWithSeconds"
//                             checked={selectedFormat === '12hrWithSeconds'}
//                             onChange={handleChange}
//                             className="form-radio text-purple-600"
//                         />
//                         <span className="text-gray-700">12-Hour Format (HH:MM:SS - AM/PM)</span>
//                     </label>

//                     <label className="flex items-center space-x-3 cursor-pointer">
//                         <input
//                             type="radio"
//                             name="timeFormat"
//                             value="24hr"
//                             checked={selectedFormat === '24hr'}
//                             onChange={handleChange}
//                             className="form-radio text-purple-600"
//                         />
//                         <span className="text-gray-700">24-Hour Format (HH:MM)</span>
//                     </label>

//                     <label className="flex items-center space-x-3 cursor-pointer">
//                         <input
//                             type="radio"
//                             name="timeFormat"
//                             value="24hrWithSeconds"
//                             checked={selectedFormat === '24hrWithSeconds'}
//                             onChange={handleChange}
//                             className="form-radio text-purple-600"
//                         />
//                         <span className="text-gray-700">24-Hour Format (HH:MM:SS)</span>
//                     </label>
//                 </form>
//                 <hr className="my-3" />
//                 <p className="text-gray-600 mb-2 underline decoration-2">CLOCK BACKGROUND COLOR</p>

//                 <div className="flex items-center gap-2">
//                     <span>Select Color ➡️</span>
//                     <input
//                         type="color"
//                         value={selectedColor}
//                         onChange={handleColorChange}
//                         className="w-14 h-14 rounded-md cursor-pointer border border-gray-300 shadow-sm"
//                     />
//                     {/* <span className="text-gray-700 font-mono">{selectedColor}</span> */}
//                 </div>
//             </div>
//         </div>
//     );
// };



// #2.2
// import { useState } from "react";

// export function ClockSettings() {
//     const [selectedFormat, setSelectedFormat] = useState('12hr');
//     const [selectedColor, setSelectedColor] = useState("#ff0000");

//     const handleChange = (event) => {
//         setSelectedFormat(event.target.value);
//     };

//     const handleColorChange = (e) => {
//         setSelectedColor(e.target.value);
//     };

//     return (
//         <div className="w-full p-6 h-[400px] flex flex-col bg-white rounded-lg shadow-lg transition-all duration-300 overflow-y-auto">
//             <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">Clock Settings</h2>
                
//                 <div>
//                     <p className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">Time Format</p>
//                     <form className="space-y-4 select-none">
//                         {[
//                             { value: '12hr', label: '12-Hour Format (HH:MM AM/PM)' },
//                             { value: '12hrWithSeconds', label: '12-Hour Format (HH:MM:SS AM/PM)' },
//                             { value: '24hr', label: '24-Hour Format (HH:MM)' },
//                             { value: '24hrWithSeconds', label: '24-Hour Format (HH:MM:SS)' }
//                         ].map(({ value, label }) => (
//                             <label 
//                                 key={value}
//                                 className="flex items-center space-x-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-md transition-colors"
//                                 role="radio"
//                                 aria-checked={selectedFormat === value}
//                             >
//                                 <input
//                                     type="radio"
//                                     name="timeFormat"
//                                     value={value}
//                                     checked={selectedFormat === value}
//                                     onChange={handleChange}
//                                     className="hidden"
//                                 />
//                                 <span className={`w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors group-hover:border-purple-400 ${
//                                     selectedFormat === value ? 'bg-purple-600 border-purple-600' : ''
//                                 }`}>
//                                     {selectedFormat === value && (
//                                         <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
//                                     )}
//                                 </span>
//                                 <span className="text-gray-700 text-base group-hover:text-purple-600 transition-colors">{label}</span>
//                             </label>
//                         ))}
//                     </form>
//                 </div>

//                 <hr className="border-gray-200" />

//                 <div>
//                     <p className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">Clock Background Color</p>
//                     <div className="flex items-center gap-4">
//                         <span className="text-gray-700 text-base">Select Color</span>
//                         <input
//                             type="color"
//                             value={selectedColor}
//                             onChange={handleColorChange}
//                             className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-purple-400 shadow-sm transition-all"
//                             title="Choose clock background color"
//                         />
//                         <span className="text-gray-600 font-mono text-sm bg-gray-100 px-2 py-1 rounded">{selectedColor}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };