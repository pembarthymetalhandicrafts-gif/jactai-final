module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, requirement, source, package: packageName } = req.body || {};
  if (!name || !phone || !requirement) {
    return res.status(400).json({ error: 'Missing name, phone, or requirement.' });
  }

  const lead = {
    name,
    phone,
    requirement,
    source: source || 'homepage-pricing-section',
    package: packageName || 'Website Development Package',
    createdAt: new Date().toISOString()
  };

  try {
    // Store in your DB provider.
    // Examples:
    // await saveLeadToSupabase(lead)
    // await saveLeadToFirebase(lead)
    // await saveLeadToGoogleSheets(lead)

    await Promise.allSettled([
      sendEmailNotification(lead),
      sendWhatsAppAlert(lead),
      createCrmEntry(lead)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Lead captured successfully. Our team will contact you soon.',
      lead
    });
  } catch (error) {
    console.error('Lead capture failed:', error);
    return res.status(500).json({ error: 'Unable to capture the lead right now.' });
  }
};

async function sendEmailNotification(lead) {
  if (!process.env.LEAD_EMAIL_WEBHOOK_URL) return;

  await fetch(process.env.LEAD_EMAIL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subject: `New website package lead: ${lead.name}`,
      lead
    })
  });
}

async function sendWhatsAppAlert(lead) {
  if (!process.env.WHATSAPP_WEBHOOK_URL) return;

  await fetch(process.env.WHATSAPP_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `New lead for ${lead.package}: ${lead.name} (${lead.phone})`,
      lead
    })
  });
}

async function createCrmEntry(lead) {
  if (!process.env.CRM_WEBHOOK_URL) return;

  await fetch(process.env.CRM_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lead })
  });
}
