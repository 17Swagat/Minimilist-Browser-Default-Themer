import { useEffect, useState } from "react";
import useAppSettingsStateContext from "../contexts/AppSettingsControlState";

export function Clock() {
  const [time, setTime] = useState("");

  const {
    availableTimeFormats,
    controls_clock,
  } = useAppSettingsStateContext();

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Always pad minutes/seconds
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    switch (controls_clock.selectedTimeFormat) {
      case availableTimeFormats[0]: {
        // 12hr
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes} ${ampm}`;
      }

      case availableTimeFormats[1]: {
        // 12hr With Seconds
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes}:${seconds} ${ampm}`;
      }

      case availableTimeFormats[2]: {
        // 24hr
        return `${hours.toString().padStart(2, "0")}:${minutes}`;
      }

      case availableTimeFormats[3]: {
        // 24hr With Seconds
        return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
      }

      default: {
        return `${hours}:${minutes}:${seconds}`;
      }
    }
  };

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [controls_clock.selectedTimeFormat]);

  
  const paddingText = (() => {
    if (controls_clock.selectedTimeFormat === availableTimeFormats[0]) {
      // 12hr
      return "XXXXXXXX";
    } else if (controls_clock.selectedTimeFormat === availableTimeFormats[1]) {
      // 12hr With Seconds
      return "XXXXXXXXXX";
    } else if (controls_clock.selectedTimeFormat === availableTimeFormats[2]) {
      // 24hr 
      return "XXXX";
    } else if (controls_clock.selectedTimeFormat === availableTimeFormats[3]) {
      // 24hr With Seconds
      return "XXXXXXX";
    }
    return "XXXXXX"; // Default
  })();

  return (
    <div
      className="p-5 text-white select-none tracking-wide flex justify-center items-center rounded-[7px] relative"
      style={{
        backgroundColor: controls_clock.bgColor,
        fontSize: `${controls_clock.fontSize}px`,
      }}
    >
      {/* Invisible ghost text ensures container width is fixed */}
      <span className="invisible">
        {paddingText}
      </span>

      {/* Actual time, absolutely centered */}
      <span className="absolute tracking-wide">
        {getCurrentTime()}
      </span>
    </div>
  );
}
