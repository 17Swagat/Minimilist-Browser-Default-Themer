import { useState } from "react";

export function Clock() {
  const [time, setTime] = useState('');

  let getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return time;
  };

  // Setting Time Each Second
  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <div className="w-[220px] h-[70px] p-5 text-white text-4xl font-bold flex justify-center items-center bg-amber-600 rounded-2xl">
      {getCurrentTime()}
    </div>
  );
}
