// ==========================
// Kontext
// ==========================
const { user_id, session_id, condition, session_start } = window.STUDY;

const chatContainer = document.getElementById("chat-container");
const inputField = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const hotelContainer = document.getElementById("llm-hotels");

function getRatingLabel(rating) {
  if (rating >= 9.0) return "Exceptional";
  if (rating >= 8.0) return "Very Good";
  if (rating >= 7.0) return "Good";
  return "Pleasant";
}

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
const SYSTEM_PROMPT_LOW = `
You are a friendly hotel recommendation assistant in a scientific study.

YOUR TASK:
Have a natural conversation to understand the user's preferences and recommend hotels.

CONVERSATION FLOW:
1. Welcome the user warmly and ask one opening question about what matters most 
   to them for their stay (price, location, stars, or accommodation type).
2. Ask follow-up questions — one at a time — to clarify:
   - Budget (price range per night in USD)
   - Preferred star category
   - Preferred distance to city center in miles
   - Accommodation type (hotel, apartment, etc.)
3. Briefly acknowledge each answer naturally before the next question.
4. Do NOT ask about amenities like pool, sauna, breakfast, parking or fitness.
5. After collecting enough information:
    - Recommend EXACTLY 3 hotels from the provided hotel list
    - The selection should plausibly match the user's preferences
    - Perfect optimization is NOT required

RECOMMENDATION FORMAT:
Respond with a short friendly sentence followed by valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

IMPORTANT:
- Be conversational, not robotic
- Do not ask more than 4-5 questions total
- No explanations or text after the JSON
`;

const SYSTEM_PROMPT_HIGH = `
You are a friendly hotel recommendation assistant in a scientific study.

YOUR TASK:
Have a natural conversation to understand the user's preferences in detail 
and recommend the best matching hotels.

CONVERSATION FLOW:
1. Welcome the user warmly and ask one opening question about what matters most 
   to them for their stay.
2. Ask follow-up questions — one at a time — to clarify:
   - Budget (price range per night in USD)
   - Preferred star category
   - Minimum acceptable guest rating
   - Preferred distance to city center in miles
   - Accommodation type (hotel, apartment, etc.)
   - Amenities: pool, sauna, fitness facilities, air conditioning
   - Services: breakfast, free cancellation, parking
3. Briefly acknowledge each answer naturally before the next question.
4. After collecting enough information:
    - Recommend EXACTLY 3 hotels from the provided hotel list
    - The selection should plausibly match the user's preferences
    - Perfect optimization is NOT required

RECOMMENDATION FORMAT:
Respond with a short friendly sentence followed by valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

IMPORTANT:
- Be conversational, not robotic
- Do not ask more than 8-9 questions total
- No explanations or text after the JSON
`;

const SYSTEM_PROMPT = window.STUDY.condition === 2
  ? SYSTEM_PROMPT_LOW
  : SYSTEM_PROMPT_HIGH;

// ==========================
// Chatnachrichten Array
// ==========================
let messages = [
  { role: "system", content: SYSTEM_PROMPT },
  { role: "system", content: "Hier ist die Hotelliste:\n" + JSON.stringify(HOTELS) },
  { role: "assistant", content: "Excellent choice - Vancouver is a great place to stay! Let's find the perfect hotel for your city trip. Please let me know when you are ready." }
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
  fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "interactions",
      data: {
        experiment_id: window.STUDY.experiment_id,
        session_id,
        type: "chat_message",
        role: "user",
        message_content: userText,
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
  fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "interactions",
      data: {
        experiment_id: window.STUDY.experiment_id,
        session_id,
        type: "chat_message",
        role: "assistant",
        message_content: reply,
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
    const jsonMatch = reply.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      parsed = JSON.parse(jsonMatch[0]);
    }
  } catch {
    addMessage(reply, "ai");
    return;
  }

  if (parsed?.recommendations) {

    addMessage(
      "Good choice! I have now selected the hotels that fit your preferences best. Please select the one you like best!",
      "ai"
    );

    const matchedHotels = parsed.recommendations
      .map(rec => HOTELS.find(h => h.name === rec.name))
      .filter(Boolean);

    renderHotels(matchedHotels);

    // Log Choice Set
    fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "choice_sets",
        data: {
          experiment_id: window.STUDY.experiment_id,
          session_id,
          condition,
          hotel_order: matchedHotels.map(h => h.id),
          hotel_count: matchedHotels.length,
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
        <div class="hotel-description">${hotel.description || ""}</div>
        <div class="hotel-footer">
          <div class="hotel-rating">
            <span class="rating-badge">${hotel.attributes.rating.toFixed(1)}</span>
            <span class="rating-label">${getRatingLabel(hotel.attributes.rating)}</span>
            <span class="rating-count">${hotel.attributes.reviewCount} reviews</span>
          </div>
        </div>
      </div>
      <div class="hotel-price">
        €${hotel.attributes.price} per night
      </div>
    `;
    div.addEventListener("click", () => {
      hotel.rank = index + 1;
      openHotelModal(hotel, () => {
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

document.getElementById("skip-chat-btn").addEventListener("click", () => {
  const testHotels = HOTELS.slice(0, 3);
  addMessage("Good choice! I have now selected the hotels that fit your preferences best. Please select the one you like best!", "ai");
  renderHotels(testHotels);
  const inputWrapper = document.querySelector(".chat-input");
  if (inputWrapper) inputWrapper.remove();
});

// ==========================
// Start Chat: erste Nachricht anzeigen
// ==========================
addMessage(messages[messages.length - 1].content, "ai");