// ==========================
// Kontext
// ==========================
const { user_id, session_id, condition, session_start } = window.STUDY;

const chatContainer = document.getElementById("chat-container");
const inputField = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const MAX_USER_MESSAGES = 15;

let userMessageCount = 0;

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
Your task is to assist the user by choosing the best hotels for their trip.
Basic trip information:
1. City trip to Vancouver, Canada.
2. The user is travelling with his or her partner (double room). 
3. The trip lasts from Juli 31 to August 2 (2 nights).
4. The user is American (currency is USD).

IMPORTANT: You are ONLY allowed to use information provided in the basic trip information and the hotel list. 
From the hotel list you are only allowed to access the following attributes: 
name, description, price, stars, rating, reviewCount, distance, accommodationType.
You will have a natural conversation with the user to understand their preferences regarding their accommodation needs.

CONVERSATION STYLE:
1. Be friendly and helpful in your responses.
2. Briefly acknowledge each answer naturally before the next question.
3. You should guide the user so that you can provide the first set of recommendations after no more than 4-5 questions.

After collecting enough information (maximum of 4-5 questions), you recommend the first set of hotels:
    - Recommend EXACTLY 3 hotels from the provided hotel list
    - The selection should plausibly match the user's preferences
    - Perfect optimization is NOT required

RECOMMENDATION FORMAT:
Respond with a short, friendly sentence and tell the user that he can continue the process by clicking on "Book Now" 
or that he can keep chatting to refine the suggestions. Then follow with valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

If the user asks for additional hotel recommendations or wants to adjust his preferences, 
you can ask additional questions for clarification and again recommend EXACTLY 3 new hotels using the valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

IMPORTANT: If the user has sent more than 15 messages, stop the conversation by telling the user that he or she has reached the message limit.
and recommend the 3 best matching hotels based on the information you have collected so far by using the valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}. 
Do not ask any more questions after that.
`;

const SYSTEM_PROMPT_HIGH = `
Your task is to assist the user by choosing the best hotels for their trip.
Basic trip information:
1. City trip to Vancouver, Canada.
2. The user is travelling with his or her partner (double room). 
3. The trip lasts from Juli 31 to August 2 (2 nights).
4. The user is American (currency is USD).

IMPORTANT: You are ONLY allowed to use information provided in the basic trip information and the hotel list.
You will have a natural conversation with the user to understand their preferences regarding their accommodation needs.

CONVERSATION STYLE:
1. Be friendly and helpful in your responses.
2. Briefly acknowledge each answer naturally before the next question.
3. You should guide the user so that you can provide the first set of recommendations after no more than 6-8 questions.

After collecting enough information (maximum of 7-8 questions), you recommend the first set of hotels:
    - Recommend EXACTLY 3 hotels from the provided hotel list
    - The selection should plausibly match the user's preferences
    - Perfect optimization is NOT required

RECOMMENDATION FORMAT:
Respond with a short, friendly sentence and tell the user that he can continue the process by clicking on "Book Now" 
or that he can keep chatting to refine the suggestions. Then follow with valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

If the user asks for additional hotel recommendations or wants to adjust his preferences, 
you can ask additional questions for clarification and again recommend EXACTLY 3 new hotels using the valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}

IMPORTANT: If the user has sent more than 15 messages, stop the conversation by telling the user that he or she has reached the message limit.
and recommend the 3 best matching hotels based on the information you have collected so far by using the valid JSON only:

{
  "recommendations": [
    { "name": "..." },
    ...
  ]
}. 
Do not ask any more questions after that.
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

function closeChatInputIfLimitReached() {
  if (userMessageCount < MAX_USER_MESSAGES) return;

  inputField.disabled = true;
  sendBtn.disabled = true;

  const inputWrapper = document.querySelector(".chat-input");
  if (inputWrapper) inputWrapper.remove();
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
  userMessageCount += 1;

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
    const finalMessage = reply.replace(/\{[\s\S]*\}/, "").trim();

    if (finalMessage) {
      addMessage(finalMessage, "ai");
    }

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

  } else {
    addMessage(reply, "ai");
  }

  closeChatInputIfLimitReached();
}

// ==========================
// Hotels rendern + Modal öffnen
// ==========================
function renderHotels(hotels) {
  const recommendationSet = document.createElement("div");
  recommendationSet.className = "chat-hotels";

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
        $${hotel.attributes.price} per night
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
    recommendationSet.appendChild(div);
  });

  chatContainer.appendChild(recommendationSet);
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
