const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const servicesMenu = document.querySelector('.services-menu');
if (servicesMenu) {
  document.addEventListener('click', (event) => {
    if (!servicesMenu.contains(event.target)) {
      servicesMenu.open = false;
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

if (!document.querySelector('.floating-whatsapp')) {
  const wa = document.createElement('a');
  wa.className = 'floating-whatsapp';
  wa.href = 'https://wa.me/918247463118?text=Hi%20JactAI%2C%20I%20want%20to%20build%20my%20website.';
  wa.textContent = 'WhatsApp';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  document.body.appendChild(wa);
}
