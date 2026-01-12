// =========================
// 1. Startzeit messen
// =========================
const startTime = Date.now();


// =========================
// Utility: Shuffle Array
// =========================
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// =========================
// 2. Condition-Info (nur Debug / Pretest)
// =========================
const conditionInfo = document.getElementById("condition-info");
if (conditionInfo) {
  conditionInfo.textContent =
    `AI: ${STUDY.factors.ai ? 1 : 0}, High Price: ${STUDY.factors.hprice ? 1 : 0}`;
}


// =========================
// 3. Hoteldaten laden & randomisieren
// =========================
const hotels = shuffle([...HOTEL_DATA]);


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
function renderHotels(list) {
  const container = document.getElementById("results-list");
  container.innerHTML = ""; // Reset

  list.forEach(hotel => {
    const div = document.createElement("div");
    div.classList.add("hotel-item");

    let html = `
      <span class="hotel-name">${hotel.name}</span>
      <span class="hotel-price">${hotel.price} €</span>
    `;

    if (STUDY.factors.ai) {
      html += `<span class="hotel-ai">🤖 Empfohlen</span>`;
    }

    div.innerHTML = html;

    div.addEventListener("click", () => {
      const duration = Date.now() - startTime;
      redirectToQualtrics(hotel.id, duration);
    });

    container.appendChild(div);
  });
}

const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", () => {
  let sortedHotels = [...hotels];

  if (sortSelect.value === "price-asc") {
    sortedHotels.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "price-desc") {
    sortedHotels.sort((a, b) => b.price - a.price);
  }

  renderHotels(sortedHotels);
});

// Initial render
renderHotels(hotels);


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
