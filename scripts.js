// FUNCTIONS LOADS AND ACTIVATES UP ARROW ACTIONS
function loadUpArrow() {
  const upArrow = document.querySelector(".up-arrow");
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = "10px";
    } else {
      upArrow.style.right = "-50px";
    }
  }
  // ON SCROLL
  window.addEventListener("scroll", () => {
    activateUpArrow();
  });
  // ON RESIZE
  window.addEventListener("resize", () => {
    activateUpArrow();
  });
  // ON LOAD
  activateUpArrow();
}
window.onload = loadUpArrow;
