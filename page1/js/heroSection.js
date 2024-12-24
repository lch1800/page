  // 버튼 클릭 시 간단한 애니메이션
  document.querySelectorAll('.cta-primary, .cta-secondary').forEach((button) => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    });
  });
