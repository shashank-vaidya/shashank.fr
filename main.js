// tiny mobile-menu toggle
const btn = document.getElementById('nav-toggle');
btn?.addEventListener('click', () =>
  document.body.classList.toggle('menu-open'));
