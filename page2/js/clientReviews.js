document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('reviewsSlider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.review-card');
    
    let currentIndex = 0;
    const cardWidth = 100 / cards.length;

    // Update active dot
    const updateDots = (index) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    };

    // Slide to specific index
    const slideTo = (index) => {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;
        
        currentIndex = index;
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}%)`;
        updateDots(currentIndex);
    };

    // Event Listeners
    prevButton.addEventListener('click', () => {
        slideTo(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        slideTo(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideTo(index);
        });
    });

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                slideTo(currentIndex + 1);
            } else {
                slideTo(currentIndex - 1);
            }
        }
    };

    // Auto slide (optional)
    let autoSlideInterval;

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            slideTo(currentIndex + 1);
        }, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Initialize
    startAutoSlide();
});