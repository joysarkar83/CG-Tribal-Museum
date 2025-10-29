const folders = {
	"Tribal Introduction": 1,
	"Life Cycle": 2,
	"Housing and Domestic Tools": 4,
	"Hunting Tools and Equipment": 2,
	"Traditional Clothing and Ornaments": 5,
	"Agricultural Implements": 2,
	"Tribal Dance": 2,
	"Tribal Musical Instruments": 4,
	"Religious Beliefs": 1,
	"Tribal Festivals": 4,
	"Traditional Technologies": 2,
	"Cultural Heritage": 2,
	"Arts and Crafts": 3,
	"Particularly Vulnerable Tribal Groups": 7,
};

// ====== MODAL ELEMENTS ======
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentFolder = "";
let currentIndex = 1;

// ====== OPEN MODAL ======
document.querySelectorAll(".card-explore").forEach(btn => {
	btn.addEventListener("click", () => {
		currentFolder = btn.dataset.folder;
		currentIndex = 1;
		showImage();
		modal.style.display = "flex";
		document.body.style.overflow = "hidden"; // prevent scroll
	});
});

// ====== SHOW IMAGE ======
function showImage() {
	const path = `/Resource/Tribal Gallery/${currentFolder}/${currentIndex}.jpg`;
	modalImg.src = path;
}

// ====== NEXT / PREV BUTTONS ======
nextBtn.addEventListener("click", () => {
	currentIndex = currentIndex < folders[currentFolder] ? currentIndex + 1 : 1;
	showImage();
});

prevBtn.addEventListener("click", () => {
	currentIndex = currentIndex > 1 ? currentIndex - 1 : folders[currentFolder];
	showImage();
});

// ====== CLOSE MODAL ======
closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
	document.body.style.overflow = "auto"; // restore scroll
	document.body.style.overflowX = "hidden";
});

// ====== CLOSE BY CLICKING OUTSIDE ======
modal.addEventListener("click", e => {
	if (e.target === modal) {
		modal.style.display = "none";
		document.body.style.overflow = "auto";
		document.body.style.overflowX = "hidden";
	}
});

// ====== KEYBOARD NAVIGATION ======
document.addEventListener("keydown", e => {
	if (modal.style.display !== "flex") return;

	if (e.key === "ArrowRight") nextBtn.click();
	if (e.key === "ArrowLeft") prevBtn.click();
	if (e.key === "Escape") closeBtn.click();
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