// ==========================
// Hotel Modal – zentral
// ==========================

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
        <h2 id="modal-hotel-name"></h2>
        <p id="modal-hotel-meta"></p>
      </div>

      <div class="modal-actions">
        <button id="select-hotel-btn">Book Now</button>
        <button id="close-hotel-btn">Close</button>
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
  const selectBtn = document.getElementById("select-hotel-btn");
  const closeBtn = document.getElementById("close-hotel-btn");
  const overlay = modal.querySelector(".modal-overlay");

  // Inhalte setzen
  nameEl.textContent = hotel.name;
  metaEl.textContent = `${hotel.attributes.stars} Sterne · Bewertung ${hotel.attributes.rating}/10 · ${hotel.attributes.price} € pro Nacht`;

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
