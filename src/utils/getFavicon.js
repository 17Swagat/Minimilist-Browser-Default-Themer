// utils/getFavicon.js
export function getFaviconUrl(websiteUrl) {
  try {
    const url = new URL(websiteUrl);
    // Google's favicon service
    return `https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`;
    
    // OR you could try the site's own favicon
    // TODO: "Experiment with this approach"
    // return `${url.origin}/favicon.ico`;
  } catch (error) {
    console.error("Invalid URL provided:", websiteUrl);
    return null;
  }
}
