class MainBanner {
    constructor() {
        this.slider = document.querySelector('.banner-slider');
        this.slides = Array.from(document.querySelectorAll('.banner-item'));
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        
        this.init();
        this.setupEventListeners();
    }

    init() {
        // 초기 슬라이드 위치 설정
        this.updateSlidePositions();
    }

    updateSlidePositions() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('left', 'center', 'right');
            
            if (index === this.currentIndex) {
                slide.classList.add('center');
            } else if (index === this.getPrevIndex()) {
                slide.classList.add('left');
            } else if (index === this.getNextIndex()) {
                slide.classList.add('right');
            }
        });
    }

    getPrevIndex() {
        return (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    }

    getNextIndex() {
        return (this.currentIndex + 1) % this.slideCount;
    }

    moveNext() {
        this.currentIndex = this.getNextIndex();
        this.updateSlidePositions();
    }

    movePrev() {
        this.currentIndex = this.getPrevIndex();
        this.updateSlidePositions();
    }

    setupEventListeners() {
        document.querySelector('.slider-btn.prev').addEventListener('click', () => this.movePrev());
        document.querySelector('.slider-btn.next').addEventListener('click', () => this.moveNext());
        
        // 자동 슬라이드
        setInterval(() => this.moveNext(), 5000);
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MainBanner();
});