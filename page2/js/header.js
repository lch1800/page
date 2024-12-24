function initHeader() {
    const menuBtn = document.querySelector('.header .menu-btn');
    const navMenu = document.querySelector('.header .nav-menu');
    const overlay = document.querySelector('.header .overlay');
    
    if (!menuBtn || !navMenu || !overlay) {
        console.error('Header elements not found');
        return;
    }
    
    // 메뉴 토글 함수
    function toggleMenu() {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // 이벤트 리스너 등록
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    console.log('Header initialized');
}
