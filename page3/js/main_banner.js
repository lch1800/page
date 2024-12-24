class MainBanner {
    constructor() {
        this.currentSet = 0;
        this.gridItems = document.querySelectorAll('.main-banner .grid-item');
        this.dots = document.querySelectorAll('.main-banner .dot');
        this.totalSets = 3; // 전체 세트 수
        
        this.init();
    }

    init() {
        // 도트 클릭 이벤트
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.showSet(index));
        });

        // 자동 재생 시작
        this.startAutoPlay();

        // 호버 시 자동 재생 정지
        document.querySelector('.main-banner').addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });

        document.querySelector('.main-banner').addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }

    showSet(index) {
        // 현재 활성 도트 업데이트
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');

        // 그리드 아이템 애니메이션
        this.gridItems.forEach(item => {
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 300);
        });

        this.currentSet = index;
    }

    nextSet() {
        const next = (this.currentSet + 1) % this.totalSets;
        this.showSet(next);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSet();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// 배너 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MainBanner();
});