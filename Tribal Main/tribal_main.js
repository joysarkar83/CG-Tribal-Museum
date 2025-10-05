    document.addEventListener('DOMContentLoaded', () => {
      const parallax = document.querySelector('.parallax');
      const content = parallax.querySelector('.parallax-content');

      // Set background image from data attribute
      const imagePath = parallax.getAttribute('data-image');
      if (imagePath) {
        parallax.style.backgroundImage = `url('${imagePath}')`;
      } else {
        console.warn('No data-image attribute found on .parallax element.');
      }

      let currentScroll = 0;
      let targetScroll = 0;
      const ease = 0.5; // easing factor (0 < ease < 1), smaller = smoother/slower

      // Linear interpolation helper
      function lerp(start, end, t) {
        return start * (1 - t) + end * t;
      }

      function animate() {
        targetScroll = window.pageYOffset || document.documentElement.scrollTop;
        currentScroll = lerp(currentScroll, targetScroll, ease);

        // Calculate background position Y (parallax effect)
        // 50% is center, add offset scaled by scroll with a gentle multiplier
        const bgPosY = 50 + currentScroll * 0.25;

        // Apply background position smoothly
        parallax.style.backgroundPosition = `center ${bgPosY}%`;

        // Slight content vertical translate for subtle depth effect
        const contentTranslateY = currentScroll * -0.08;
        content.style.transform = `translateY(${contentTranslateY}px)`;

        requestAnimationFrame(animate);
      }

      animate();
    });