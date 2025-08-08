// utils/saveShortcut.js

// DeepSeek
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

// GPT 5 (Version):
// export function saveShortcut(shortcutData, callback) {
//   // shortcutData = { name: string, link: string, favicon: string }
//   chrome.storage.local.get(["webShortcuts"], (result) => {
//     const currentShortcuts = result.webShortcuts || [];
//     const updatedShortcuts = [...currentShortcuts, shortcutData];

//     chrome.storage.local.set({ webShortcuts: updatedShortcuts }, () => {
//       console.log("Shortcut saved:", shortcutData);
//       if (callback) callback();
//     });
//   });
// }


