// Central hotel data object
const HOTELS = [
  {
    id: "h1",
    name: "Harbourview Hotel Vancouver",
    description: "Situated right on Vancouver's iconic waterfront, the Harbourview puts you at the center of the city's best offerings. " +
    "Our guests start their days with an incredible view on the harbour and a breath of fresh sea air.",
    attributes: {
      price: 189,
      stars: 4,
      rating: 8.4,
      reviewCount: 284,
      distance: 0.3,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
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
    description: "Charming apartments located in the heart of Granville Street, which is known for its vibrant dining and entertainment scene. " +
    "Guests that value space and independence have come to the right place.",
    attributes: {
      price: 155,
      stars: 3,
      rating: 9.1,
      reviewCount: 521,
      distance: 1.3,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h2/h2_01.jpg",
      gallery: [
        "images/h2/h2_01.jpg",
        "images/h2/h2_02.jpg",
        "images/h2/h2_03.jpg"
      ]
    }
  },

  {
    id: "h3",
    name: "Pacific Crown Hotel",
    description: "The Pacific Crown is a luxurious 5-star hotel with a long-standing reputation for providing exclusive service. " +
    "With its prime location in the heart of Vancouver, it offers easy access to Vancouver's top attractions and vibrant culture.",
    attributes: {
      price: 238,
      stars: 5,
      rating: 7.8,
      reviewCount: 173,
      distance: 1.2,
      breakfast: false,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h3/h3_01.jpg",
      gallery: [
        "images/h3/h3_01.jpg",
        "images/h3/h3_02.jpg",
        "images/h3/h3_03.jpg"
      ]
    }
  },

  {
    id: "h4",
    name: "Downtown Skyline Hotel",
    description: "Sitting at the heart of Vancouver's city centre with views that genuinely take your breath away, " +
    "the Downtown Skyline puts everything the city has to offer right on your doorstep.",
    attributes: {
      price: 219,
      stars: 4,
      rating: 8.7,
      reviewCount: 412,
      distance: 0.5,
      breakfast: true,
      pool: true,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h4/h4_01.jpg",
      gallery: [
        "images/h4/h4_01.jpg",
        "images/h4/h4_02.jpg",
        "images/h4/h4_03.jpg"
      ]
    }
  },

  {
    id: "h5",
    name: "The Westmount Grand",
    description: "A Vancouver institution known for its attentive service and quietly refined atmosphere. " +
    "Our staff takes care of every detail of your stay from arrival to departure. We are committed to providing an exceptional experience.",
    attributes: {
      price: 319,
      stars: 5,
      rating: 9.3,
      reviewCount: 638,
      distance: 0.9,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h5/h5_01.jpg",
      gallery: [
        "images/h5/h5_01.jpg",
        "images/h5/h5_02.jpg",
        "images/h5/h5_03.jpg"
      ]
    }
  },

  {
    id: "h6",
    name: "Maple Leaf Inn",
    description: "A warm, unpretentious guesthouse that offers everything needed to make your stay comfortable. " +
    "Clean rooms, a genuine welcome, and fair rates make it ideal for guests who want a reliable base without unnecessary extras.",
    attributes: {
      price: 129,
      stars: 3,
      rating: 7.2,
      reviewCount: 97,
      distance: 2.9,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "guesthouse"
    },
    images: {
      cover: "images/h6/h6_01.jpg",
      gallery: [
        "images/h6/h6_01.jpg",
        "images/h6/h6_02.jpg",
        "images/h6/h6_03.jpg"
      ]
    }
  },

  {
    id: "h7",
    name: "North Shore Boutique Hotel",
    description: "A carefully considered boutique hotel with lots of character located on Vancouver's scenic north shore. " +
    "It offers a quieter, more personal alternative to the bustling city centre and its massive downtown hotels.",
    attributes: {
      price: 175,
      stars: 4,
      rating: 8.0,
      reviewCount: 208,
      distance: 3.2,
      breakfast: true,
      pool: false,
      wellness: false,
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
    description: "The Emerald Bay offers something downtown hotels simply cannot: space, calm, and a genuine sense of retreat. " +
    "Come back each evening to a property that feels worlds away from the city buzz.",
    attributes: {
      price: 259,
      stars: 5,
      rating: 9.0,
      reviewCount: 156,
      distance: 3.8,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
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
    description: "A modern 4-star hotel offering a prime downtown location and a wonderful breakfast. " +
    "An excellent all-round choice for both leisure and business travellers.",
    attributes: {
      price: 199,
      stars: 4,
      rating: 8.5,
      reviewCount: 349,
      distance: 0.6,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h9/h9_01.jpg",
      gallery: [
        "images/h9/h9_01.jpg",
        "images/h9/h9_02.jpg",
        "images/h9/h9_03.jpg"
      ]
    }
  },

  {
    id: "h10",
    name: "Seaside Comfort Hotel",
    description: "Comfortable, unpretentious, and fairly priced — the Seaside Comfort is exactly what it sounds like. " +
    "Well-kept rooms, a friendly team, and a location that means you're never far from what the city has to offer.",
    attributes: {
      price: 139,
      stars: 3,
      rating: 7.5,
      reviewCount: 183,
      distance: 1.4,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h10/h10_01.jpg",
      gallery: [
        "images/h10/h10_01.jpg",
        "images/h10/h10_02.jpg",
        "images/h10/h10_03.jpg"
      ]
    }
  },

  {
    id: "h11",
    name: "Lions Gate Hotel",
    description: "Named after Vancouver's most iconic landmark, the Lions Gate has earned a loyal following " +
    "through years of consistent, attentive hospitality. A hotel that takes pride in the details and that shows.",
    attributes: {
      price: 224,
      stars: 4,
      rating: 8.8,
      reviewCount: 467,
      distance: 1.1,
      breakfast: true,
      pool: true,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h11/h11_01.jpg",
      gallery: [
        "images/h11/h11_01.jpg",
        "images/h11/h11_02.jpg",
        "images/h11/h11_03.jpg"
      ]
    }
  },

  {
    id: "h12",
    name: "Pacific Pearl Luxury Hotel",
    description: "One of Vancouver's most celebrated addresses, refined over years of dedication to the guest experience. " +
    "Perfectly positioned in downtown Vancouver, with a level of service that sets it apart from everything else in the city.",
    attributes: {
      price: 349,
      stars: 5,
      rating: 9.5,
      reviewCount: 724,
      distance: 0.4,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h12/h12_01.jpg",
      gallery: [
        "images/h12/h12_01.jpg",
        "images/h12/h12_02.jpg",
        "images/h12/h12_03.jpg"
      ]
    }
  },

  {
    id: "h13",
    name: "Gastown Heritage Suites",
    description: "Set in historic Gastown, these stylish apartments combine exposed brick with modern comfort. " +
    "Ideal for travelers who seek character and independence while staying close to Vancouver's city center.",
    attributes: {
      price: 182,
      stars: 4,
      rating: 8.9,
      reviewCount: 276,
      distance: 0.7,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h13/h13_01.jpg",
      gallery: [
        "images/h13/h13_01.jpg",
        "images/h13/h13_02.jpg",
        "images/h13/h13_03.jpg"
      ]
    }
  },

  {
    id: "h14",
    name: "Coal Harbour Retreat",
    description: "A peaceful waterfront property offering scenic views and easy access to Stanley Park. " +
    "Guests enjoy a calm atmosphere while remaining within easy reach of downtown shops, dining, and major sights.",
    attributes: {
      price: 265,
      stars: 5,
      rating: 8.6,
      reviewCount: 198,
      distance: 0.9,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h14/h14_01.jpg",
      gallery: [
        "images/h14/h14_01.jpg",
        "images/h14/h14_02.jpg",
        "images/h14/h14_03.jpg"
      ]
    }
  },

  {
    id: "h15",
    name: "Urban Stay Vancouver",
    description: "Functional and modern apartments designed for short city stays in a convenient location. " +
    "Clean interiors and practical layouts make this a solid choice for independent travelers that want to explore Vancouver.",
    attributes: {
      price: 148,
      stars: 3,
      rating: 7.9,
      reviewCount: 143,
      distance: 1.6,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h15/h15_01.jpg",
      gallery: [
        "images/h15/h15_01.jpg",
        "images/h15/h15_02.jpg",
        "images/h15/h15_03.jpg"
      ]
    }
  },

  {
    id: "h16",
    name: "Stanley Park Lodge",
    description: "A cozy guesthouse located right next to Stanley Park, offering a relaxed base close to nature. " +
    "Guests appreciate the friendly hosts and the quiet setting away from the busy city centre.",
    attributes: {
      price: 134,
      stars: 3,
      rating: 8.2,
      reviewCount: 89,
      distance: 2.4,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "guesthouse"
    },
    images: {
      cover: "images/h16/h16_01.jpg",
      gallery: [
        "images/h16/h16_01.jpg",
        "images/h16/h16_02.jpg",
        "images/h16/h16_03.jpg"
      ]
    }
  },

  {
    id: "h17",
    name: "Pacific Business Hotel",
    description: "A reliable 4-star hotel tailored to business travelers near Vancouver's financial district. " +
    "Efficient service and comfortable rooms ensure a smooth and productive stay throughout your visit.",
    attributes: {
      price: 211,
      stars: 4,
      rating: 8.3,
      reviewCount: 332,
      distance: 0.8,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h17/h17_01.jpg",
      gallery: [
        "images/h17/h17_01.jpg",
        "images/h17/h17_02.jpg",
        "images/h17/h17_03.jpg"
      ]
    }
  },

  {
    id: "h18",
    name: "Granville Boutique B&B",
    description: "A charming bed & breakfast with individually designed rooms and a warm atmosphere. " +
    "Our guests particularly value the homemade breakfast and the attentive, personal service.",
    attributes: {
      price: 167,
      stars: 4,
      rating: 9.2,
      reviewCount: 154,
      distance: 1.5,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "bnb"
    },
    images: {
      cover: "images/h18/h18_01.jpg",
      gallery: [
        "images/h18/h18_01.jpg",
        "images/h18/h18_02.jpg",
        "images/h18/h18_03.jpg"
      ]
    }
  },

  {
    id: "h19",
    name: "False Creek Residence",
    description: "Modern apartments overlooking False Creek that offer more space than typical hotel rooms. " +
    "A good option for longer stays with convenient access to downtown and the waterfront.",
    attributes: {
      price: 203,
      stars: 4,
      rating: 8.1,
      reviewCount: 267,
      distance: 1.8,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: false,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h19/h19_01.jpg",
      gallery: [
        "images/h19/h19_01.jpg",
        "images/h19/h19_02.jpg",
        "images/h19/h19_03.jpg"
      ]
    }
  },

  {
    id: "h20",
    name: "West End Comfort Inn",
    description: "A simple and affordable hotel located in Vancouver's popular West End. " +
    "It provides a practical base for exploring the city on foot while keeping travel costs low.",
    attributes: {
      price: 121,
      stars: 3,
      rating: 7.4,
      reviewCount: 201,
      distance: 1.2,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h20/h20_01.jpg",
      gallery: [
        "images/h20/h20_01.jpg",
        "images/h20/h20_02.jpg",
        "images/h20/h20_03.jpg"
      ]
    }
  },

  {
    id: "h21",
    name: "Harbour Luxury Residences",
    description: "High-end serviced apartments offering stunning harbour views and elegant interiors. " +
    "Premium amenities and generous space make it ideal for guests seeking a refined stay in Vancouver.",
    attributes: {
      price: 335,
      stars: 5,
      rating: 9.4,
      reviewCount: 412,
      distance: 0.6,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h21/h21_01.jpg",
      gallery: [
        "images/h21/h21_01.jpg",
        "images/h21/h21_02.jpg",
        "images/h21/h21_03.jpg"
      ]
    }
  },

  {
    id: "h22",
    name: "Kitsilano Beach Guesthouse",
    description: "A laid-back guesthouse near Kitsilano Beach with a relaxed and friendly atmosphere. " +
    "Perfect for travelers who prefer a more local experience while staying close to the waterfront.",
    attributes: {
      price: 142,
      stars: 3,
      rating: 8.5,
      reviewCount: 118,
      distance: 3.5,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: false,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "guesthouse"
    },
    images: {
      cover: "images/h22/h22_01.jpg",
      gallery: [
        "images/h22/h22_01.jpg",
        "images/h22/h22_02.jpg",
        "images/h22/h22_03.jpg"
      ]
    }
  },

  {
    id: "h23",
    name: "Downtown Executive Suites",
    description: "Designed for business travellers, our suites offer spacious accommodations right in the heart of Vancouver. " +
    "Moreover, our 24/7 reception is dedicated to make your stay as convenient as possible.",
    attributes: {
      price: 228,
      stars: 4,
      rating: 8.8,
      reviewCount: 305,
      distance: 0.4,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h23/h23_01.jpg",
      gallery: [
        "images/h23/h23_01.jpg",
        "images/h23/h23_02.jpg",
        "images/h23/h23_03.jpg"
      ]
    }
  },

  {
    id: "h24",
    name: "Vancouver Garden Hotel",
    description: "A quiet hotel surrounded by greenery, offering a relaxed retreat outside the busy core. " +
    "Guests enjoy a calmer setting with good connections to downtown attractions.",
    attributes: {
      price: 176,
      stars: 4,
      rating: 7.7,
      reviewCount: 147,
      distance: 4.2,
      breakfast: true,
      pool: true,
      wellness: false,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h24/h24_01.jpg",
      gallery: [
        "images/h24/h24_01.jpg",
        "images/h24/h24_02.jpg",
        "images/h24/h24_03.jpg"
      ]
    }
  }
];