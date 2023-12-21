// Create and append a stylesheet link
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL("style2.css");
document.head.appendChild(linkElement);


// Select all elements whose id starts with "moreComments-"
const moreComments = document.querySelectorAll('[id^="moreComments-"]');

// Modify the style of each selected element
moreComments.forEach(element => {
  // Remove padding-left
  element.style.paddingLeft = '0';

  // Set text-align to right
  element.style.textAlign = 'right';
});
