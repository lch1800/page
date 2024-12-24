function initHeader() {
    const header = document.querySelector('.header');
    if (!header) {
        console.error('Header element not found');
        return;
    }
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        console.log('Scroll position:', currentScroll);
        
        if (currentScroll > 100) {
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}