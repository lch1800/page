class CountdownTimer {
    constructor(element, endDate) {
        this.element = element;
        this.endDate = new Date(endDate).getTime();
        this.timeElements = {
            days: element.querySelector('.days'),
            hours: element.querySelector('.hours'),
            minutes: element.querySelector('.minutes'),
            seconds: element.querySelector('.seconds')
        };
        
        this.updateTimer = this.updateTimer.bind(this);
        this.interval = setInterval(this.updateTimer, 1000);
        this.updateTimer();
    }

    updateTimer() {
        const now = new Date().getTime();
        const distance = this.endDate - now;

        if (distance < 0) {
            clearInterval(this.interval);
            Object.values(this.timeElements).forEach(el => el.textContent = '00');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.timeElements.days.textContent = days.toString().padStart(2, '0');
        this.timeElements.hours.textContent = hours.toString().padStart(2, '0');
        this.timeElements.minutes.textContent = minutes.toString().padStart(2, '0');
        this.timeElements.seconds.textContent = seconds.toString().padStart(2, '0');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize timers
    const timerElements = document.querySelectorAll('.offer-timer');
    timerElements.forEach(timer => {
        new CountdownTimer(timer, timer.dataset.end);
    });

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.offer-card').forEach(card => {
        observer.observe(card);
    });

    // Handle shop now buttons
    document.querySelectorAll('.shop-now-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const offerTitle = e.target.closest('.offer-card')
                .querySelector('h3').textContent;
            console.log(`Shopping for: ${offerTitle}`);
            // Add shopping logic here
        });
    });

    // Optional: Add hover animation for touch devices
    const addTouchHoverEffect = (element) => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touch-hover');
        }, { passive: true });

        element.addEventListener('touchend', () => {
            element.classList.remove('touch-hover');
        }, { passive: true });
    };

    document.querySelectorAll('.offer-card').forEach(addTouchHoverEffect);
});