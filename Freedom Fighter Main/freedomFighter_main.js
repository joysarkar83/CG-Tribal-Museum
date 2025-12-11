/* SLIDE DATA */
const slides = [
    {
        img: "/Resource/Freedom-Fighter-Museum-Gallery/0.jpg",
        year: "1830",
        title: "Halba Rebellion",
        text: "The Halba Rebellion (1774–1779) arose from intense power struggles among Bastar’s feudal chiefs. After Duriyav Dev launched a treacherous attack that killed the influential leader Ajmer Singh, the Halba community united in open revolt against the ruling forces. The retaliation was brutal, with many Halbas and their local chiefs reportedly thrown from waterfalls. The uprising eventually drew in both the Marathas and the East India Company, and by 1779 the conflict concluded with firm Maratha control over Bastar."
    },
    {
        img: "/Resource/Freedom-Fighter-Museum-Gallery/1.jpg",
        year: "1910",
        title: "Bhumkal Revolt",
        text: "The Bhumkal Revolt of 1910, known as the Bastar Rebellion, was a major tribal uprising against British rule. Led by the influential Gunda Dhur, the movement brought together several Bastar tribes who resisted exploitative taxes, forced labor, and the loss of forest rights. The revolt spread quickly as tribal warriors attacked colonial posts and briefly disrupted British authority. Although eventually crushed with harsh military force, the Bhumkal Revolt endures as a symbol of tribal unity, identity, and resistance."
    },
    {
        img: "/Resource/Freedom-Fighter-Museum-Gallery/2.jpg",
        year: "1942",
        title: "Quit India Movement",
        text: "In 1942, during the Quit India Movement, tribal communities of present-day Chhattisgarh played a meaningful role in the nationwide struggle against British rule. Inspired by the call for immediate independence, many tribal leaders and villagers organized protests, sheltered freedom fighters, and disrupted colonial administration. Though their participation is less documented than in urban centers, these communities contributed through acts of resistance, refusal of cooperation, and protection of local resources. Their involvement reflects the widespread desire for freedom across all sections of society."
    }
];

let index = 0;

const img = document.getElementById("timeline-img");
const desc = document.getElementById("timeline-desc");
const detail = document.getElementById("timeline-detail");

/* LOAD ONE SLIDE */
function loadSlide(i) {
    const s = slides[i];

    // Fade out animation
    img.style.opacity = 0;
    img.style.transform = "translateY(20px)";
    desc.style.opacity = 0;
    detail.style.opacity = 0;

    setTimeout(() => {
        img.src = s.img;
        desc.textContent = s.desc;

        detail.innerHTML = `
      <h3>${s.year}</h3>
      <h2>${s.title}</h2>
      <p>${s.text}</p>
    `;

        // Fade in animation
        img.style.opacity = 1;
        img.style.transform = "translateY(0)";
        desc.style.opacity = 1;
        detail.style.opacity = 1;
    }, 600);
}

/* AUTO-CYCLE EVERY 4 SECONDS */
setInterval(() => {
    index = (index + 1) % slides.length;
    loadSlide(index);
}, 15000);

/* INITIAL LOAD */
loadSlide(0);