import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import OpenAI from "openai";

console.log("API KEY:", process.env.OPENAI_API_KEY ? "LOADED" : "MISSING");

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: req.body.messages,
      max_tokens: 300
    });

    res.json(completion.choices[0].message);
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "OpenAI API error" });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
