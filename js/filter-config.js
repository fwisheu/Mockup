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
    label: "Maximum price (€)",
    subLabel: "Price per night",
    category: "price_quality",
    type: "range",
    attribute: "price",
    min: 50,
    max: 150,
    step: 5,
    unit: " €"
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
      { value: 7, label: "7.0+" },
      { value: 8, label: "8.0+" },
      { value: 9, label: "9.0+" }
    ]
  },

  distance: {
    label: "Distance to city center (km)",
    subLabel: "Distance to city center",
    category: "location",
    type: "range",
    attribute: "distance",
    min: 0,
    max: 5,
    step: 0.5,
    unit: " km"
  },

  pool: {
    label: "Pool",
    category: "amenities",
    type: "boolean",
    attribute: "pool"
  },

  sauna: {
    label: "Sauna",
    category: "amenities",
    type: "boolean",
    attribute: "sauna"
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

  accommodationType: {
    label: "Accommodation type",
    subLabel: "Type",
    category: "type",
    type: "multi_select",
    attribute: "accommodationType",
    options: [
      { value: "hotel", label: "Hotel" },
      { value: "apartment", label: "Apartment" },
      { value: "holiday_home", label: "Holiday home" },
      { value: "bnb", label: "Bed & Breakfast" }
    ]
  }
};

// ==========================
// Experimental Activation
// ==========================
const ACTIVE_FILTERS = [
  "price",
  "stars",
  "minRating",
  "distance",
  "pool",
  "sauna",
  "fitness",
  "aircon",
  "breakfast",
  "freeCancellation",
  "parkingFree",
  "parkingPaid",
  "accommodationType"
];
