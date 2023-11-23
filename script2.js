// Create and append a stylesheet link
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL("style2.css");
document.head.appendChild(linkElement);
console.log("hello world");
