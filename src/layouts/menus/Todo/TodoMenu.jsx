import { PopupMenu } from "../../../components/PopupMenus";
import { useAppStateContext } from "../../../contexts/AppStates";

export default function TodoMenuUI() {
  const {
    menuButtonOn,
    webShortcutLinksOpen,
    modalWindowOpen,
    settingsMenuOpen,
    shortcutsMenuOpen,
    googleAppsMenuOpen,
    todoMenuOpen,
    toggleMenuButton,
    toggleWebShortcutsButton,
    toggleModalWindow,
    toggleSettingsMenu,
    toggleShortcutsMenu,
    toggleGoogleAppsMenu,
    toggleTodoMenu,
    closeAllMenus,
  } = useAppStateContext();

  return 
  
  PopupMenu(
    todoMenuOpen,
    toggleTodoMenu,
    "TODO - MENU",
    todoMenuOpen && (
      <div className="h-full p-3 bg-gray-100 ">
        {/* Todo Input Area */}
        <div className="flex mb-6 gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-400"
            placeholder="Write your todos..."
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 active:scale-95 select-none font-medium">
            Add
          </button>
        </div>


        {/* Todo List */}
        <div className=" overflow-y-auto  h-[80%]">
          {/* Todo Item 1 */}
          <div className="flex items-center bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            {/* <div
              className="flex-1 p-3 text-gray-800 bg-gray-50 rounded-md overflow-ellipsis"
              contentEditable="false"
            >
              Morning Walk: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officia ipsum cum amet labore, culpa ut nam
            </div> */}

            <input
              type="text"
              className="flex-1 p-3 text-gray-800 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-auto"
              value="Morning Walk: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum cum amet labore, culpa ut nam"
              readOnly={true}
              onChange={(e) => {}}
            />

            <button className="ml-3 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 active:scale-95 select-none font-medium">
              Edit
            </button>
            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 active:scale-95 select-none font-medium">
              Delete
            </button>
          </div>

          {/* Todo Item 2 */}
          <div className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <div
              className="flex-1 p-3 text-gray-800 bg-gray-50 rounded-md"
              contentEditable="false"
            >
              Morning Walk: Lorem ipsum dolor sit amet.
            </div>
            <button className="ml-3 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 active:scale-95 select-none font-medium">
              Edit
            </button>
            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 active:scale-95 select-none font-medium">
              Delete
            </button>
          </div>

          {/* Todo Item 3 */}
          <div className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <div
              className="flex-1 p-3 text-gray-800 bg-gray-50 rounded-md"
              contentEditable="false"
            >
              Morning Walk: Lorem ipsum dolor sit amet.
            </div>
            <button className="ml-3 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 active:scale-95 select-none font-medium">
              Edit
            </button>
            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 active:scale-95 select-none font-medium">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
}
