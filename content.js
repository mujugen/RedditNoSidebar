window.onload = function () {
  const parentElement = document.querySelectorAll(
    '[style="max-width:100%"]'
  )[1];
  if (parentElement) {
    const sidebar = parentElement.children[1];
    if (sidebar) {
      sidebar.remove();
    }
    const mainContent = parentElement.children[0];
    if (mainContent) {
      mainContent.style.width = "100%";
      mainContent.style.marginRight = "0";
    }
  }
};
