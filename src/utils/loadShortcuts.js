// utils/loadShortcuts.js

// DeepSeek Version: ❌
// utils/loadShortcuts.js
// export function loadShortcuts() {
//   return new Promise((resolve) => {
//     chrome.storage.local.get(["webShortcuts"], (result) => {
//       resolve(result.webShortcuts || []);
//     });
//   });
// }

// GPT 5 (Version): [Partially Work], but fail to render the saved
// website name, url-link, favicon
// export function loadShortcuts(callback) {
//   chrome.storage.local.get(["webShortcuts"], (result) => {
//     callback(result.webShortcuts || []);
//   });
// }


// Grok 3:
// utils/loadShortcuts.js
export async function loadShortcuts(setShortcuts) {
  try {
    const { webShortcuts = [] } = await chrome.storage.local.get("webShortcuts");
    setShortcuts(webShortcuts);
    console.log("Shortcuts loaded:", webShortcuts);
  } catch (error) {
    console.error("Failed to load shortcuts:", error);
    setShortcuts([]); // Fallback to empty array on error
  }
}