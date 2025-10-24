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
