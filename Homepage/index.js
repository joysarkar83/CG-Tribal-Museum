//SlideShow1 Banner 1
const slideshow1 = document.querySelector(".slideshow1");
slideshow1.innerHTML += slideshow1.innerHTML;
function checkScroll() {
  const scrollLeft = slideshow1.scrollLeft;
  const maxScroll = slideshow1.scrollWidth / 2;
  if (scrollLeft >= maxScroll) {
    slideshow1.style.scrollBehavior = "auto";
    slideshow1.scrollLeft = 0;
    slideshow1.style.scrollBehavior = "smooth";
  }
}
slideshow1.addEventListener("scroll", checkScroll);
setInterval(() => {
  slideshow1.scrollLeft += window.innerWidth;
}, 4000);



// Hide Hamburger
const hamburgerBtn = document.querySelector(".nav-subcontainer1-right-hamburger img");
const hamburgerMenu = document.querySelector(".nav-subcontainer1-right-hamburger .dropdown");

hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  hamburgerMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && e.target !== hamburgerBtn) {
    hamburgerMenu.classList.remove("active");
  }
});



// Image Tilt Effect
window.onload = function () {
  const cards = document.querySelectorAll('.impact-card, .leader-card, .faq-tab');
  cards.forEach((card) => {
    const handleMouseMove = (e) => {
      let rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let dx = (x - rect.width / 2) / (rect.width / 2);
      let dy = (y - rect.height / 2) / (rect.height / 2);
      card.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
    };
    const handleMouseLeave = () => {
      card.style.transform = "";
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
};



//Impact Numbers
function animateCounter(el, target, duration = 2000) {
  let start = null;
  const showPlus = el.dataset.plus === "true";

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value + (showPlus ? "+" : "");
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".impact-card-num").forEach(num => {
        const target = parseInt(num.dataset.target, 10);
        animateCounter(num, target, 1000); // 2s duration for all
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
observer.observe(document.querySelector(".impact"));