// -------------------------
// 1. Startzeit messen
// -------------------------
const startTime = Date.now();

// -------------------------
// 2. Condition anzeigen (nur Test!)
// -------------------------
document.getElementById("condition-info").textContent =
  `AI: ${EXP.ai ? 1 : 0}, High Price: ${EXP.hprice ? 1 : 0}`;

// -------------------------
// 3. Basis-Daten (neutral)
// -------------------------
const hotels = [
  { id: "h1", name: "Hotel Alpha", basePrice: 100 },
  { id: "h2", name: "Hotel Beta",  basePrice: 90  },
  { id: "h3", name: "Hotel Gamma", basePrice: 110 }
];

// -------------------------
// 4. Preis-Manipulation
// -------------------------
hotels.forEach(hotel => {
  hotel.price = EXP.hprice
    ? Math.round(hotel.basePrice * 1.3)  // High-Price-Condition
    : hotel.basePrice;                   // Control
});

// -------------------------
// 5. Rendern + AI-Manipulation
// -------------------------
const list = document.getElementById("results-list");

hotels.forEach(hotel => {
  const li = document.createElement("li");

  li.textContent = `${hotel.name} – ${hotel.price} €`;

  // AI-Manipulation
  if (EXP.ai) {
    li.textContent += " 🤖 Empfohlen";
  }

  li.addEventListener("click", () => {
    const duration = Date.now() - startTime;
    redirectToQualtrics(hotel.id, duration);
  });

  list.appendChild(li);
});

// -------------------------
// 6. Redirect zu Qualtrics
// -------------------------
function redirectToQualtrics(choice, time) {

  const qualtricsUrl =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  const redirectUrl =
    `${qualtricsUrl}` +
    `?choice=${choice}` +
    `&time=${time}` +
    `&ai=${EXP.ai ? 1 : 0}` +
    `&hprice=${EXP.hprice ? 1 : 0}`;

  window.location.href = redirectUrl;
}
