class MainBanner {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.main_banner .slide');
        this.dots = document.querySelectorAll('.main_banner .nav-dot');
        this.layers = document.querySelectorAll('.main_banner .layer');
        
        this.init();
    }

    init() {
        // 첫 슬라이드 표시
        this.showSlide(0);
        
        // 패럴랙스 효과 설정
        this.setupParallax();
        
        // 이벤트 리스너 설정
        this.setupEventListeners();
        
        // 자동 재생 시작
        this.startAutoplay();
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            this.layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const yPos = -(scrolled * speed);
                layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });

        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            this.layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const xPos = (mouseX - window.innerWidth / 2) * speed / 100;
                const yPos = (mouseY - window.innerHeight / 2) * speed / 100;
                layer.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
            });
        });
    }

    setupEventListeners() {
        // 도트 네비게이션 클릭
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.stopAutoplay();
                this.showSlide(index);
                this.startAutoplay();
            });
        });

        // 호버 시 자동재생 정지
        document.querySelector('.main_banner').addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });

        document.querySelector('.main_banner').addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }

    showSlide(index) {
        // 현재 슬라이드 숨기기
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // 새 슬라이드 표시
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
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