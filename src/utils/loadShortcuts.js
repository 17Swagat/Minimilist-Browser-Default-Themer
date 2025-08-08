// Grok 3:
export async function loadShortcuts(setShortcuts) {
  try {
    const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
    setShortcuts(webShortcuts);

    // TODO: Remove it from production:
    // console.log("Shortcuts loaded:", webShortcuts);

  } catch (error) {
    console.error("Failed to load shortcuts:", error);
    setShortcuts([]); // Fallback to empty array on error
  }
}

