document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const breakpoint = 768; // mobile breakpoint in px

  if (!menuBtn || !mobileNav) return;

  // Toggle menu on button click
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('open'); // optional for hamburger animation
  });

  // Auto-close mobile menu if window resized above breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > breakpoint && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      menuBtn.classList.remove('open');
    }
  });
});


