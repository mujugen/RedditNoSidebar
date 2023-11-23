var linkElement = document.createElement("link");

// Set the rel attribute to 'stylesheet'
linkElement.rel = "stylesheet";

// Set the href attribute to the URL of your CSS file
linkElement.href = chrome.runtime.getURL("myStyle.css");

// Append the link element to the document's head
document.head.appendChild(linkElement);
