const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

const services = [
  {
    name: 'Website Development',
    price: '₹19,999',
    description: 'Professional business websites'
  },
  {
    name: 'AI Automation',
    description: 'Automate business workflows'
  },
  {
    name: 'Chatbot Development',
    description: 'Conversational AI for websites and WhatsApp'
  }
];

const pricing = {
  currency: 'INR',
  plans: [
    {
      name: 'Website Starter',
      price: '₹19,999',
      description: 'Responsive website with SEO-ready structure and contact integration'
    },
    {
      name: 'AI Growth Suite',
      price: 'Custom',
      description: 'Automation workflows, integrations, and lead routing systems'
    }
  ]
};

const tools = [
  {
    name: 'get_services',
    description: 'Fetch all JactAI services',
    method: 'GET',
    endpoint: '/mcp/services'
  },
  {
    name: 'get_pricing',
    description: 'Fetch pricing plans and package details',
    method: 'GET',
    endpoint: '/mcp/pricing'
  },
  {
    name: 'submit_lead',
    description: 'Submit a lead with name, phone, and requirement',
    method: 'POST',
    endpoint: '/mcp/contact'
  }
];

const leads = [];

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mcpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests. Please try again later.'
  }
});

app.use('/mcp', mcpLimiter);

app.get('/mcp/services', (_req, res) => {
  res.json({ services });
});

app.get('/mcp/pricing', (_req, res) => {
  res.json(pricing);
});

app.post('/mcp/contact', (req, res) => {
  const { name, phone, requirement } = req.body || {};

  if (!name || !phone || !requirement) {
    return res.status(400).json({
      error: 'Validation failed',
      details: 'name, phone, and requirement are required fields.'
    });
  }

  if (String(name).trim().length < 2 || String(requirement).trim().length < 5) {
    return res.status(400).json({
      error: 'Validation failed',
      details: 'Please provide a valid name and requirement.'
    });
  }

  const normalizedPhone = String(phone).replace(/[^\d+]/g, '');
  if (!/^\+?[0-9]{10,15}$/.test(normalizedPhone)) {
    return res.status(400).json({
      error: 'Validation failed',
      details: 'Please provide a valid phone number.'
    });
  }

  const lead = {
    id: leads.length + 1,
    name: String(name).trim(),
    phone: normalizedPhone,
    requirement: String(requirement).trim(),
    createdAt: new Date().toISOString()
  };

  leads.push(lead);

  return res.status(201).json({
    success: true,
    message: 'Lead submitted successfully.',
    lead
  });
});

app.get('/.well-known/mcp.json', (_req, res) => {
  res.json({
    name: 'JactAI MCP',
    description: 'Website and AI services platform',
    tools: tools.map((tool) => tool.name)
  });
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`JactAI MCP server running on http://localhost:${PORT}`);
});
