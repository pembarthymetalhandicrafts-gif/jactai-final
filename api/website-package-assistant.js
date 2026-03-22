const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, leadContext = {} } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt is required.' });

  const systemPrompt = `You are JactAI's sales assistant for the Website Development Package.\nPackage price: ₹19,999.\nTagline: Professional AI-Powered Website for Your Business.\nRequired goals: answer clearly, encourage lead capture, and ask for business name, phone, and requirement when useful.\nFeatures: Responsive Mobile + Desktop Design, SEO Optimized Structure, Fast Loading Performance, WhatsApp & Contact Integration, AI Chatbot (ChatGPT / Gemini Ready), Admin Panel (Easy Updates), Free 1-Year Hosting Guidance, Lead Capture Forms.`;

  try {
    const openAIResult = await queryOpenAI(systemPrompt, prompt, leadContext);
    return res.status(200).json({ output: openAIResult, provider: 'OpenAI' });
  } catch (openAIError) {
    console.warn('OpenAI failed, falling back to Gemini:', openAIError.message);
  }

  try {
    const geminiResult = await queryGemini(systemPrompt, prompt, leadContext);
    return res.status(200).json({ output: geminiResult, provider: 'Google Gemini' });
  } catch (geminiError) {
    console.error('Gemini failed:', geminiError);
    return res.status(500).json({ error: 'All AI providers failed.' });
  }
};

async function queryOpenAI(systemPrompt, prompt, leadContext) {
  if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY missing');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.7,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify({ prompt, leadContext }) }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || 'OpenAI request failed');
  return data.choices?.[0]?.message?.content || 'I can help you plan your website package.';
}

async function queryGemini(systemPrompt, prompt, leadContext) {
  if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY missing');

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-1.5-flash' });
  const result = await model.generateContent(`${systemPrompt}\n\nLead context: ${JSON.stringify(leadContext)}\n\nUser prompt: ${prompt}`);
  const response = await result.response;
  return response.text();
}
