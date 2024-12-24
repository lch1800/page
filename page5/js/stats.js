// 초기화 함수를 전역 스코프에 선언
function initStats() {
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };
        window.requestAnimationFrame(step);
    }

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement && !numberElement.classList.contains('counted')) {
                    const targetValue = parseInt(numberElement.dataset.target);
                    animateValue(numberElement, 0, targetValue, 2000);
                    numberElement.classList.add('counted');
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1
    });

    // 모든 stat-item을 관찰 대상으로 추가
    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });
}

// DOMContentLoaded는 제거하고 대신 초기화 함수를 export
window.initStats = initStats;