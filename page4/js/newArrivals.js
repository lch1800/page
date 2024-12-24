document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');

    // 퀵뷰 버튼 클릭 이벤트
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.product-card');
            const productInfo = {
                name: card.querySelector('.product-name').textContent,
                category: card.querySelector('.product-category').textContent,
                price: card.querySelector('.current-price').textContent,
                image: card.querySelector('img').src
            };
            showQuickView(productInfo);
        });
    });

    // 상품 카드 hover 효과 최적화 (모바일 대응)
    productCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover');
        }, {passive: true});

        card.addEventListener('touchend', function() {
            this.classList.remove('hover');
        }, {passive: true});
    });

    // 인터섹션 옵저버를 사용한 애니메이션
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // 퀵뷰 모달 표시 함수
    function showQuickView(productInfo) {
        // 퀵뷰 모달 구현
        console.log('Quick View:', productInfo);
        // 실제 구현시 모달 UI 추가 필요
    }

    // View More 버튼 클릭 이벤트
    const viewMoreBtn = document.querySelector('.view-more-btn');
    viewMoreBtn?.addEventListener('click', () => {
        // 더보기 기능 구현
        console.log('View more clicked');
        // 실제 구현시 페이지 이동 또는 추가 상품 로드 로직 필요
    });
});