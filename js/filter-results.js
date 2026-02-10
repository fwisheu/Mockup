const { user_id, session_id, condition, session_start } = window.STUDY;

// =========================
// Globaler Filter-State
// =========================
const filterState = {};

// ==========================
// Default Filter-State definieren
// ==========================
Object.entries(FILTER_DEFINITIONS).forEach(([key, def]) => {
  switch (def.type) {
    case "boolean":
      filterState[key] = false;
      break;
    case "range":
      filterState[key] = def.max ?? 100;  // Default: Max-Wert oder 100
      break;
    case "select":
      filterState[key] = null;
      break;
    case "multi_select":
      filterState[key] = [];
      break;
  }
});

function logFilterChange(filterName, newValue, oldValue) {
  fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "interaction_summary",
      data: {
        session_id,
        filter_name: filterName,
        old_value: oldValue,
        new_value: newValue,
        action: isRemoval(oldValue, newValue) ? "remove" : "set",
        full_state: { ...filterState },
        timestamp: new Date().toISOString()
      }
    })
  });
}

function isRemoval(oldVal, newVal) {
  if (oldVal === true && newVal === false) return true;
  if (Array.isArray(oldVal) && oldVal.length && newVal.length === 0) return true;
  if (oldVal !== null && newVal === null) return true;
  return false;
}

function logChoiceSet(hotels) {
  fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "recommendations",
      data: {
        session_id,
        condition,
        hotel_count: hotels.length,
        hotel_order: hotels.map(h => h.id),
        timestamp: new Date().toISOString()
      }
    })
  });
}

// ==========================
// Filter UI rendern (nur HTML)
// ==========================
function renderFilters() {
  const aside = document.getElementById("filters");

  // Alte Filter (außer Überschrift) entfernen
  aside.querySelectorAll(".filter-group").forEach(el => el.remove());

  // Aktive Filter nach Kategorien gruppieren
  const grouped = {};

  ACTIVE_FILTERS.forEach(key => {
    const def = FILTER_DEFINITIONS[key];
    if (!def) return;

    if (!grouped[def.category]) {
      grouped[def.category] = [];
    }
    grouped[def.category].push({ key, def });
  });

  // Kategorien rendern
  Object.entries(grouped).forEach(([category, filters]) => {
    if (!filters.length) return;

    const group = document.createElement("div");
    group.className = "filter-group";

    group.innerHTML = `<h4>${FILTER_CATEGORIES[category]}</h4>`;

    filters.forEach(({ key, def }) => {
      group.appendChild(renderSingleFilter(key, def));
    });

    aside.appendChild(group);
  });

  const debugBox = document.getElementById("condition-info");
  aside.appendChild(debugBox);
}

