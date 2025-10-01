// Hide Hamburger
const hamburgerBtn = document.querySelector(".nav-subcontainer1-right-hamburger img");
const hamburgerMenu = document.querySelector(".nav-subcontainer1-right-hamburger .dropdown");

// Toggle menu on button click
hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent the document click handler from closing it immediately
  hamburgerMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideMenu = hamburgerMenu.contains(e.target);
  const isClickOnBtn = e.target === hamburgerBtn;
  
  if (!isClickInsideMenu && !isClickOnBtn) {
    hamburgerMenu.classList.remove("active");
  }
});

// Optional: Close menu when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburgerMenu.classList.remove("active");
  }
});