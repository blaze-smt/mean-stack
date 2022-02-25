// NAV BAR TOGGLE
// Create Variables
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Event Listener
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// COPY EMAIL
// Create variables
const email = document.getElementById("emailCopy");
const copyButton = document.getElementById("copyButton");

// Events
const copyEmail = (e) => {
  e.preventDefault();
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = "blazewaynesmith@gmail.com";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  email.innerHTML = "Copied!";
  setTimeout(() => {
    email.innerHTML = "Email Me";
  }, 2200);
};

// Event Listener
copyButton.addEventListener("click", copyEmail);
