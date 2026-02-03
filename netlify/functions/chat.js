import OpenAI from "openai";

export const handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (!process.env.OPENAI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing OpenAI API key" }),
    };
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: body.messages,
      max_tokens: 300,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(completion.choices[0].message),
    };
  } catch (err) {
    console.error("OpenAI error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "OpenAI API error" }),
    };
  }
};