function renderSingleFilter(key, def) {
  const fragment = document.createDocumentFragment();
  
  if (def.subLabel) {
    const subheading = document.createElement("div");
    subheading.className = "filter-item-subheading";
    subheading.textContent = def.subLabel;
    fragment.appendChild(subheading);
  }

  const wrapper = document.createElement("div");
  wrapper.className = "filter-item";

  // BOOLEAN
  if (def.type === "boolean") {
    wrapper.innerHTML = `
      <label>
        <input type="checkbox" data-filter="${key}">
        ${def.label}
      </label>
    `;

    wrapper.querySelector("input").addEventListener("change", e => {
      const oldValue = filterState[key];
      filterState[key] = e.target.checked;
      applyFilters();
      logFilterChange(key, filterState[key], oldValue);
    });
  }

  // RANGE (Preis, Distanz)
  else if (def.type === "range") {
    filterState[key] = def.max; // Initialwert
    wrapper.innerHTML = `
      ${def.subLabel ? "" : `<label>${def.label}</label>`}
      <input type="range"
             min="${def.min}"
             max="${def.max}"
             step="${def.step}"
             value="${def.max}"
             data-filter="${key}">
      <span class="range-value">${def.max}${def.unit || ""}</span>
    `;

    const input = wrapper.querySelector("input");
    const value = wrapper.querySelector(".range-value");

    input.addEventListener("input", e => {
      const oldValue = filterState[key];
      filterState[key] = Number(e.target.value);
      value.textContent = e.target.value + (def.unit || "");
      applyFilters();
      logFilterChange(key, filterState[key], oldValue);
    });
  }

  // SELECT
  else if (def.type === "select") {
    wrapper.innerHTML = `
      ${def.subLabel ? "" : `<label>${def.label}</label>`}
      <select data-filter="${key}">
        <option value="">Alle</option>
        ${def.options.map(o =>
          `<option value="${o.value}">${o.label}</option>`
        ).join("")}
      </select>
    `;

    wrapper.querySelector("select").addEventListener("change", e => {
      const oldValue = filterState[key];
      filterState[key] = e.target.value || null;
      applyFilters();
      logFilterChange(key, filterState[key], oldValue);
    });
  }

  // MULTI SELECT (Checkbox-Gruppe)
  else if (def.type === "multi_select") {
    wrapper.innerHTML = `
      ${def.subLabel ? "" : `<label>${def.label}</label>`}
      ${def.options.map(o => `
        <label>
          <input type="checkbox" value="${o.value}">
          ${o.label}
        </label>
      `).join("")}
    `;

    wrapper.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", () => {
        const oldValue = [...filterState[key]];
        filterState[key] = Array.from(
          wrapper.querySelectorAll("input:checked")
        ).map(i => i.value);
        applyFilters();
        logFilterChange(key, filterState[key], oldValue);
      });
    });
  }

  // STARS (Sonderfall)
  else if (def.type === "stars") {
    wrapper.innerHTML = `
      ${def.options.map(o => `
        <label>
          <input type="checkbox" value="${o.value}">
          ${o.label}
        </label>
      `).join("")}
    `;

    wrapper.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", () => {
        const oldValue = [...filterState[key]];
        filterState[key] = Array.from(
          wrapper.querySelectorAll("input:checked")
        ).map(i => i.value);
        applyFilters();
        logFilterChange(key, filterState[key], oldValue);
      });
    });
  }
  fragment.appendChild(wrapper);
  return fragment;
}

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
            Guest Rating ${hotel.attributes.rating}/10
          </div>
        </div>
      </div>

      <div class="hotel-price">
        €${hotel.attributes.price} per night
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
// Filter anwenden
// =========================
function applyFilters() {
  let filtered = [...hotels];

  Object.entries(filterState).forEach(([key, value]) => {
    if (value == null || value === "" || value.length === 0) return;

    const def = FILTER_DEFINITIONS[key];
    if (!def || !def.attribute) return;

    filtered = filtered.filter(hotel => {
      const attr = hotel.attributes[def.attribute];

      // Sicherheitsnetz
      if (attr === undefined) return true;

      // BOOLEAN: nur filtern, wenn aktiv
      if (def.type === "boolean") {
        if (value === true) {
          return attr === true;
        }
        return true;
      }

      // RANGE
      if (def.type === "range") {
        return attr <= value;
      }

      // SELECT (minRating!)
      if (def.type === "select") {
        return attr >= Number(value);
      }

      // MULTI SELECT
      if (def.type === "multi_select") {
        if (!Array.isArray(value) || value.length === 0) return true;
        return value.includes(attr);
      }

      // STARS (special case)
      if (def.type === "stars") {
        if (!Array.isArray(value) || value.length === 0) return true;

        const s = attr;

        return value.some(v => {
          if (v === "low") return s <= 3;
          if (v === "4") return s === 4;
          if (v === "5") return s === 5;
          return false;
        });
      }

      return true;
    });
  });

  renderHotels(filtered);
  logChoiceSet(filtered);
}

// =========================
// Initialer Render (wichtig!)
// =========================
renderFilters();
applyFilters();