async function loadMcpServicesAndPricing() {
  const serviceName1 = document.getElementById('service-name-1');
  const serviceDescription1 = document.getElementById('service-description-1');
  const serviceName2 = document.getElementById('service-name-2');
  const serviceDescription2 = document.getElementById('service-description-2');
  const starterPrice = document.getElementById('starter-price');

  if (!serviceName1 && !starterPrice) {
    return;
  }

  try {
    const [servicesResponse, pricingResponse] = await Promise.all([
      fetch('/mcp/services'),
      fetch('/mcp/pricing')
    ]);

    if (servicesResponse.ok) {
      const servicesData = await servicesResponse.json();
      const [serviceOne, serviceTwo] = servicesData.services || [];

      if (serviceOne) {
        if (serviceName1) serviceName1.textContent = serviceOne.name;
        if (serviceDescription1) serviceDescription1.textContent = serviceOne.description;
      }

      if (serviceTwo) {
        if (serviceName2) serviceName2.textContent = serviceTwo.name;
        if (serviceDescription2) serviceDescription2.textContent = serviceTwo.description;
      }
    }

    if (pricingResponse.ok) {
      const pricingData = await pricingResponse.json();
      const starterPlan = (pricingData.plans || [])[0];
      if (starterPlan && starterPrice) {
        starterPrice.textContent = starterPlan.price;
      }
    }
  } catch (error) {
    console.error('Unable to load MCP services or pricing:', error);
  }
}

function setupContactFormSubmission() {
  const contactForm = document.getElementById('contact-form');
  const statusElement = document.getElementById('contact-status');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      requirement: formData.get('requirement')
    };

    if (statusElement) {
      statusElement.textContent = 'Submitting...';
    }

    try {
      const response = await fetch('/mcp/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Unable to submit lead.');
      }

      contactForm.reset();
      if (statusElement) {
        statusElement.textContent = data.message || 'Submitted successfully.';
      }
    } catch (error) {
      if (statusElement) {
        statusElement.textContent = error.message;
      }
    }
  });
}

loadMcpServicesAndPricing();
setupContactFormSubmission();
