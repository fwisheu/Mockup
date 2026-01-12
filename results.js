// =========================
// 1. Startzeit messen
// =========================
const startTime = Date.now();


// =========================
// 2. Condition-Info (nur Debug / Pretest)
// =========================
const conditionInfo = document.getElementById("condition-info");
if (conditionInfo) {
  conditionInfo.textContent =
    `AI: ${STUDY.factors.ai ? 1 : 0}, High Price: ${STUDY.factors.hprice ? 1 : 0}`;
}


// =========================
// 3. Basis-Hoteldaten
// =========================
const hotels = [
  { id: "h1", name: "Hotel Alpha", basePrice: 100 },
  { id: "h2", name: "Hotel Beta",  basePrice: 90  },
  { id: "h3", name: "Hotel Gamma", basePrice: 110 }
];


// =========================
// 4. Preis-Manipulation (hprice)
// =========================
hotels.forEach(hotel => {
  hotel.price = STUDY.factors.hprice
    ? Math.round(hotel.basePrice * 1.3) // High-Price-Condition
    : hotel.basePrice;                  // Control
});


// =========================
// 5. Ergebnisse rendern (ai)
// =========================
const list = document.getElementById("results-list");

hotels.forEach(hotel => {

  const li = document.createElement("li");

  let text = `${hotel.name} – ${hotel.price} €`;

  if (STUDY.factors.ai) {
    text += " 🤖 Empfohlen";
  }

  li.textContent = text;

  li.addEventListener("click", () => {
    const duration = Date.now() - startTime;
    redirectToQualtrics(hotel.id, duration);
  });

  list.appendChild(li);
});


// =========================
// 6. Redirect zu Qualtrics
// =========================
function redirectToQualtrics(choice, time) {

  const qualtricsUrl =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  // Robust gegen ? / & Probleme
  const separator = qualtricsUrl.includes("?") ? "&" : "?";

  const redirectUrl =
    qualtricsUrl +
    separator +
    `choice=${encodeURIComponent(choice)}` +
    `&time=${encodeURIComponent(time)}` +
    `&ai=${STUDY.factors.ai ? 1 : 0}` +
    `&hprice=${STUDY.factors.hprice ? 1 : 0}`;

  window.location.href = redirectUrl;
}
