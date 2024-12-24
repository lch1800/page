// Intersection Observer for fade-in animation
const observeItems = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.collection-item').forEach(item => {
        observer.observe(item);
    });
};

// Handle button clicks
const initializeButtons = () => {
    document.querySelectorAll('.explore-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your navigation logic here
            const itemTitle = e.target.closest('.collection-item')
                .querySelector('.item-title').textContent;
            console.log(`Viewing details for: ${itemTitle}`);
        });
    });
};

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    observeItems();
    initializeButtons();
});

// Export functions for reuse if needed
export { observeItems, initializeButtons };