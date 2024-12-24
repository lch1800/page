document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animation
    const observeElements = () => {
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

        // Observe media items
        document.querySelectorAll('.media-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            observer.observe(item);
        });

        // Observe award items
        document.querySelectorAll('.award-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            observer.observe(item);
        });
    };

    // Logo hover effects
    const initializeLogoEffects = () => {
        document.querySelectorAll('.media-logo').forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                const img = logo.querySelector('img');
                img.style.transform = 'scale(1.1)';
            });

            logo.addEventListener('mouseleave', () => {
                const img = logo.querySelector('img');
                img.style.transform = 'scale(1)';
            });
        });
    };

    // Initialize
    observeElements();
    initializeLogoEffects();
});