class MainBanner {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.main-banner .slide');
        this.totalSlides = this.slides.length;
        this.progress = document.querySelector('.main-banner .progress');
        this.isAnimating = false;
        
        // 버튼
        this.prevBtn = document.querySelector('.main-banner .prev');
        this.nextBtn = document.querySelector('.main-banner .next');
        
        // 초기화
        this.init();
        
        // 자동 재생
        this.startAutoplay();
    }

    init() {
        // 첫 슬라이드 표시
        this.showSlide(this.currentSlide);
        
        // 이벤트 리스너
        this.prevBtn.addEventListener('click', () => {
            if (!this.isAnimating) this.prevSlide();
        });
        this.nextBtn.addEventListener('click', () => {
            if (!this.isAnimating) this.nextSlide();
        });
        
        // 호버 시 자동재생 정지
        document.querySelector('.main-banner').addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });
        
        document.querySelector('.main-banner').addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }

    showSlide(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // 현재 슬라이드 페이드 아웃
        const currentSlide = document.querySelector('.main-banner .slide.active');
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }
        
        // 새 슬라이드 페이드 인
        setTimeout(() => {
            this.slides[index].classList.add('active');
            this.updateProgress(index);
            this.currentSlide = index;
            
            // 애니메이션 완료
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }, 50);
    }

    updateProgress(index) {
        // 각 슬라이드당 정확히 한 칸씩 이동
        const moveAmount = index * 100;
        this.progress.style.transform = `translateX(${moveAmount}%)`;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(prev);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            if (!this.isAnimating) this.nextSlide();
        }, 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// 배너 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MainBanner();
});