import { useAppStateContext } from "../../../contexts/AppStates";
import { useTimerContext } from "../../../contexts/PomodoroTimerState";
import { MenuBodyTimer } from "./MenuBodyTimer";

export default function PomodoroMenu() {
    const {
        menuButtonOn,
        webShortcutLinksOpen,
        modalWindowOpen,
        settingsMenuOpen,
        // shortcutsMenuOpen,
        pomodoroTimerMenuOpen,
        googleAppsMenuOpen,
        todoMenuOpen,
        addWebShortcutLinkMenuOpen,
        toggleMenuButton,
        toggleWebShortcutsButton,
        toggleModalWindow,
        toggleSettingsMenu,
        togglePomodoroTimerMenu,
        toggleGoogleAppsMenu,
        toggleTodoMenu,
        toggleWebShortcutLinkMenu,
        closeAllMenus,
    } = useAppStateContext();

    return MenuBodyTimer(
        pomodoroTimerMenuOpen,
        togglePomodoroTimerMenu,
        "Timer",
        pomodoroTimerMenuOpen && 
        <MenuBody/>
    )
}

const timerTypes = {
  short: { name: 'Short Break', duration: 5 * 60 },
  long: { name: 'Long Break', duration: 15 * 60 },
  focus: { name: 'Focus Mode', duration: 45 * 60 },
};

function MenuBody() {
  const { selectedTimer, setSelectedTimer, timeLeft, setTimeLeft, isRunning, setIsRunning } =
    useTimerContext();

  // Format time for display (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start/pause timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerTypes[selectedTimer].duration);
  };

  // Select timer type
  const selectTimer = (type) => {
    setSelectedTimer(type);
    setTimeLeft(timerTypes[type].duration);
    setIsRunning(false);
  };

  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center p-1">
      <div className="p-4 w-74 py-5 bg-[#04143a] rounded-2xl">
        <div className="text-center mb-4">
          <div className="text-3xl text-white font-bold mb-2">{formatTime(timeLeft)}</div>
          <div className="text-sm text-gray-300">{timerTypes[selectedTimer].name}</div>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded ${
              isRunning ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
            } text-white transition`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
          >
            Reset
          </button>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => selectTimer('short')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'short' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Short Break (5 min)
          </button>
          <button
            onClick={() => selectTimer('long')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'long' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Long Break (15 min)
          </button>
          <button
            onClick={() => selectTimer('focus')}
            className={`w-full py-2 rounded ${
              selectedTimer === 'focus' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Focus Mode (45 min)
          </button>
        </div>
      </div>
    </div>
  );
}

