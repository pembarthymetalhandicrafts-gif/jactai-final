const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async (req, res) => {
  // 1. Setup Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { prompt } = req.body;
  if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: "API Key Missing" });

  // 2. THE MASTER LIST: We will try these one by one
  const modelList = [
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-1.0-pro",
    "gemini-pro",
    "gemini-1.5-flash-latest" 
  ];

  // 3. The Loop
  for (const modelName of modelList) {
    try {
      console.log(`Trying model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // If we get here, it worked! Send the answer and EXIT.
      return res.status(200).json({ output: text });

    } catch (error) {
      console.warn(`Model ${modelName} failed: ${error.message}`);
      // If this fails, the loop continues to the next model automatically.
    }
  }

  // 4. If EVERYTHING fails (This shouldn't happen)
  return res.status(500).json({ error: "All AI models failed. Please check API Key permissions." });
};
