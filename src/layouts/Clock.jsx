import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState('');

  let getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM"; // variable position matters!!
    if (hours > 12)
      hours = hours % 12;

    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return time;
  };

  
  useEffect(()=>{
    // Setting Time Each Second
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="
        w-[220px] h-[70px] p-5 text-white text-3xl 
        tracking-wide  flex justify-center items-center bg-amber-600 rounded-[7px]
        "
    >
      {getCurrentTime()}
    </div>
  );
}
