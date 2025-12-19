document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navFlex = document.querySelector('.nav_flex');

  menuToggle.addEventListener('click', function() {
    navFlex.classList.toggle('active');
    
    // Анимация бургер-иконки
    const bars = menuToggle.querySelectorAll('.bar');
    bars.forEach(bar => {
      bar.classList.toggle('change');
    });
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll('.nav_link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navFlex.classList.remove('active');
      
      // Удаление анимации бургер-иконки
      const bars = menuToggle.querySelectorAll('.bar');
      bars.forEach(bar => {
        bar.classList.remove('change');
      });
    });
  });
});