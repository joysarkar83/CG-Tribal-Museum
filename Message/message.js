document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    const showLessBtns = document.querySelectorAll(".show-less-btn");
    const messageFulls = document.querySelectorAll(".message-full");

    // messageFull.style.display = "none";
    // showLessBtn.style.display = "none";

    readMoreBtns.forEach((readMoreBtn, index) => {
        readMoreBtn.addEventListener("click", function () {
            messageFulls[index].style.display = "flex";
            readMoreBtns[index].style.display = "none";
            showLessBtns[index].style.display = "flex";
        });
    });

    showLessBtns.forEach((showLessBtn, index) => {
        showLessBtn.addEventListener("click", function () {
            messageFulls[index].style.display = "none";
            readMoreBtns[index].style.display = "flex";
            showLessBtns[index].style.display = "none";
        });
    });
});


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