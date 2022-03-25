// NAV BAR TOGGLE
// Create Variables
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Event Listener
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
