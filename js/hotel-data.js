// Central hotel data object
const HOTELS = [
  {
    id: "h1",
    name: "Harbourview Hotel Vancouver",
    description: "A stylish 4-star hotel located just steps from Vancouver's iconic waterfront. " +
    "Guests enjoy modern rooms with harbour views, a fully equipped fitness centre, and convenient access to the city's top attractions.",
    attributes: {
      price: 100,
      stars: 4,
      rating: 8.4,
      reviewCount: 284,
      distance: 0.5,
      breakfast: true,
      pool: false,
      sauna: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel",
    },
    images: {
      cover: "images/h1/h1_01.jpg",
      gallery: [
        "images/h1/h1_01.jpg",
        "images/h1/h1_02.jpg",
        "images/h1/h1_03.jpg"
      ]
    }
  },

  {
    id: "h2",
    name: "Granville Suites",
    description: "A charming apartment-style property in the heart of Granville Street, perfect for travellers who value space and independence. " + 
    "Breakfast is included and free parking makes it an excellent value choice.",
    attributes: {
      price: 90,
      stars: 3,
      rating: 9.1,
      reviewCount: 521,
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
      cover: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
      ]
    }
  },

  {
    id: "h3",
    name: "Pacific Crown Hotel",
    description: "A luxury 5-star hotel offering an impressive pool and sauna facilities. " + 
    "Ideally suited for guests seeking premium amenities, though its location requires a short commute to the city centre.",
    attributes: {
      price: 110,
      stars: 5,
      rating: 7.8,
      reviewCount: 173,
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
      cover: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
      ]
    }
  },

  {
    id: "h4",
    name: "Downtown Skyline Hotel",
    description: "A well-appointed hotel in the heart of downtown Vancouver with stunning city views. " + 
    "Featuring a rooftop pool, fitness centre, and breakfast included, it combines comfort with an unbeatable central location.",
    attributes: {
      price: 110,
      stars: 4,
      rating: 8.7,
      reviewCount: 412,
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
      cover: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800"
      ]
    }
  },

  {
    id: "h5",
    name: "The Westmount Grand",
    description: "One of Vancouver's finest 5-star properties, offering an exceptional level of service and amenities. " + 
    "Free parking, a full spa, pool, and breakfast make this hotel a top choice for discerning travellers.",
    attributes: {
      price: 130,
      stars: 5,
      rating: 9.3,
      reviewCount: 638,
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
      cover: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800",
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=800"
      ]
    }
  },

  {
    id: "h6",
    name: "Maple Leaf Inn",
    description: "A cosy guesthouse offering budget-friendly accommodation with free parking. " + 
    "While amenities are limited, it provides a quiet and homely atmosphere for travellers on a tighter budget.",
    attributes: {
      price: 85,
      stars: 3,
      rating: 7.2,
      reviewCount: 97,
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
      cover: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800"
      ]
    }
  },

  {
    id: "h7",
    name: "North Shore Boutique Hotel",
    description: "A boutique hotel on Vancouver's scenic North Shore, blending contemporary design with a personal touch. " + 
    "Breakfast is included and the fitness centre caters well to active travellers.",
    attributes: {
      price: 95,
      stars: 4,
      rating: 8.0,
      reviewCount: 208,
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
      cover: "images/h7/h7_01.jpg",
      gallery: [
        "images/h7/h7_01.jpg",
        "images/h7/h7_02.jpg",
        "images/h7/h7_03.jpg"
      ]
    }
  },

  {
    id: "h8",
    name: "Emerald Bay Resort",
    description: "A resort-style property offering a full range of leisure facilities including pool, sauna, and fitness centre. " + 
    "Free parking and a scenic setting make it a great retreat, though it sits further from the city centre.",
    attributes: {
      price: 125,
      stars: 5,
      rating: 9.0,
      reviewCount: 156,
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
      cover: "images/h8/h8_01.jpg",
      gallery: [
        "images/h8/h8_01.jpg",
        "images/h8/h8_02.jpg",
        "images/h8/h8_03.jpg"
      ]
    }
  },

  {
    id: "h9",
    name: "CityLights Hotel Vancouver",
    description: "A modern 4-star hotel offering a prime downtown location and reliable amenities including breakfast and a fitness centre. " + 
    "An excellent all-round choice for both leisure and business travellers.",
    attributes: {
      price: 105,
      stars: 4,
      rating: 8.5,
      reviewCount: 349,
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
      cover: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
        "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
      ]
    }
  },

  {
    id: "h10",
    name: "Seaside Comfort Hotel",
    description: "A no-frills 3-star hotel offering comfortable rooms at an affordable price point. " + 
    "Air conditioning and free cancellation provide peace of mind for budget-conscious travellers.",
    attributes: {
      price: 88,
      stars: 3,
      rating: 7.5,
      reviewCount: 183,
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
      cover: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800",
        "https://images.unsplash.com/photo-1533044309907-0fa3413da946?w=800",
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=800"
      ]
    }
  },

  {
    id: "h11",
    name: "Lions Gate Hotel",
    description: "A polished 4-star hotel near the Lions Gate Bridge, offering a pool, fitness centre, and breakfast. " + 
    "Its high guest rating reflects consistently strong service and well-maintained facilities.",
    attributes: {
      price: 115,
      stars: 4,
      rating: 8.8,
      reviewCount: 467,
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
      cover: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
        "https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=800",
        "https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=800"
      ]
    }
  },

  {
    id: "h12",
    name: "Pacific Pearl Luxury Hotel",
    description: "Vancouver's premier luxury hotel, combining a central location with the highest standard of amenities. " + 
    "With a perfect guest rating, pool, sauna, free parking, and breakfast, it represents the pinnacle of city hospitality.",
    attributes: {
      price: 140,
      stars: 5,
      rating: 9.5,
      reviewCount: 724,
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
      cover: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
      ]
    }
  }
];
