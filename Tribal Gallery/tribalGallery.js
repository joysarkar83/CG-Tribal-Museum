const cards = document.querySelectorAll(".card");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

let currentImages = [];
let currentIndex = 0;

// Open modal with card's images
cards.forEach((card) => {
	const btn = card.querySelector(".card-explore");
	btn.addEventListener("click", () => {
		currentImages = JSON.parse(card.dataset.images);
		currentIndex = 0;
		modalImage.src = currentImages[currentIndex];
		modal.classList.add("active");
	});
});

// Navigation
nextBtn.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % currentImages.length;
	modalImage.src = currentImages[currentIndex];
});

prevBtn.addEventListener("click", () => {
	currentIndex =
		(currentIndex - 1 + currentImages.length) % currentImages.length;
	modalImage.src = currentImages[currentIndex];
});

closeBtn.addEventListener("click", () => {
	modal.classList.remove("active");
});

// Close on background click
modal.addEventListener("click", (e) => {
	if (e.target === modal) modal.classList.remove("active");
});


// Hide Hamburger
const hamburgerBtn = document.querySelector(
	".nav-subcontainer1-right-hamburger img"
);
const hamburgerMenu = document.querySelector(
	".nav-subcontainer1-right-hamburger .dropdown"
);

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

