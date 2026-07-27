
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.service-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;

    cards.forEach(card => {
      card.classList.toggle(
        'hidden',
        selected !== 'all' && card.dataset.category !== selected
      );
    });
  });
});

document.querySelectorAll('.service-btn').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    const message = encodeURIComponent(`Hola Nohely, quiero consultar disponibilidad para el servicio de ${service}.`);
    window.open(`https://wa.me/573184207817?text=${message}`, '_blank', 'noopener');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();
