window.addEventListener('DOMContentLoaded', (event) => {
    const burgerIcon = document.querySelector('.burger-icon');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay-bg');
    
    burgerIcon.addEventListener('click', () => {
      sidebar.classList.add('menu-active');
      overlay.classList.add('menu-active');
    });
    
  
    const closeIcon = document.querySelector('.close-icon')
    closeIcon.addEventListener('click', () => {
      sidebar.classList.remove('menu-active');
      overlay.classList.remove('menu-active');
    });
  });