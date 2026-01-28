// =========================
// 1. Startzeit messen
// =========================
const startTime = Date.now();

// =========================
// Utility: Shuffle
// =========================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =========================
// 2. Debug: Condition Info
// =========================
const conditionInfo = document.getElementById("condition-info");
if (conditionInfo) {
  conditionInfo.textContent =
    `AI: ${STUDY.factors.ai ? 1 : 0}, High Price: ${STUDY.factors.hprice ? 1 : 0}`;
}

// =========================
// 3. Daten laden & manipulieren
// =========================
const hotels = shuffle([...HOTELS]);

hotels.forEach(h => {
  const base = h.price;
  h.price = STUDY.factors.hprice ? Math.round(base * 1.3) : base;
});

// =========================
// 4. Rendering
// =========================
function renderHotels(list) {
  const container = document.getElementById("results-list");
  container.innerHTML = "";

  list.forEach((hotel, index) => {
    const card = document.createElement("div");
    card.classList.add("hotel-card");

    let html = `
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
      <div class="hotel-info">
        <div class="hotel-header">
          <div class="hotel-title">${hotel.name}</div>
          <div class="hotel-stars">${"★".repeat(hotel.stars)}</div>
        </div>
        <div class="hotel-footer">
          <div class="hotel-rating">Bewertung ${hotel.rating.toFixed(1).replace(".", ",")}/10</div>
          ${STUDY.factors.ai ? `<div class="hotel-ai">🤖 Empfohlen</div>` : ""}
        </div>
      </div>
      <div class="hotel-price">${hotel.price} € pro Nacht</div>
    `;


    card.innerHTML = html;


    card.addEventListener("click", () => {
      redirectToQualtrics(hotel.id, Date.now() - startTime, index + 1);
    });

    container.appendChild(card);
  });
}

// =========================
// 5. Filter & Sort (zentral)
// =========================
const sortSelect = document.getElementById("sort-select");
const maxPriceInput = document.getElementById("max-price");
const priceValue = document.getElementById("price-value");
const starCheckboxes = document.querySelectorAll(".checkbox-group input");
const minRatingSelect = document.getElementById("min-rating");

function applyFiltersAndSort() {
  let filtered = [...hotels];

  // Max Preis
  if (maxPriceInput?.value) {
    const max = Number(maxPriceInput.value);
    filtered = filtered.filter(h => h.price <= max);
  }

  // Sterne
  const activeStars = Array.from(starCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (activeStars.length > 0) {
    filtered = filtered.filter(h => {
      if (activeStars.includes("low") && h.stars <= 3) return true;
      if (activeStars.includes("4") && h.stars === 4) return true;
      if (activeStars.includes("5") && h.stars === 5) return true;
      return false;
    });
  }

  // Mindestbewertung
  if (minRatingSelect?.value) {
    filtered = filtered.filter(h => h.rating >= Number(minRatingSelect.value));
  }

  // Sortierung
  if (sortSelect?.value === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect?.value === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderHotels(filtered);
}

// =========================
// 6. Listener
// =========================
sortSelect?.addEventListener("change", applyFiltersAndSort);

maxPriceInput?.addEventListener("input", () => {
  priceValue.textContent = `${maxPriceInput.value} €`;
  applyFiltersAndSort();
});

starCheckboxes.forEach(cb =>
  cb.addEventListener("change", applyFiltersAndSort)
);

minRatingSelect?.addEventListener("change", applyFiltersAndSort);

// =========================
// Initialer Render (wichtig!)
// =========================
renderHotels(hotels);

// =========================
// 7. Redirect Qualtrics
// =========================
function redirectToQualtrics(choice, time, rank) {
  const base =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";
  const sep = base.includes("?") ? "&" : "?";

  window.location.href =
    base + sep +
    `choice=${choice}&time=${time}&rank=${rank}` +
    `&ai=${STUDY.factors.ai ? 1 : 0}` +
    `&hprice=${STUDY.factors.hprice ? 1 : 0}`;
}
