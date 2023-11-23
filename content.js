var linkElement = document.createElement("link");

// Set the rel attribute to 'stylesheet'
linkElement.rel = "stylesheet";

// Set the href attribute to the URL of your CSS file
linkElement.href = chrome.runtime.getURL("myStyle.css");

// Append the link element to the document's head
document.head.appendChild(linkElement);

// Select the target element
let targetElement = document.querySelector(
  "[data-scroller-first]"
).parentElement;

let images = document.querySelectorAll('img[alt="Post image"]');
images.forEach((img) => {
  // Apply the styles to each image
  img.style.height = "900px";
  img.style.maxHeight = "900px";
});
// Select all div elements with tabindex="-1"
const allDivs = document.querySelectorAll('div[tabindex="-1"]');

// Filter these divs to get only those with a style attribute that includes 'height:'
const divsWithRandomHeight = Array.from(allDivs).filter((div) => {
  const style = div.getAttribute("style");
  return style && style.includes("height:");
});

// Set the height of each filtered div to 900px
divsWithRandomHeight.forEach((div) => {
  div.style.height = "900px";
});

// Create a callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        // Check if the node is an element node
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Find all images with alt="Post image" within this node
          let images = node.querySelectorAll('img[alt="Post image"]');
          images.forEach((img) => {
            // Apply the styles to each image
            img.style.height = "900px";
            img.style.maxHeight = "900px";
          });
          const allDivs = document.querySelectorAll('div[tabindex="-1"]');

          // Filter these divs to get only those with a style attribute that includes 'height:'
          const divsWithRandomHeight = Array.from(allDivs).filter((div) => {
            const style = div.getAttribute("style");
            return style && style.includes("height:");
          });

          // Set the height of each filtered div to 900px
          divsWithRandomHeight.forEach((div) => {
            div.style.height = "900px";
          });
        }
      });
    }
  }
};

// Create an instance of MutationObserver with the callback
let observer = new MutationObserver(callback);

// Set up the observation options
const config = {
  childList: true, // Observes direct children
  subtree: true, // Observes all descendants (not just direct children)
};

// Start observing the target element
observer.observe(targetElement, config);

// To later disconnect the observer
// observer.disconnect();
