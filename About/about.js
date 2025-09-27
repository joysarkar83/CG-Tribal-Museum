document.addEventListener("DOMContentLoaded", function () {
  const DURATION_MS = 1000;

  function easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t);
  }

  function animateCounter(el, target, duration) {
    const showPlus = el.dataset.plus === "true" || /\+$/.test(el.textContent.trim());
    let start = null;

    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      let progress = Math.min(elapsed / duration, 1);
      progress = easeOutQuad(progress);
      el.textContent = Math.floor(progress * target) + (showPlus ? "+" : "");
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function resetCounters(section) {
    if (!section) return;
    section.querySelectorAll(".stat-number").forEach(el => {
      const target = el.dataset.target || el.textContent.replace(/\D/g, "");
      el.dataset.target = target;
      const hasPlus = /\+$/.test(el.textContent) || el.dataset.plus === "true";
      el.dataset.plus = hasPlus ? "true" : "false";
      el.textContent = "0" + (hasPlus ? "+" : "");
    });
    section.dataset.animated = "false";
  }

  function runCounters(section) {
    if (!section || section.dataset.animated === "true") return;
    section.querySelectorAll(".stat-number").forEach(el => {
      const target = parseInt(el.dataset.target, 10) || 0;
      animateCounter(el, target, DURATION_MS);
    });
    section.dataset.animated = "true";
  }

  // Scroll-trigger for visible sections (non-tabbed or already displayed)
  function onScrollTrigger() {
    document.querySelectorAll(".museum-stats").forEach(section => {
      if (section.dataset.animated !== "true") {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          runCounters(section);
        }
      }
    });
  }

  // Initial reset for all sections
  document.querySelectorAll(".museum-stats").forEach(resetCounters);

  // Run scroll check on load and scroll
  window.addEventListener("scroll", onScrollTrigger);
  onScrollTrigger();

  // Tab switching logic
  const tabs = document.querySelectorAll(".museum-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const tabId = this.dataset.tab;
      if (!tabId) return;

      // Remove active class from tabs
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      // Hide all content
      document.querySelectorAll(".museum-content").forEach(c => c.classList.remove("active"));

      // Show the corresponding content
      const content = document.getElementById(tabId + "-content");
      if (!content) return;
      content.classList.add("active");

      // Reset and run counters only if section visible
      const statsSection = content.querySelector(".museum-stats");
      if (statsSection) {
        resetCounters(statsSection);
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          runCounters(statsSection);
        }
      }
    });
  });
});
