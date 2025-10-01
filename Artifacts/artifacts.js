  const galleryImgs = document.querySelectorAll('.gallery-img');
  const modalEl = document.getElementById('galleryModal');
  const carouselEl = document.getElementById('carouselGallery');

  // Reuse one modal instance
  const modalInstance = new bootstrap.Modal(modalEl);

  galleryImgs.forEach(img => {
    img.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'), 10);

      // Remove 'active' from all carousel items and set clicked slide active
      carouselEl.querySelectorAll('.carousel-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });

      // Show the modal
      modalInstance.show();
    });
  });




  // Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Combined Hover and Click Hamburger Menu
  document.querySelectorAll(".nav-subcontainer1-right-hamburger").forEach(container => {
    const dropdownMenu = container.querySelector(".dropdown");

    // This check prevents errors if the element doesn't exist on a page
    if (!dropdownMenu) {
      return;
    }

    // --- HOVER and DE-HOVER ---
    container.addEventListener("mouseenter", () => {
      dropdownMenu.classList.add("active");
    });

    container.addEventListener("mouseleave", () => {
      if (!dropdownMenu.classList.contains("pinned")) {
        dropdownMenu.classList.remove("active");
      }
    });

    // --- CLICK and RE-CLICK ---
    container.addEventListener("click", () => {
      const isPinned = dropdownMenu.classList.toggle("pinned");
      if (isPinned) {
        dropdownMenu.classList.add("active");
      } else {
        dropdownMenu.classList.remove("active");
      }
    });
  });

});