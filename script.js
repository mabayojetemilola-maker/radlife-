// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function closeMenu() {
  if (hamburger) hamburger.classList.remove('active');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}
if (overlay) overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', closeMenu));

// FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Hero Slider
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      clearInterval(timer);
      timer = setInterval(next, 5000);
    });
  });

  timer = setInterval(next, 5000);
})();
