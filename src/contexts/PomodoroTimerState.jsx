import { createContext, useContext, useState, useEffect } from "react";

// Timer types with their durations in seconds
const timerTypes = {
  short: { name: 'Short Break', duration: 5 * 60 },
  long: { name: 'Long Break', duration: 15 * 60 },
  focus: { name: 'Focus Mode', duration: 45 * 60 },
};

// Create the timer context with default values
export const TimerContext = createContext({
  selectedTimer: 'short',
  setSelectedTimer: () => {},
  timeLeft: 5 * 60,
  setTimeLeft: () => {},
  isRunning: false,
  setIsRunning: () => {},
});

// Custom provider component to manage timer state
export function TimerContextProvider({ children }) {
  // Timer states with initial values from localStorage
  const [selectedTimer, setSelectedTimer] = useState(() => localStorage.getItem('selectedTimer') || 'short');
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('timeLeft');
    const savedTimestamp = localStorage.getItem('timerTimestamp');
    const isRunning = localStorage.getItem('isRunning') === 'true';
    if (isRunning && savedTime && savedTimestamp) {
      const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp, 10)) / 1000);
      const remaining = parseInt(savedTime, 10) - elapsed;
      return remaining > 0 ? remaining : 0;
    }
    return savedTime ? parseInt(savedTime, 10) : timerTypes.short.duration;
  });
  const [isRunning, setIsRunning] = useState(() => localStorage.getItem('isRunning') === 'true');

  // Timer countdown logic
  useEffect(() => {
    let intervalId = null;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setIsRunning(false);
            // Show notification when timer completes
            if ('Notification' in window && Notification.permission === 'granted') {
              const timerName = timerTypes[selectedTimer].name;
              new Notification(`Pomodoro Timer`, {
                body: `${timerName} session completed!`,
                icon: '/favicon.ico',
              });
            }
            return timerTypes[selectedTimer].duration; // Reset to initial duration
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, selectedTimer]);

  // Persist timer states to localStorage
  useEffect(() => {
    localStorage.setItem('selectedTimer', selectedTimer);
    localStorage.setItem('timeLeft', timeLeft.toString());
    localStorage.setItem('isRunning', isRunning.toString());
    localStorage.setItem('timerTimestamp', Date.now().toString());
  }, [selectedTimer, timeLeft, isRunning]);

  // Request notification permission on mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const value = {
    selectedTimer,
    setSelectedTimer,
    timeLeft,
    setTimeLeft,
    isRunning,
    setIsRunning,
  };

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

// Custom hook to use the timer context
export function useTimerContext() {
  return useContext(TimerContext);
}