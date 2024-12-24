document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.getElementById('slideContainer');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlide = 0;
    const totalSlides = 3;

    function updateSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => updateSlide(-1));
    nextButton.addEventListener('click', () => updateSlide(1));
});