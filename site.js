const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const createConversionStrip = () => {
  const strip = document.createElement('div');
  strip.className = 'conversion-strip';
  strip.innerHTML = `
    <div class='conversion-strip-copy'>
      <strong>Get Your Business Website Starting at ₹19,999</strong>
      <span>Choose your next step: buy now, book a demo, or talk to AI.</span>
    </div>
    <div class='conversion-strip-actions'>
      <a class='button button-primary' href='mailto:hello@jactai.com?subject=Get%20Website%20Now'>Get Website Now</a>
      <a class='button button-secondary' href='mailto:hello@jactai.com?subject=Book%20Free%20Demo'>Book Free Demo</a>
      <a class='button button-tertiary' href='web-development.html#ai-assistant'>Talk to AI</a>
    </div>
  `;
  document.body.appendChild(strip);
};

createConversionStrip();
