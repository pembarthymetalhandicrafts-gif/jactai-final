const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const addFloatingWhatsapp = () => {
  if (document.querySelector('.floating-whatsapp')) return;
  const button = document.createElement('a');
  button.className = 'floating-whatsapp';
  button.href = 'https://wa.me/918247463118?text=Hello%2C%20I%20want%20to%20build%20a%20website';
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.innerHTML = "<span class='whatsapp-icon'>💬</span><span class='whatsapp-copy'><strong>WhatsApp Now</strong><span>Quick response from JactAI</span></span>";
  document.body.appendChild(button);
};

addFloatingWhatsapp();
