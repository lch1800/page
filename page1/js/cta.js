// 버튼 클릭 시 애니메이션 효과
function initCta() {
  console.log('CTA 초기화');
  document.querySelectorAll('.cta-primary, .cta-secondary').forEach((button) => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    });
  });
}