class BestSellersSlider {
    constructor() {
        this.slider = document.getElementById('bestProductsSlider');
        this.slides = Array.from(this.slider.children);
        this.prevBtn = document.getElementById('prevBest');
        this.nextBtn = document.getElementById('nextBest');
        this.currentIndex = 0;
        
        this.init();
    }

    init() {
        this.updateSlidePositions();
        this.setupEventListeners();
    }

    updateSlidePositions() {
        this.slides.forEach((slide, index) => {
            // 모든 위치 클래스 제거
            slide.classList.remove('center', 'left', 'right', 'far-left', 'far-right');
            
            // 현재 슬라이드 위치에 따른 클래스 할당
            const position = this.getPosition(index);
            slide.classList.add(position);
        });
    }

    getPosition(index) {
        const diff = index - this.currentIndex;
        const total = this.slides.length;
        
        // 순환 구조를 위한 보정
        const adjustedDiff = ((diff % total) + total) % total;
        
        if (adjustedDiff === 0) return 'center';
        if (adjustedDiff === 1 || adjustedDiff === -(total-1)) return 'right';
        if (adjustedDiff === -1 || adjustedDiff === (total-1)) return 'left';
        if (adjustedDiff === 2 || adjustedDiff === -(total-2)) return 'far-right';
        return 'far-left';
    }

    moveNext() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlidePositions();
    }

    movePrev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlidePositions();
    }

    setupEventListeners() {
        this.prevBtn?.addEventListener('click', () => this.movePrev());
        this.nextBtn?.addEventListener('click', () => this.moveNext());
        
        // 터치 이벤트
        let touchStartX = 0;
        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        this.slider.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.moveNext();
                else this.movePrev();
            }
        });

        // 자동 슬라이드 (옵션)
        setInterval(() => this.moveNext(), 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BestSellersSlider();
});