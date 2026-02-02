// =========================
// Startzeit (Qualtrics)
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

// Hotels mischen (Reihenfolgeeffekte vermeiden)
const hotels = shuffle([...HOTELS]);

// =========================
// Hotelcards: Rendering
// =========================
function renderHotels(list) {
  const container = document.getElementById("results-list");
  container.innerHTML = "";

  list.forEach((hotel, index) => {
    const card = document.createElement("div");
    card.className = "hotel-card";

    card.innerHTML = `
      <img src="${hotel.images.cover}" class="hotel-image">

      <div class="hotel-info">
        <div class="hotel-header">
          <div class="hotel-title">${hotel.name}</div>
          <div class="hotel-stars">
            ${"★".repeat(hotel.attributes.stars)}
          </div>
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

    // Klick → Modal → Qualtrics
    card.addEventListener("click", () => {
      openHotelModal(hotel, () => {
        redirectToQualtrics({
          hotel: hotel,
          rank: index + 1,
          startTime: startTime
        });
      });
    });

    container.appendChild(card);
  });
}

// =========================
// 5. Filter & Sort (zentral)
// =========================
const maxPriceInput = document.getElementById("max-price");
const priceValue = document.getElementById("price-value");
const starCheckboxes = document.querySelectorAll(".checkbox-group input");
const minRatingSelect = document.getElementById("min-rating");

function applyFilters() {
  let filtered = [...hotels];

  // Max Preis
  if (maxPriceInput?.value) {
    const max = Number(maxPriceInput.value);
    filtered = filtered.filter(
      h => h.attributes.price <= max
    );
  }

  // Sterne
  const activeStars = Array.from(starCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (activeStars.length) {
    filtered = filtered.filter(h => {
      const s = h.attributes.stars;
      if (activeStars.includes("low") && s <= 3) return true;
      if (activeStars.includes("4") && s === 4) return true;
      if (activeStars.includes("5") && s === 5) return true;
      return false;
    });
  }

  // Mindestbewertung
  if (minRatingSelect?.value) {
    filtered = filtered.filter(
      h => h.attributes.rating >= Number(minRatingSelect.value)
    );
  }

  renderHotels(filtered);
}

// =========================
// Listener
// =========================
maxPriceInput?.addEventListener("input", () => {
  priceValue.textContent = `${maxPriceInput.value} €`;
  applyFilters();
});

starCheckboxes.forEach(cb =>
  cb.addEventListener("change", applyFilters)
);

minRatingSelect?.addEventListener("change", applyFilters);

// =========================
// Initialer Render (wichtig!)
// =========================
renderHotels(hotels);