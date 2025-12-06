        const slidesContainer = document.querySelector('.slides-container');
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;
        let isAnimating = false;

        function updateSlide(targetIndex) {
            if (isAnimating || targetIndex === currentIndex) return;
            isAnimating = true;

            const direction = targetIndex > currentIndex ? 1 : -1;
            const steps = Math.abs(targetIndex - currentIndex);

            let step = 0;
            const animate = () => {
                if (step < steps) {
                    currentIndex += direction;
                    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

                    // Add transition classes for effect
                    slides.forEach((slide, index) => {
                        slide.classList.remove('leaving', 'entering');
                        if (index === currentIndex - direction) {
                            slide.classList.add('leaving');
                        } else if (index === currentIndex) {
                            slide.classList.add('entering');
                        }
                    });

                    dots.forEach(d => d.classList.remove('active'));
                    dots[currentIndex].classList.add('active');

                    step++;
                    setTimeout(animate, 800); // Match transition duration
                } else {
                    // Finalize
                    slides.forEach(slide => slide.classList.remove('leaving', 'entering'));
                    isAnimating = false;
                }
            };
            animate();
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetIndex = parseInt(dot.getAttribute('data-slide'));
                updateSlide(targetIndex);
            });
        });