document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    function handleScroll() {
        scrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    // 모바일 메뉴 토글
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 배너 닫기
    const bannerClose = document.querySelector('.banner-close');
    const banner = document.querySelector('.banner');
    if (bannerClose && banner) {
        bannerClose.addEventListener('click', () => {
            banner.classList.add('hidden');
        });
    }

    // 가격 섹션 토글
    const priceToggle = document.getElementById('priceToggle');
    const priceSection = document.getElementById('priceSection');
    if (priceToggle && priceSection) {
        priceToggle.addEventListener('click', () => {
            if (priceSection.classList.contains('hidden')) {
                priceSection.classList.remove('hidden');
                priceToggle.textContent = '가격표 닫기';
            } else {
                priceSection.classList.add('hidden');
                priceToggle.textContent = '가격 확인하기';
            }
        });
    }

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 실행
});