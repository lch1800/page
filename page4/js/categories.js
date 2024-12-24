document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');

    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Initialize animations
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Hover effect for mobile
    categoryCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover-active');
        }, { passive: true });

        card.addEventListener('touchend', function() {
            this.classList.remove('hover-active');
        }, { passive: true });
    });

    // Handle category button clicks
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.closest('.category-card')
                .querySelector('h3').textContent;
            
            // Navigate to category page
            console.log(`Navigating to ${category} category`);
            // Implement actual navigation logic here
        });
    });

    // Optional: Image lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('.category-image img');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
});