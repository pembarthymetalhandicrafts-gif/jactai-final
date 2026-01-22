const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async (req, res) => {
  // 1. Allow the website to talk to this server
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. Handle the "Handshake"
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. The Brain Logic
  try {
    const { prompt } = req.body;
    
    // Check if the Key exists
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("API Key is missing in Vercel Settings");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.status(200).json({ output: text });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server Error: " + error.message });
  }
};
