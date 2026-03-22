const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealElements = () => document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.16 });

  revealElements().forEach((el) => observer.observe(el));

  window.observeReveal = (node) => {
    if (node) observer.observe(node);
  };
} else {
  revealElements().forEach((el) => el.classList.add('is-visible'));
  window.observeReveal = (node) => node?.classList.add('is-visible');
}

const whatsappNumber = '918247463118';
const whatsappMessage = 'Hello, I want to build a website';
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

const createFloatingWhatsApp = () => {
  const button = document.createElement('a');
  button.className = 'floating-whatsapp';
  button.href = whatsappHref;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', 'Chat with JactAI on WhatsApp');
  button.innerHTML = `
    <span class='whatsapp-icon' aria-hidden='true'>
      <svg viewBox='0 0 32 32' width='24' height='24' fill='currentColor'><path d='M19.11 17.29c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.11 2.82.14.18 1.9 2.9 4.61 4.06.64.27 1.15.43 1.54.55.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z'/><path d='M16.02 3.2c-7.06 0-12.78 5.71-12.78 12.75 0 2.25.59 4.44 1.71 6.37L3.12 28.8l6.68-1.75a12.8 12.8 0 0 0 6.22 1.59h.01c7.06 0 12.78-5.71 12.78-12.75S23.09 3.2 16.02 3.2Zm0 23.34h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.58 10.58 0 0 1-1.63-5.68c0-5.87 4.77-10.65 10.63-10.65 2.83 0 5.49 1.1 7.49 3.11a10.54 10.54 0 0 1 3.11 7.53c0 5.87-4.77 10.64-10.64 10.64Z'/></svg>
    </span>
    <span class='whatsapp-copy'>
      <strong>WhatsApp JactAI</strong>
      <span>Hello, I want to build a website</span>
    </span>
  `;
  document.body.appendChild(button);
};

const enhanceServiceCards = () => {
  document.querySelectorAll('.service-card').forEach((card, index) => {
    if (card.querySelector('.card-cta-row')) return;
    const cardActions = document.createElement('div');
    cardActions.className = 'card-cta-row';
    const primaryHref = index === 0 ? 'web-development.html' : index === 1 ? 'chatbots.html' : 'business.html';
    cardActions.innerHTML = `
      <a class='button button-primary button-inline' href='${primaryHref}'>Explore service</a>
      <a class='button button-secondary button-inline' href='mailto:hello@jactai.com?subject=Book%20Free%20Demo'>Book demo</a>
    `;
    card.appendChild(cardActions);
  });
};

const createServicesSection = () => {
  if (document.querySelector('[data-shared-services]') || document.body.dataset.page === 'index') return;
  const section = document.createElement('section');
  section.className = 'section section-alt reveal';
  section.setAttribute('data-shared-services', 'true');
  section.innerHTML = `
    <div class='container'>
      <div class='services-showcase'>
        <div class='section-heading'>
          <span class='eyebrow'>Restored service stack</span>
          <h2>Website development leads the offer, supported by AI and digital operations.</h2>
          <p>Every page now reconnects visitors to the three core offers that were previously reduced: website development, AI automation, and business digital solutions.</p>
        </div>
        <div class='card-grid'>
          <article class='service-card feature-icon-card'><span class='card-icon' aria-hidden='true'>🌐</span><span class='card-kicker'>Primary</span><h3>Website Development</h3><p>Conversion-focused websites, landing pages, and service funnels designed to look premium and turn visits into inquiries.</p><div class='card-note'>Lead offer restored with stronger hierarchy, pricing context, and premium UI treatment.</div></article>
          <article class='service-card feature-icon-card'><span class='card-icon' aria-hidden='true'>🤖</span><span class='card-kicker'>Automation</span><h3>AI Automation</h3><p>Deploy intelligent chat, lead qualification, FAQ handling, and follow-up flows across your website and WhatsApp.</p><div class='card-note'>Built to support 24/7 engagement without making the site feel product-led only.</div></article>
          <article class='service-card feature-icon-card'><span class='card-icon' aria-hidden='true'>🧩</span><span class='card-kicker'>Growth ops</span><h3>Business Digital Solutions</h3><p>Integrate forms, CRM, notifications, and digital workflows so new leads move quickly from contact to action.</p><div class='card-note'>A richer services section with hover depth and repeated CTA paths.</div></article>
        </div>
      </div>
    </div>
  `;
  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.parentNode.insertBefore(section, footer);
    window.observeReveal(section);
    enhanceServiceCards();
  }
};

const createMapSection = () => {
  if (document.querySelector('[data-shared-map]')) return;
  const section = document.createElement('section');
  section.className = 'section reveal';
  section.setAttribute('data-shared-map', 'true');
  section.innerHTML = `
    <div class='container'>
      <div class='section-heading'>
        <span class='eyebrow'>Visit JactAI</span>
        <h2>Google Maps and contact details are back in the experience.</h2>
        <p>Visitors can now verify the business location, jump straight to directions, and use WhatsApp without hunting through the page.</p>
      </div>
      <div class='map-grid'>
        <article class='map-details'>
          <span class='card-kicker'>Headquarters</span>
          <h3>Pembarthy, Jangaon, Telangana</h3>
          <p class='map-copy'>H NO:13-90/2, Pembarthy, Jangaon, Telangana 506201. Restored as a responsive contact destination with direct call-to-action links.</p>
          <ul class='map-list'>
            <li>Responsive Google Maps embed with lazy loading.</li>
            <li>WhatsApp message starts with: “Hello, I want to build a website”.</li>
            <li>Fast links for directions, phone, and email follow-up.</li>
          </ul>
          <div class='map-actions'>
            <a class='button button-primary' href='https://maps.google.com/?q=H%20NO%3A13-90%2F2%2C%20Pembarthy%2C%20Jangaon%2C%20Telangana%20506201' target='_blank' rel='noopener noreferrer'>Open in Maps</a>
            <a class='button button-secondary' href='tel:+918247463118'>Call +91 8247463118</a>
          </div>
        </article>
        <div class='map-shell'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30424.16116848243!2d79.1350694!3d17.6006198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a332a58b22a07d3%3A0xc0fb1df815c446bd!2sPembarthi%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
            loading='lazy'
            allowfullscreen=''
            referrerpolicy='no-referrer-when-downgrade'
            title='JactAI location on Google Maps'>
          </iframe>
        </div>
      </div>
    </div>
  `;
  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.parentNode.insertBefore(section, footer);
    window.observeReveal(section);
  }
};

createConversionStrip();
createFloatingWhatsApp();
enhanceServiceCards();
createServicesSection();
createMapSection();
