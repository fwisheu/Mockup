// ==========================
// Filter Categories
// ==========================
const FILTER_CATEGORIES = {
  price_quality: "Price & Quality",
  location: "Location",
  amenities: "Amenities",
  service: "Service & Policies",
  type: "Accommodation"
};

// ==========================
// Filter Definitions
// ==========================
const FILTER_DEFINITIONS = {
  price: {
    label: "Maximum price (USD)",
    subLabel: "Max. price per night",
    category: "price_quality",
    type: "range",
    attribute: "price",
    min: 100,
    max: 400,
    step: 10,
    unit: " USD"
  },

  stars: {
    label: "Star rating",
    subLabel: "Stars",
    category: "price_quality",
    type: "stars",
    attribute: "stars",
    options: [
      { value: "low", label: "3 stars or less" },
      { value: "4", label: "4 stars" },
      { value: "5", label: "5 stars" }
    ]
  },

  minRating: {
    label: "Minimum guest rating",
    subLabel: "Guest rating",
    category: "price_quality",
    type: "select",
    attribute: "rating", 
    options: [
      { value: 7, label: "7.0+ Good" },
      { value: 8, label: "8.0+ Very Good" },
      { value: 9, label: "9.0+ Exceptional" }
    ]
  },

  distance: {
    label: "Distance to city center (mi)",
    subLabel: "Distance to city center",
    category: "location",
    type: "range",
    attribute: "distance",
    min: 0,
    max: 5,
    step: 0.5,
    unit: " miles"
  },

  accommodationType: {
    label: "Accommodation type",
    subLabel: "Type",
    category: "type",
    type: "multi_select",
    attribute: "accommodationType",
    options: [
      { value: "hotel", label: "Hotel" },
      { value: "apartment", label: "Apartment" },
      { value: "guesthouse", label: "Guesthouse" },
      { value: "bnb", label: "Bed & Breakfast" }
    ]
  },

  pool: {
    label: "Pool",
    category: "amenities",
    type: "boolean",
    attribute: "pool"
  },

  wellness: {
    label: "Wellness/Spa",
    category: "amenities",
    type: "boolean",
    attribute: "wellness"
  },

  fitness: {
    label: "Fitness facilities",
    category: "amenities",
    type: "boolean",
    attribute: "fitness"
  },

  aircon: {
    label: "Air conditioning",
    category: "amenities",
    type: "boolean",
    attribute: "aircon"
  },

    breakfast: {
    label: "Breakfast included",
    category: "service",
    type: "boolean",
    attribute: "breakfast"
  },

  freeCancellation: {
    label: "Free cancellation",
    category: "service",
    type: "boolean",
    attribute: "freeCancellation"
  },

  parkingFree: {
    label: "Free parking",
    category: "service",
    type: "boolean",
    attribute: "parkingFree"
  },

  parkingPaid: {
    label: "Paid parking",
    category: "service",
    type: "boolean",
    attribute: "parkingPaid"
  },
};

// ==========================
// Experimental Activation
// ==========================
const ACTIVE_FILTERS_LOW = [
  "price",
  "stars",
  "minRating",
  "distance",
  "accommodationType"
];

const ACTIVE_FILTERS_HIGH = [
  "price",
  "stars",
  "minRating",
  "distance",
  "accommodationType",
  "pool",
  "wellness",
  "fitness",
  "aircon",
  "breakfast",
  "freeCancellation",
  "parkingFree",
  "parkingPaid",
];

const ACTIVE_FILTERS = (window.STUDY.condition === 0 || window.STUDY.condition === 2)
  ? ACTIVE_FILTERS_LOW
  : ACTIVE_FILTERS_HIGH;

// Additional Filter Options may be 24/7 reception, bar, restaurant, pet-friendly, family-friendly, safe, wifi