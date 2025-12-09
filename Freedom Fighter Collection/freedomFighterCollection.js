(function () {
    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".card");
    const overlay = document.querySelector(".modal-overlay");
    const modal = document.querySelector(".modal");
    const modalIcon = document.querySelector(".modal-icon");
    const modalTitle = document.querySelector("#modal-title");
    const modalText = document.querySelector(".modal-text");
    const closeBtn = document.querySelector(".modal-close");

    function openModal(card) {
        const img = card.querySelector(".card-top img, img");
        const icon = card.querySelector(".icon");
        modalIcon.innerHTML = "";
        if (img && img.src) {
            const copy = img.cloneNode(false);
            copy.removeAttribute("width");
            copy.removeAttribute("height");
            copy.alt = img.alt || card.querySelector(".card-title")?.textContent || "";
            modalIcon.appendChild(copy);
        } else if (icon) {
            modalIcon.innerHTML = icon.innerHTML;
        }
        modalTitle.textContent = card.querySelector(".card-title")?.textContent || "";
        const fullText =
            card.dataset.text ||
            card.querySelector(".card-text-full")?.textContent?.trim() ||
            card.querySelector(".card-text")?.dataset.full ||
            card.querySelector(".card-text")?.textContent ||
            "";
        modalText.textContent = fullText;
        const meta = {
            origin: card.dataset.origin || "",
            age: card.dataset.age || "",
            materials: card.dataset.materials || "",
            category: card.dataset.category || card.getAttribute("data-categories") || "",
        };
        document.querySelectorAll(".meta-value").forEach(el => {
            const field = el.getAttribute("data-field");
            el.textContent = meta[field] || "";
        });
        overlay.hidden = false;
        modal.hidden = false;
        const sbw = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.setProperty("--sbw", sbw + "px");
        document.body.classList.add("lock-scroll");
    }

    function closeModal() {
        overlay.hidden = true;
        modal.hidden = true;
        document.body.classList.remove("lock-scroll");
        document.body.style.removeProperty("--sbw");
    }

    function applyFilter(filter) {
        cards.forEach(card => {
            const cats = (card.getAttribute("data-categories") || "")
                .split(",")
                .map(s => s.trim().toLowerCase());

            const show = filter === "all" || cats.includes(filter.toLowerCase());
            card.classList.toggle("hidden", !show);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            applyFilter(tab.dataset.filter || "all");
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => openModal(card));
    });
    overlay?.addEventListener("click", closeModal);
    closeBtn?.addEventListener("click", closeModal);
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    // Initial
    applyFilter("all");
})();
