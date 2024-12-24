// 스크립트가 실행되는 시점 확인
console.log('Main banner script loaded');

function initMainBanner() {
    console.log('Initializing main banner');
    const slides = document.querySelectorAll('.main-banner .slide');
    console.log('Found slides:', slides.length);
    
    let currentIndex = 0;

    function showSlide(index) {
        console.log('Showing slide:', index);
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    const prevButton = document.querySelector('.main-banner .prev');
    const nextButton = document.querySelector('.main-banner .next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            showSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        });
    }

    // 초기 슬라이드 표시
    showSlide(currentIndex);
}

// DOM이 완전히 로드된 후 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainBanner);
} else {
    initMainBanner();
}