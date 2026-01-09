// Startzeit messen
const startTime = Date.now();

// Condition aus URL lesen
const params = new URLSearchParams(window.location.search);
const condition = params.get("condition") || "control";

document.getElementById("condition-info").textContent =
  "Condition: " + condition;

// Dummy-Ergebnisse
const results = [
  { id: "h1", name: "Hotel Alpha", price: 120 },
  { id: "h2", name: "Hotel Beta", price: 95 },
  { id: "h3", name: "Hotel Gamma", price: 140 }
];

// Ergebnisse rendern
const list = document.getElementById("results-list");

results.forEach(hotel => {
  const li = document.createElement("li");
  li.textContent = `${hotel.name} – ${hotel.price} €`;
  li.dataset.id = hotel.id;

  li.addEventListener("click", () => {
    alert(
      `Auswahl: ${hotel.id}\nCondition: ${condition}`
    );
  });

  list.appendChild(li);
});

// Weiter-Button (später Qualtrics)
document.getElementById("continue-btn").addEventListener("click", () => {
  alert("Weiter zur Umfrage");
});
