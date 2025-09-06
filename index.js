//SlideShow1 Banner 1
const slideshow1 = document.querySelector(".slideshow1");

// Clone slides for infinite loop
slideshow1.innerHTML += slideshow1.innerHTML;

function checkScroll() {
  const scrollLeft = slideshow1.scrollLeft;
  const maxScroll = slideshow1.scrollWidth / 2;

  // reset instantly when reaching the cloned half
  if (scrollLeft >= maxScroll) {
    slideshow1.style.scrollBehavior = "auto";   // disable smooth
    slideshow1.scrollLeft = 0;                  // jump instantly
    slideshow1.style.scrollBehavior = "smooth"; // re-enable smooth
  }
}

slideshow1.addEventListener("scroll", checkScroll);

// Auto-scroll (smooth between slides)
setInterval(() => {
  slideshow1.scrollLeft += window.innerWidth; // shift by one slide
}, 4000); // every 4s


// Image Tilt Effect
window.onload = function() {
    const imageElement = document.querySelector('.history-image');
    if (imageElement) {
    const handleMouseMove = (e) => {
        let rect = imageElement.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let dx = (x - rect.width / 2) / (rect.width / 2);
        let dy = (y - rect.height / 2) / (rect.height / 2);

        imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
    };

    const handleMouseLeave = () => {
        imageElement.style.transform = "";
    };

    imageElement.addEventListener('mousemove', handleMouseMove);
    imageElement.addEventListener('mouseleave', handleMouseLeave);
    }
}


//Slideshow 2
const slides = [
  {
    img: "Resource/Others/placeholder.png",
    title: "Halba Rebellion (1774–1779)",
    desc: "The Halba tribe of Bastar rose against Maratha rule and local kings, protesting forced labor and heavy taxation. This was one of the earliest tribal uprisings in central India."
  },
  {
    img: "Resource/Others/slide2.png",
    title: "Bhopalpatnam Rebellion (1795)",
    desc: "Tribals of Bhopalpatnam revolted against oppressive rulers and exploitation. The rebellion marked a growing assertion of self-rule in Bastar."
  },
  {
    img: "Resource/Others/slide3.png",
    title: "Tarapur Rebellion (1842–1854)",
    desc: "A decade-long struggle where the people of Tarapur resisted landlords and colonial interference, showing the enduring spirit of tribal resistance."
  },
  {
    img: "Resource/Others/slide3.png",
    title: "Koi Rebellion (1859)",
    desc: "The Koi (Gond) tribe fought against unjust taxes and forced recruitment. Their defiance reflected deep resentment of oppressive governance."
  },
  {
    img: "Resource/Others/slide3.png",
    title: "Lingagiri Rebellion (1856–1860)",
    desc: "Tribals in Lingagiri stood up to landlords and colonial-backed exploiters, defending their land, freedom, and traditions."
  },
  {
    img: "Resource/Others/slide3.png",
    title: "Muria Rebellion (1876)",
    desc: "The Muria tribe of Bastar revolted against bonded labor and suppression of their customs, asserting their identity and resistance to British rule."
  }
];

let index = 0;

const imgEl = document.querySelector(".history-image");
const titleEl = document.querySelector(".history-main-title");
const infoEl = document.querySelector(".history-info");

function showSlide(n) {
  index = (n + slides.length) % slides.length; // wrap around
  imgEl.src = slides[index].img;
  titleEl.textContent = slides[index].title;
  infoEl.textContent = slides[index].desc;
}

document.querySelector(".history-left").addEventListener("click", () => {
  showSlide(index - 1);
});

document.querySelector(".history-right").addEventListener("click", () => {
  showSlide(index + 1);
});

// init
showSlide(index);
