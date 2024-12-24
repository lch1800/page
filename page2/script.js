document.addEventListener('DOMContentLoaded', function() {
    // FAQ 아코디언
    const faqButtons = document.querySelectorAll('#faq button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            // 아코디언 토글
            content.classList.toggle('hidden');
            
            // 화살표 아이콘 회전
            icon.style.transform = content.classList.contains('hidden') 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
            
            // 트랜지션
            icon.style.transition = 'transform 0.3s ease';
        });
    });

    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 애니메이션 적용할 요소들
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});