// import { appStorageStates } from "../app_storage_states";

// Grok 3:
export async function loadShortcuts(
  // setShortcuts
) {
  try {
    const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
    // setShortcuts(webShortcuts);

    // return 

    // TODO: Remove it from production:
    // console.log("Shortcuts loaded:", webShortcuts);

  } catch (error) {
    console.error("Failed to load shortcuts:", error);
    // appStorageStates.setState_usersSaved

    // state_userSavedWebLinks, setState_userSavedWebLinks
    // setShortcuts([]); // Fallback to empty array on error
  }
}

