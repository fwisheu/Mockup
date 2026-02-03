// Central hotel data object
const HOTELS = [
  {
    id: "h1",
    name: "Harbourview Hotel Vancouver",
    attributes: {
      price: 100,
      stars: 4,
      rating: 8.4,
      distance: 0.5,
      breakfast: true,
      pool: false,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Harbourview+Hotel",
      gallery: [
        "https://placehold.co/600x400?text=Harbourview+1",
        "https://placehold.co/600x400?text=Harbourview+2",
        "https://placehold.co/600x400?text=Harbourview+3"
      ]
    }
  },

  {
    id: "h2",
    name: "Granville Suites",
    attributes: {
      price: 90,
      stars: 3,
      rating: 9.1,
      distance: 1.2,
      breakfast: true,
      pool: false,
      sauna: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Granville+Suites",
      gallery: [
        "https://placehold.co/600x400?text=Granville+1",
        "https://placehold.co/600x400?text=Granville+2",
        "https://placehold.co/600x400?text=Granville+3"
      ]
    }
  },

  {
    id: "h3",
    name: "Pacific Crown Hotel",
    attributes: {
      price: 110,
      stars: 5,
      rating: 7.8,
      distance: 2.0,
      breakfast: false,
      pool: true,
      sauna: true,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Pacific+Crown",
      gallery: [
        "https://placehold.co/600x400?text=Pacific+1",
        "https://placehold.co/600x400?text=Pacific+2",
        "https://placehold.co/600x400?text=Pacific+3"
      ]
    }
  },

  {
    id: "h4",
    name: "Downtown Skyline Hotel",
    attributes: {
      price: 110,
      stars: 4,
      rating: 8.7,
      distance: 0.8,
      breakfast: true,
      pool: true,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Downtown+Skyline",
      gallery: [
        "https://placehold.co/600x400?text=Skyline+1",
        "https://placehold.co/600x400?text=Skyline+2",
        "https://placehold.co/600x400?text=Skyline+3"
      ]
    }
  },

  {
    id: "h5",
    name: "The Westmount Grand",
    attributes: {
      price: 130,
      stars: 5,
      rating: 9.3,
      distance: 1.5,
      breakfast: true,
      pool: true,
      sauna: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Westmount+Grand",
      gallery: [
        "https://placehold.co/600x400?text=Westmount+1",
        "https://placehold.co/600x400?text=Westmount+2",
        "https://placehold.co/600x400?text=Westmount+3"
      ]
    }
  },

  {
    id: "h6",
    name: "Maple Leaf Inn",
    attributes: {
      price: 85,
      stars: 3,
      rating: 7.2,
      distance: 2.8,
      breakfast: false,
      pool: false,
      sauna: false,
      fitness: false,
      aircon: false,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "guesthouse"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Maple+Leaf+Inn",
      gallery: [
        "https://placehold.co/600x400?text=Maple+1",
        "https://placehold.co/600x400?text=Maple+2",
        "https://placehold.co/600x400?text=Maple+3"
      ]
    }
  },

  {
    id: "h7",
    name: "North Shore Boutique Hotel",
    attributes: {
      price: 95,
      stars: 4,
      rating: 8.0,
      distance: 1.9,
      breakfast: true,
      pool: false,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=North+Shore+Hotel",
      gallery: [
        "https://placehold.co/600x400?text=Northshore+1",
        "https://placehold.co/600x400?text=Northshore+2",
        "https://placehold.co/600x400?text=Northshore+3"
      ]
    }
  },

  {
    id: "h8",
    name: "Emerald Bay Resort",
    attributes: {
      price: 125,
      stars: 5,
      rating: 9.0,
      distance: 3.0,
      breakfast: true,
      pool: true,
      sauna: true,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "holiday_home"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Emerald+Bay+Resort",
      gallery: [
        "https://placehold.co/600x400?text=Emerald+1",
        "https://placehold.co/600x400?text=Emerald+2",
        "https://placehold.co/600x400?text=Emerald+3"
      ]
    }
  },

  {
    id: "h9",
    name: "CityLights Hotel Vancouver",
    attributes: {
      price: 105,
      stars: 4,
      rating: 8.5,
      distance: 1.0,
      breakfast: true,
      pool: false,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=CityLights+Hotel",
      gallery: [
        "https://placehold.co/600x400?text=CityLights+1",
        "https://placehold.co/600x400?text=CityLights+2",
        "https://placehold.co/600x400?text=CityLights+3"
      ]
    }
  },

  {
    id: "h10",
    name: "Seaside Comfort Hotel",
    attributes: {
      price: 88,
      stars: 3,
      rating: 7.5,
      distance: 2.3,
      breakfast: false,
      pool: false,
      sauna: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Seaside+Comfort",
      gallery: [
        "https://placehold.co/600x400?text=Seaside+1",
        "https://placehold.co/600x400?text=Seaside+2",
        "https://placehold.co/600x400?text=Seaside+3"
      ]
    }
  },

  {
    id: "h11",
    name: "Lions Gate Hotel",
    attributes: {
      price: 115,
      stars: 4,
      rating: 8.8,
      distance: 1.6,
      breakfast: true,
      pool: true,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Lions+Gate+Hotel",
      gallery: [
        "https://placehold.co/600x400?text=LionsGate+1",
        "https://placehold.co/600x400?text=LionsGate+2",
        "https://placehold.co/600x400?text=LionsGate+3"
      ]
    }
  },

  {
    id: "h12",
    name: "Pacific Pearl Luxury Hotel",
    attributes: {
      price: 140,
      stars: 5,
      rating: 9.5,
      distance: 0.7,
      breakfast: true,
      pool: true,
      sauna: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "https://placehold.co/300x200?text=Pacific+Pearl",
      gallery: [
        "https://placehold.co/600x400?text=Pearl+1",
        "https://placehold.co/600x400?text=Pearl+2",
        "https://placehold.co/600x400?text=Pearl+3"
      ]
    }
  }
];
