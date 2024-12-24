function initProducts() {
    const products = [
        {
            title: "Premium Product 1",
            description: "Experience unmatched quality with our flagship product. Designed for those who demand excellence.",
            image: "https://via.placeholder.com/1000x600",
            features: [
                "High-quality materials",
                "Premium finish",
                "Lifetime warranty"
            ]
        },
        {
            title: "Luxury Collection",
            description: "Elevate your lifestyle with our luxury collection. Each piece is masterfully crafted to perfection.",
            image: "https://via.placeholder.com/1000x600",
            features: [
                "Handcrafted excellence",
                "Unique design",
                "Premium service included"
            ]
        },
        {
            title: "Elite Series",
            description: "Introducing our elite series, where innovation meets sophistication. Setting new standards in premium quality.",
            image: "https://via.placeholder.com/1000x600",
            features: [
                "Advanced technology",
                "Exclusive features",
                "24/7 support"
            ]
        }
    ];

    let currentIndex = 0;
    let isPlaying = true;
    let slideInterval;

    // 슬라이드 인디케이터 생성
    function createIndicators() {
        const container = document.getElementById('slideIndicators');
        products.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateProduct(currentIndex);
                updateIndicators();
            });
            container.appendChild(indicator);
        });
    }

    // 인디케이터 업데이트
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.className = `indicator ${index === currentIndex ? 'active' : ''}`;
        });
    }

    function updateProduct(index) {
        const productImage = document.getElementById('productImage');
        const productTitle = document.getElementById('productTitle');
        const productDescription = document.getElementById('productDescription');
        const productFeatures = document.getElementById('productFeatures');
        
        if (!productImage || !productTitle || !productDescription || !productFeatures) {
            console.error('Required elements not found');
            return;
        }
        
        productImage.classList.add('fade-out');
        productTitle.parentElement.classList.add('fade-out');
        
        setTimeout(() => {
            productImage.src = products[index].image;
            productTitle.textContent = products[index].title;
            productDescription.textContent = products[index].description;
            
            productFeatures.innerHTML = products[index].features
                .map(feature => `<li>${feature}</li>`)
                .join('');
            
            productImage.classList.remove('fade-out');
            productTitle.parentElement.classList.remove('fade-out');
            
            updateIndicators();
        }, 500);
    }

    // 재생/정지 토글
    function togglePlayPause() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            startAutoRotate();
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            stopAutoRotate();
        }
    }

    // 자동 회전 시작
    function startAutoRotate() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % products.length;
            updateProduct(currentIndex);
        }, 5000);
    }

    // 자동 회전 정지
    function stopAutoRotate() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // 초기화
    function initialize() {
        createIndicators();
        updateProduct(currentIndex);
        startAutoRotate();

        // 재생/정지 버튼 이벤트 리스너
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', togglePlayPause);
        }
    }

    initialize();
}