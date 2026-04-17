// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal, .rl, .rr');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('up'), i * 70);
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
});
