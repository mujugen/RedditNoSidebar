// Function to apply styles to images
function applyStylesToImages(images) {
  images.forEach((img) => {
    // Trigger the image to load its dimensions
    img.onload = function () {
      if (img.clientHeight < 700) {
        // If the height is less than 700px, set the height to 700px
        // and change width to auto to maintain aspect ratio
        img.style.maxHeight = "700px";
        img.style.height = "700px";
        img.style.width = "auto";
      }
    };

    // In case the image is already loaded
    if (img.complete && img.clientHeight < 700) {
      img.style.maxHeight = "700px";
      img.style.height = "700px";
      img.style.width = "auto";
    }
  });
}

// Function to adjust the height of divs
function adjustDivHeights(divs) {
  divs.forEach((div) => {
    div.style.height = "700px";
  });
}

// Create and append a stylesheet link
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = chrome.runtime.getURL("myStyle.css");
document.head.appendChild(linkElement);

// Select the target element
const targetElement = document.querySelector(
  "[data-scroller-first]"
).parentElement;

// Apply styles to existing images
applyStylesToImages(document.querySelectorAll('img[alt="Post image"]'));

// Adjust height of existing divs with specific style
adjustDivHeights(
  Array.from(document.querySelectorAll('div[tabindex="-1"]')).filter((div) =>
    div.getAttribute("style")?.includes("height:")
  )
);

// Callback for mutation observer
const callback = function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Apply styles to new images
          applyStylesToImages(node.querySelectorAll('img[alt="Post image"]'));
          // Adjust height of new divs
          adjustDivHeights(
            Array.from(node.querySelectorAll('div[tabindex="-1"]')).filter(
              (div) => div.getAttribute("style")?.includes("height:")
            )
          );
        }
      });
    }
  }
};

// Create an instance of MutationObserver with the callback
let observer = new MutationObserver(callback);

// Set up the observation options and start observing
observer.observe(targetElement, { childList: true, subtree: true });

// To later disconnect the observer
// observer.disconnect();
