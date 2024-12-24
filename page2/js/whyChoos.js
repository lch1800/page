// 스크롤 애니메이션
const observeFeatures = () => {
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

    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
};

// 아이콘 호버 효과
const initializeIconEffects = () => {
    document.querySelectorAll('.feature-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
};

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    observeFeatures();
    initializeIconEffects();
});