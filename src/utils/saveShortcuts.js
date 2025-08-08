// DeepSeek:
export async function saveShortcut(shortcutData, callback) {
  try {
    // Get existing shortcuts (or empty array if none exist)
    const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
    
    // Add the new shortcut
    const updatedShortcuts = [...webShortcuts, shortcutData];
    
    // Save back to storage
    await chrome.storage.local.set({ webShortcuts: updatedShortcuts });
    
    console.log("Shortcut saved:", shortcutData);
    callback?.(); // Only call if callback exists
  } catch (error) {
    console.error("Failed to save shortcut:", error);
  }
}
