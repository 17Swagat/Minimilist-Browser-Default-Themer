import { createContext, useContext, useState, useEffect } from "react";

// Timer types with their durations in seconds
const timerTypes = {
  short: { name: 'Short Break', duration: 5 * 60 },
  long: { name: 'Long Break', duration: 15 * 60 },
  focus: { name: 'Focus Mode', duration: 45 * 60 },
};

// Create the context with default values
export const AppStateContext = createContext({
  menuButtonOn: false,
  webShortcutLinksOpen: false,
  modalWindowOpen: false,
  settingsMenuOpen: false,
  shortcutsMenuOpen: false,
  googleAppsMenuOpen: false,
  todoMenuOpen: false,
  addWebShortcutLinkMenuOpen: false,
  toggleMenuButton: () => {},
  toggleWebShortcutsButton: () => {},
  toggleModalWindow: () => {},
  toggleSettingsMenu: () => {},
  toggleShortcutsMenu: () => {},
  toggleGoogleAppsMenu: () => {},
  toggleTodoMenu: () => {},
  toggleWebShortcutLinkMenu: () => {},
  closeAllMenus: () => {},
  selectedTimer: 'short',
  setSelectedTimer: () => {},
  timeLeft: 5 * 60,
  setTimeLeft: () => {},
  isRunning: false,
  setIsRunning: () => {},
});

// Custom provider component to manage state
export function AppStateContextProvider({ children }) {
  const [menuButtonOn, setMenuButtonOn] = useState(false);
  const [webShortcutLinksOpen, setWebShortcutLinksOpen] = useState(false);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [shortcutsMenuOpen, setShortcutsMenuOpen] = useState(false);
  const [googleAppsMenuOpen, setGoogleAppsMenuOpen] = useState(false);
  const [todoMenuOpen, setTodoMenuOpen] = useState(false);
  const [addWebShortcutLinkMenuOpen, setAddWebShortcutLinkMenu] = useState(false);

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

  const closeAllMenus = () => {
    setMenuButtonOn(false);
    setWebShortcutLinksOpen(false);
    setModalWindowOpen(false);
    setSettingsMenuOpen(false);
    setShortcutsMenuOpen(false);
    setGoogleAppsMenuOpen(false);
    setAddWebShortcutLinkMenu(false);
    setTodoMenuOpen(false);
  };

  const toggleMenuButton = () => setMenuButtonOn(!menuButtonOn);
  const toggleWebShortcutsButton = () => setWebShortcutLinksOpen(!webShortcutLinksOpen);
  const toggleModalWindow = () => setModalWindowOpen(!modalWindowOpen);

  const toggleSettingsMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setSettingsMenuOpen((prev) => !prev);
  };

  const toggleTodoMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setTodoMenuOpen((prev) => !prev);
  };

  const toggleShortcutsMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setShortcutsMenuOpen((prev) => !prev);
  };

  const toggleGoogleAppsMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setGoogleAppsMenuOpen((prev) => !prev);
  };

  const toggleWebShortcutLinkMenu = () => {
    closeAllMenus();
    setModalWindowOpen((prev) => !prev);
    setAddWebShortcutLinkMenu((prev) => !prev);
  };

  const value = {
    menuButtonOn,
    webShortcutLinksOpen,
    modalWindowOpen,
    settingsMenuOpen,
    shortcutsMenuOpen,
    googleAppsMenuOpen,
    todoMenuOpen,
    addWebShortcutLinkMenuOpen,
    toggleMenuButton,
    toggleWebShortcutsButton,
    toggleModalWindow,
    toggleSettingsMenu,
    toggleShortcutsMenu,
    toggleGoogleAppsMenu,
    toggleTodoMenu,
    toggleWebShortcutLinkMenu,
    closeAllMenus,
    selectedTimer,
    setSelectedTimer,
    timeLeft,
    setTimeLeft,
    isRunning,
    setIsRunning,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

// Custom hook to use the context
export function useAppStateContext() {
  return useContext(AppStateContext);
}
