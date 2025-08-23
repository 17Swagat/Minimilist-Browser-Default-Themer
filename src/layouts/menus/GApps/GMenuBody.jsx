// New:
import React, { useState, useEffect } from 'react';
import { GApps } from './gappData';

export function GMenu_Body() {
  const [apps, setApps] = useState(() => {
    // Load from localStorage on initialization
    const savedApps = localStorage.getItem('appOrder');
    if (savedApps) {
      try {
        const parsedApps = JSON.parse(savedApps);
        if (Array.isArray(parsedApps) && parsedApps.length === GApps.length) {
          const validApps = parsedApps.filter(app => app.id && app.name && app.icon && app.url);
          if (validApps.length === GApps.length) {
            // console.log('Loaded from localStorage:', validApps); // Debug
            return validApps;
          }
        }
      } catch (e) {
        // console.log('Error parsing localStorage:', e); // Debug
      }
    }
    // console.log('Using default GApps'); // Debug
    return GApps;
  });
  const [draggedId, setDraggedId] = useState(null);

  // Save apps to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('appOrder', JSON.stringify(apps));
      // console.log('Saved to localStorage:', apps); // Debug
    } catch (e) {
      // console.log('Error saving to localStorage:', e); // Debug
    }
  }, [apps]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
    setDraggedId(id);
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const sourceId = e.dataTransfer.getData('text/plain');
    if (sourceId !== targetId) {
      setApps((prevApps) => {
        const sourceIndex = prevApps.findIndex((app) => app.id === sourceId);
        const targetIndex = prevApps.findIndex((app) => app.id === targetId);
        const newApps = [...prevApps];
        const [movedApp] = newApps.splice(sourceIndex, 1);
        newApps.splice(targetIndex, 0, movedApp);
        // console.log('New order:', newApps); // Debug
        return newApps;
      });
    }
    setDraggedId(null);
    document.querySelectorAll('.draggable').forEach((el) => {
      el.style.opacity = '1';
      el.classList.remove('drag-over');
    });
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    document.querySelectorAll('.draggable').forEach((el) => {
      el.style.opacity = '1';
      el.classList.remove('drag-over');
    });
  };

  return (
    <div className="w-full h-full grid grid-cols-3 sm:grid-cols-4 gap-4 p-4">
      {apps.map((app) => (
        <div
          key={app.id}
          draggable
          onDragStart={(e) => handleDragStart(e, app.id)}
          onDragOver={(e) => handleDragOver(e, app.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, app.id)}
          onDragEnd={handleDragEnd}
          className={`flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-200 draggable ${
            draggedId === app.id ? 'opacity-50' : ''
          }`}
          onClick={() => window.open(app.url, '_blank')}
        >
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            className="w-14 h-14 mb-2"
          />
          <span className="text-white text-center">{app.name}</span>
        </div>
      ))}
    </div>
  );
}

// Old:
// import { GApps } from "./gappData"

// export function GMenu_Body() {
//     return (
//         <div className="w-full h-full grid grid-cols-3 sm:grid-cols-4 gap-4 p-4
//           ">
//             {
//                 GApps.map((app) => (
//                     <div
//                         key={app.name}
//                         className="flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-200"
//                         onClick={() => window.open(app.url, "_blank")}
//                     >
//                         <img
//                             src={app.icon}
//                             alt={`${app.name} icon`}
//                             className="w-14 h-14 mb-2"
//                         />
//                         <span className="text-white text-center">
//                             {app.name}
//                         </span>
//                     </div>
//                 ))}
//         </div>)
// }