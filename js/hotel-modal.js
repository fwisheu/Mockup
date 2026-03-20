// ==========================
// Hotel Modal – zentral
// ==========================
function getRatingLabel(rating) {
  if (rating >= 9.0) return "Exceptional";
  if (rating >= 8.0) return "Very Good";
  if (rating >= 7.0) return "Good";
  return "Pleasant";
}

// Modal-HTML einmalig erzeugen
(function createHotelModal() {
  const modal = document.createElement("div");
  modal.id = "hotel-modal";
  modal.className = "hotel-modal";

  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">

      <img id="modal-main-image" class="modal-main-image" />
      <div class="modal-gallery"></div>

      <div class="modal-details">

        <div class="modal-card-header">
          <div class="hotel-title" id="modal-hotel-name"></div>
          <div class="hotel-stars" id="modal-hotel-stars"></div>
        </div>

        <p id="modal-hotel-description"></p>

        <div class="modal-card-footer">
          <div id="modal-hotel-rating" class="hotel-rating"></div>
          <div id="modal-hotel-price" class="hotel-price"></div>
        </div>

        <hr class="modal-divider">
        <div id="modal-hotel-attributes"></div>
        <hr class="modal-divider">

      </div>

      <div class="modal-actions">
        <button id="close-hotel-btn">Close</button>
        <button id="select-hotel-btn">Book Now</button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);
})();

// ==========================
// Modal öffnen
// ==========================
function openHotelModal(hotel, onSelect) {
  const modal = document.getElementById("hotel-modal");
  const mainImage = document.getElementById("modal-main-image");
  const gallery = modal.querySelector(".modal-gallery");
  const nameEl = document.getElementById("modal-hotel-name");
  const metaEl = document.getElementById("modal-hotel-meta");
  const descEl = document.getElementById("modal-hotel-description");
  const attrsEl = document.getElementById("modal-hotel-attributes");
  const selectBtn = document.getElementById("select-hotel-btn");
  const closeBtn = document.getElementById("close-hotel-btn");
  const overlay = modal.querySelector(".modal-overlay");

  // Inhalte setzen
  document.getElementById("modal-hotel-name").innerHTML = `
  ${hotel.name} <span class="hotel-stars">${"★".repeat(hotel.attributes.stars)}</span>
  `;
  document.getElementById("modal-hotel-rating").innerHTML = `
    <span class="rating-badge">${hotel.attributes.rating.toFixed(1)}</span>
    <span class="rating-label">${getRatingLabel(hotel.attributes.rating)}</span>
    <span class="rating-count">${hotel.attributes.reviewCount} reviews</span>
  `;
  const priceEl = document.getElementById("modal-hotel-price");
  priceEl.textContent = `$${hotel.attributes.price} per night`;
  priceEl.className = "modal-price";
  descEl.textContent = hotel.description || "";
  // Beschreibung
  descEl.textContent = hotel.description || "";

  // Attribute dynamisch aus ACTIVE_FILTERS
  attrsEl.innerHTML = "";

  const ATTR_LABELS = {
    breakfast: "Breakfast included",
    pool: "Pool",
    wellness: "Wellness/Spa",
    fitness: "Fitness facilities",
    aircon: "Air conditioning",
    freeCancellation: "Free cancellation",
    parkingFree: "Free parking",
    parkingPaid: "Paid parking available",
    distance: "Distance to city centre",
    accommodationType: "Accommodation type"
  };

  const TYPE_LABELS = {
    hotel: "Hotel",
    apartment: "Apartment",
    holiday_home: "Holiday home",
    guesthouse: "Guesthouse",
    bnb: "Bed & Breakfast"
  };

  // Nur Filter anzeigen die nicht schon in meta stehen (price, stars, minRating)
  const SKIP = ["price", "stars", "minRating"];

  (typeof ACTIVE_FILTERS !== "undefined" ? ACTIVE_FILTERS : [])
    .filter(key => !SKIP.includes(key))
    .forEach(key => {
      const label = ATTR_LABELS[key];
      const val = hotel.attributes[key];
      if (!label || val === undefined) return;

      const row = document.createElement("div");
      row.className = "modal-attr-row";

      let display;
      if (typeof val === "boolean") {
        display = val ? "✓" : "✗";
        row.classList.add(val ? "attr-yes" : "attr-no");
      } else if (key === "distance") {
        display = `${val} miles`;
      } else if (key === "accommodationType") {
        display = TYPE_LABELS[val] || val;
      } else {
        display = val;
      }

      row.innerHTML = `<span class="attr-label">${label}</span><span class="attr-value">${display}</span>`;
      attrsEl.appendChild(row);
    });

  // Hauptbild
  const cover =
    hotel.images?.cover || hotel.image || "";
  mainImage.src = cover;

  // Galerie
  gallery.innerHTML = "";
  const images =
    hotel.images?.gallery?.length
      ? hotel.images.gallery
      : [cover];

  images.forEach((src) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "modal-thumbnail";

    thumb.addEventListener("click", () => {
      mainImage.src = src;
    });

    gallery.appendChild(thumb);
  });

  // Button-Handler
  selectBtn.onclick = () => {
    const sessionEnd = new Date().toISOString();
    const timeToDecision = Date.now() - window.STUDY.session_start;

    fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "sessions",
        operation: "update",
        filter: { session_id: window.STUDY.session_id },
        data: {
          session_end: sessionEnd,
          time_to_decision: timeToDecision,
          selected_hotel_id: hotel.id,
          selected_rank: hotel.rank,
          active_filter_count: window.STUDY.condition === 0 ? ACTIVE_FILTERS.length : null,
          final_filter_state: window.STUDY.condition === 0 ? { ...filterState } : null
        }
      })
    });

    closeHotelModal();
    if (typeof onSelect === "function") {
      onSelect();
    }
  };

  closeBtn.onclick = closeHotelModal;
  overlay.onclick = closeHotelModal;

  // Anzeigen
  modal.classList.add("open");
}

// ==========================
// Modal schließen
// ==========================
function closeHotelModal() {
  const modal = document.getElementById("hotel-modal");
  modal.classList.remove("open");
}
