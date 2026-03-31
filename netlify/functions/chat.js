import OpenAI from "openai";

// 🔹 OpenAI API Key aus Netlify Environment Variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function handler(event, context) {
  try {
    // Nur POST-Anfragen zulassen
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    // JSON aus Request-Body parsen
    const { messages } = JSON.parse(event.body);

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-5.2",
      messages,
      max_completion_tokens: 700
    });

    return {
      statusCode: 200,
      body: JSON.stringify(completion.choices[0].message)
    };
  } catch (err) {
    console.error("OpenAI error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "OpenAI API error" })
    };
  }
}