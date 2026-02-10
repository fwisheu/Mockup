// ==========================
// Study-Kontext
// ==========================
const { user_id, session_id, condition, session_start } = window.STUDY;

const chatContainer = document.getElementById("chat-container");
const inputField = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const hotelContainer = document.getElementById("llm-hotels");

// ==========================
// Fetch mit Timeout
// ==========================
function fetchWithTimeout(url, options, timeout = 15000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    )
  ]);
}

// ==========================
// API-URL dynamisch setzen
// ==========================
const API_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? "http://localhost:3000/api/chat"
  : "/.netlify/functions/chat";

// ==========================
// LLM System Prompt
// ==========================
const SYSTEM_PROMPT = `
You are a hotel selection assistant in a scientific study.

YOUR TASKS:
1. Ask the user the following questions, one after another:
   - preferred price range
   - preferred hotel star category
   - minimum acceptable guest rating

2. Ask ONLY ONE question at a time.
3. Briefly acknowledge the user's previous answer before asking the next question.
4. Do NOT ask any additional questions.
5. After all three answers are collected:
   - Select EXACTLY 3 hotels from the provided hotel list
   - The selection should plausibly match the user's preferences
   - Perfect optimization is NOT required

6. Then respond using exclusively valid JSON in the following format:

{
  "recommendations": [
    { "name": "...", "stars": 4, "rating": 8.6, "price": 120, "image": "..." },
    ...
  ]
}

IMPORTANT:
- No explanations
- No comments
- No text outside the specified messages
`;

// ==========================
// Chatnachrichten Array
// ==========================
let messages = [
  { role: "system", content: SYSTEM_PROMPT },
  { role: "system", content: "Hier ist die Hotelliste:\n" + JSON.stringify(HOTELS) },
  { role: "assistant", content: "That sounds like a great idea! Vancouver is a great place to stay. Let me help you find the perfect hotel. Should we start?" }
];

// ==========================
// Chatfunktionen
// ==========================
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `chat-msg ${sender}`;
  div.textContent = text;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTypingBubble() {
  const div = document.createElement("div");
  div.className = "chat-msg ai";
  div.id = "typing-indicator";
  div.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingBubble() {
  const el = document.getElementById("typing-indicator");
  if (el) el.remove();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================
// LLM API-Call mit Retry
// ==========================
async function callLLM(retry = true) {
  showTypingBubble();

  try {
    await delay(500 + Math.random() * 600);

    const res = await fetchWithTimeout(
      API_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages })
      },
      15000
    );

    if (!res.ok) {
      throw new Error(`API error ${res.status}`);
    }

    const data = await res.json();

    if (!data || typeof data.content !== "string") {
      throw new Error("Invalid API response");
    }

    return data.content;

  } catch (err) {
    console.error("LLM failed:", err);

    // One Retry
    if (retry) {
      console.warn("Retrying once...");
      return await callLLM(false);
    }

    return "__LLM_ERROR__";

  } finally {
    removeTypingBubble();
  }
}

// ==========================
// User-Input
// ==========================
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});

sendBtn.addEventListener("click", handleSend);

async function handleSend() {
  if (!inputField.value.trim()) return;

  const userText = inputField.value.trim();
  inputField.value = "";

  addMessage(userText, "user");
  messages.push({ role: "user", content: userText });

  // Log User-Message
  fetch("/.netlify/functions/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "chat_messages",
      data: {
        session_id,
        role: "user",
        message_length: userText.length,
        timestamp: new Date().toISOString()
      }
    })
  });

  inputField.disabled = true;
  sendBtn.disabled = true;

  const reply = await callLLM();

  if (reply === "__LLM_ERROR__") {
    addMessage("Sorry, something went wrong on my side. Please try again.", "ai");
    inputField.disabled = false;
    sendBtn.disabled = false;
    inputField.focus();
    return;
  }

  messages.push({ role: "assistant", content: reply });

  // Log AI-Message
  fetch("/.netlify/functions/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "chat_messages",
      data: {
        session_id,
        role: "assistant",
        message_length: reply.length,
        timestamp: new Date().toISOString()
      }
    })
  });

  inputField.disabled = false;
  sendBtn.disabled = false;
  inputField.focus();

  // Prüfen, ob LLM JSON zurückgibt
  let parsed;

  try {
    parsed = JSON.parse(reply);
  } catch {
    addMessage(reply, "ai");
    return;
  }

  if (parsed?.recommendations) {
    // Log Start of Decision Phase
    fetch("/.netlify/functions/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "decision_phase_start",
        data: {
          session_id,
          timestamp: new Date().toISOString()
        }
      })
    });

    addMessage(
      "That makes perfect sense! I have now selected the hotels that fit your preferences best. Please select the one you like best!",
      "ai"
    );

    const matchedHotels = parsed.recommendations
      .map(rec => HOTELS.find(h => h.name === rec.name))
      .filter(Boolean);

    renderHotels(matchedHotels);
    logRecommendations(matchedHotels);

    // Log Recommendations (previously only defined)
    fetch("/.netlify/functions/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "recommendations",
        data: {
          session_id,
          recommendation_count: matchedHotels.length,
          recommendation_source: "ai",
          recommendation_order: matchedHotels.map(h => h.id),
          timestamp: new Date().toISOString()
        }
      })
    });

    const inputWrapper = document.querySelector(".chat-input");
    if (inputWrapper) inputWrapper.remove();

  } else {
    addMessage(reply, "ai");
  }
}

// ==========================
// Hotels rendern + Modal öffnen
// ==========================
function renderHotels(hotels) {
  hotelContainer.innerHTML = "";
  hotels.forEach((hotel, index) => {
    hotel.images = hotel.images || {
      cover: hotel.image || "",
      gallery: [hotel.image || "", hotel.image || "", hotel.image || ""]
    };
    const div = document.createElement("div");
    div.className = "hotel-card";
    div.innerHTML = `
      <img src="${hotel.images.cover}" class="hotel-image">
      <div class="hotel-info">
        <div class="hotel-header">
          <div class="hotel-title">${hotel.name}</div>
          <div class="hotel-stars">${"★".repeat(hotel.attributes.stars)}</div>
        </div>
        <div class="hotel-footer">
          <div class="hotel-rating">
            Guest Rating ${hotel.attributes.rating}/10
          </div>
        </div>
      </div>
      <div class="hotel-price">
        €${hotel.attributes.price} per night
      </div>
    `;
    div.addEventListener("click", () => {
      openHotelModal(hotel, () => {
        fetch("/.netlify/functions/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            collection: "decisions",
            data: {
              session_id,
              selected_hotel_id: hotel.id,
              selected_rank: index + 1,
              timestamp: new Date().toISOString()
            }
          })
        });

        // Log End of Session
        fetch("/.netlify/functions/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            collection: "session_end",
            data: {
              session_id,
              end_reason: "hotel_selected",
              timestamp: new Date().toISOString()
            }
          })
        });

        redirectToQualtrics({
          hotel: hotel,
          rank: index + 1,
          startTime: session_start
        });
      });
    });
    hotelContainer.appendChild(div);
  });
  chatContainer.appendChild(hotelContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ==========================
// Start Chat: erste Nachricht anzeigen
// ==========================
addMessage(messages[messages.length - 1].content, "ai");