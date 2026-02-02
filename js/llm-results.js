const startTime = Date.now();

const chatContainer = document.getElementById("chat-container");
const inputField = document.getElementById("chat-input");
const hotelContainer = document.getElementById("llm-hotels");

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
// LLM API-Aufruf
// ==========================
async function callLLM() {
  showTypingBubble();
  await delay(500 + Math.random() * 700);
  const res = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages })
  });
  const data = await res.json();
  removeTypingBubble();
  return data.content;
}

// ==========================
// User-Input Event
// ==========================
inputField.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter" || !inputField.value.trim()) return;

  const userText = inputField.value.trim();
  inputField.value = "";
  addMessage(userText, "user");
  messages.push({ role: "user", content: userText });

  inputField.disabled = true;
  const reply = await callLLM();
  messages.push({ role: "assistant", content: reply });
  inputField.disabled = false;
  inputField.focus();

  // Prüfen, ob LLM JSON zurückgibt
  try {
    const parsed = JSON.parse(reply);
    if (parsed.recommendations) {
      // Letzte Nachricht vor den Hotels
      addMessage("That makes perfect sense! Based on your preferences, I have now selected the following hotels for you. Please select the one you like best!", "ai");
      const matchedHotels = parsed.recommendations
        .map(rec => HOTELS.find(h => h.name === rec.name))
        .filter(Boolean);
      renderHotels(matchedHotels);
      document.querySelector(".chat-input").remove();
    } else {
      addMessage(reply, "ai");
    }
  } catch {
    addMessage(reply, "ai");
  }
});

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
            Bewertung ${hotel.attributes.rating}/10
          </div>
        </div>
      </div>
      <div class="hotel-price">
        ${hotel.attributes.price} € per night
      </div>
    `;
    div.addEventListener("click", () => {
      openHotelModal(hotel, () => {
        redirectToQualtrics({
          hotel: hotel,
          rank: index + 1,
          startTime: startTime
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