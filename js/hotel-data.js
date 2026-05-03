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
      gallery: ["images/h1/h1_01.jpg", "images/h1/h1_02.jpg", "images/h1/h1_03.jpg"]
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
      gallery: ["images/h2/h2_01.jpg", "images/h2/h2_02.jpg", "images/h2/h2_03.jpg"
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
      gallery: ["images/h3/h3_01.jpg", "images/h3/h3_02.jpg", "images/h3/h3_03.jpg"]
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
      gallery: ["images/h4/h4_01.jpg", "images/h4/h4_02.jpg", "images/h4/h4_03.jpg"]
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
      gallery: ["images/h5/h5_01.jpg", "images/h5/h5_02.jpg", "images/h5/h5_03.jpg"]
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
      reviewCount: 87,
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
      gallery: ["images/h6/h6_01.jpg", "images/h6/h6_02.jpg", "images/h6/h6_03.jpg"]
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
      gallery: ["images/h7/h7_01.jpg", "images/h7/h7_02.jpg", "images/h7/h7_03.jpg"]
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
      gallery: ["images/h8/h8_01.jpg", "images/h8/h8_02.jpg", "images/h8/h8_03.jpg"]
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
      gallery: ["images/h9/h9_01.jpg", "images/h9/h9_02.jpg", "images/h9/h9_03.jpg"]
    }
  },

  {
    id: "h10",
    name: "Seaside Comfort Hotel",
    description: "Comfortable, unpretentious, and fairly priced – the Seaside Comfort is exactly what it sounds like. " +
    "Well-kept rooms, a friendly team, and a location that means you're never far from what the city has to offer.",
    attributes: {
      price: 139,
      stars: 3,
      rating: 6.9,
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
      gallery: ["images/h10/h10_01.jpg", "images/h10/h10_02.jpg", "images/h10/h10_03.jpg"]
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
      gallery: ["images/h11/h11_01.jpg", "images/h11/h11_02.jpg", "images/h11/h11_03.jpg"]
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
      gallery: ["images/h12/h12_01.jpg", "images/h12/h12_02.jpg", "images/h12/h12_03.jpg"]
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
      gallery: ["images/h13/h13_01.jpg", "images/h13/h13_02.jpg", "images/h13/h13_03.jpg"]
    }
  },

  {
    id: "h14",
    name: "Coal Harbour Retreat",
    description: "A peaceful waterfront property offering scenic views and easy access to Stanley Park. " +
    "Guests enjoy a calm atmosphere while staying within easy reach of downtown shops, dining, and major sights.",
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
      gallery: ["images/h14/h14_01.jpg", "images/h14/h14_02.jpg", "images/h14/h14_03.jpg"]
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
      gallery: ["images/h15/h15_01.jpg", "images/h15/h15_02.jpg", "images/h15/h15_03.jpg"]
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
      gallery: ["images/h16/h16_01.jpg", "images/h16/h16_02.jpg", "images/h16/h16_03.jpg"]
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
      gallery: ["images/h17/h17_01.jpg", "images/h17/h17_02.jpg", "images/h17/h17_03.jpg"]
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
      gallery: ["images/h18/h18_01.jpg", "images/h18/h18_02.jpg", "images/h18/h18_03.jpg"]
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
      gallery: ["images/h19/h19_01.jpg", "images/h19/h19_02.jpg", "images/h19/h19_03.jpg"]
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
      gallery: ["images/h20/h20_01.jpg", "images/h20/h20_02.jpg", "images/h20/h20_03.jpg"]
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
      gallery: ["images/h21/h21_01.jpg", "images/h21/h21_02.jpg", "images/h21/h21_03.jpg"]
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
      gallery: ["images/h22/h22_01.jpg", "images/h22/h22_02.jpg", "images/h22/h22_03.jpg"]
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
      gallery: ["images/h23/h23_01.jpg", "images/h23/h23_02.jpg", "images/h23/h23_03.jpg"]
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
      gallery: ["images/h24/h24_01.jpg", "images/h24/h24_02.jpg", "images/h24/h24_03.jpg"]
    }
  },

  {
    id: "h25",
    name: "Yaletown City Hotel",
    description: "A modern hotel located in Vancouver's trendy Yaletown district, surrounded by restaurants and nightlife. " +
    "Guests appreciate the central location and easy access to both public transport and the waterfront.",
    attributes: {
      price: 207,
      stars: 4,
      rating: 8.6,
      reviewCount: 388,
      distance: 0.5,
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
      cover: "images/h25/h25_01.jpg",
      gallery: ["images/h25/h25_01.jpg", "images/h25/h25_02.jpg", "images/h25/h25_03.jpg"]
    }
  },

  {
    id: "h26",
    name: "Yaletown Loft Suites",
    description: "Industrial-chic loft apartments in Vancouver's trendy Yaletown district. " +
    "High ceilings, open layouts, and a neighbourhood full of great restaurants make these suites a top choice for style-conscious travellers.",
    attributes: {
      price: 215,
      stars: 4,
      rating: 8.7,
      reviewCount: 298,
      distance: 1.1,
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
      cover: "images/h26/h26_01.jpg",
      gallery: ["images/h26/h26_01.jpg", "images/h26/h26_02.jpg", "images/h26/h26_03.jpg"]
    }
  },

  {
    id: "h27",
    name: "Sunset Budget Inn",
    description: "A basic and budget-friendly option located slightly outside the city centre. " +
    "Simple rooms for a straightforward stay and therefore ideal for guests focused on value.",
    attributes: {
      price: 109,
      stars: 2,
      rating: 6.8,
      reviewCount: 132,
      distance: 3.7,
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
      cover: "images/h27/h27_01.jpg",
      gallery: ["images/h27/h27_01.jpg", "images/h27/h27_02.jpg", "images/h27/h27_03.jpg"]
    }
  },

  {
      id: "h28",
      name: "English Bay Studio",
      description: "Compact and efficient studio just steps away from English Bay Beach. Ideal for solo travelers " +
      "or couples who want to enjoy the sunset every evening.",
      attributes: {
        price: 136,
        stars: 2,
        rating: 7.8,
        reviewCount: 42,
        distance: 1.5,
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
        cover: "images/h28/h28_01.jpg",
        gallery: ["images/h28/h28_01.jpg", "images/h28/h28_02.jpg", "images/h28/h28_03.jpg"]
      }
    },

  {
    id: "h29",
    name: "The Pinnacle Vancouver",
    description: "The Pinnacle Vancouver is a landmark 5-star hotel with sweeping views over the city and mountains beyond. " +
    "Every aspect of the guest experience has been carefully considered. Special highlights are the acclaimed in-house restaurant and the luxurious spa area.",
    attributes: {
      price: 368,
      stars: 5,
      rating: 9.4,
      reviewCount: 541,
      distance: 0.5,
      breakfast: true,
      pool: true,
      wellness: true,
      fitness: true,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: true,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h29/h29_01.jpg",
      gallery: ["images/h29/h29_01.jpg", "images/h29/h29_02.jpg", "images/h29/h29_03.jpg"]
    }
  },

  {
    id: "h30",
    name: "East Vancouver Guesthouse",
    description: "A small guesthouse located in a residential neighborhood with a relaxed and informal atmosphere. " +
    "Our guests value the personal touch and the quieter setting away from the main tourist areas.",
    attributes: {
      price: 138,
      stars: 3,
      rating: 8.0,
      reviewCount: 104,
      distance: 4.5,
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
      cover: "images/h30/h30_01.jpg",
      gallery: ["images/h30/h30_01.jpg", "images/h30/h30_02.jpg", "images/h30/h30_03.jpg"]
    }
  },

  {
    id: "h31",
    name: "Main Street Artist Pad",
    description: "Bright and airy top-floor apartment on Main Street. Surrounded by coffee shops and " +
    "independent bookstores. Ideal for those who want to feel like a local resident.",
    attributes: {
      price: 154,
      stars: 2,
      rating: 8.4,
      reviewCount: 42,
      distance: 2.5,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: false,
      accommodationType: "apartment"
          },
    images: {
      cover: "images/h31/h31_01.jpg",
      gallery: ["images/h31/h31_01.jpg", "images/h31/h31_02.jpg", "images/h31/h31_03.jpg"]
    }
  },

  {
    id: "h32",
    name: "Seawall Boutique Hotel",
    description: "A small boutique hotel located near Vancouver's famous seawall, ideal for walking and cycling. " +
    "Guests love the relaxed atmosphere and easy access to scenic outdoor areas.",
    attributes: {
      price: 186,
      stars: 4,
      rating: 8.7,
      reviewCount: 189,
      distance: 1.3,
      breakfast: true,
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
      cover: "images/h32/h32_01.jpg",
      gallery: ["images/h32/h32_01.jpg", "images/h32/h32_02.jpg", "images/h32/h32_03.jpg"]
    }
  },

  {
    id: "h33",
    name: "The Robson Grand Hotel",
    description: "A classic choice on Vancouver's premier shopping street. The Robson Grand offers traditional elegance " +
    "combined with modern amenities, making it a favorite for international travelers.",
    attributes: {
      price: 215,
      stars: 4,
      rating: 8.1,
      reviewCount: 512,
      distance: 0.4,
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
      cover: "images/h33/h33_01.jpg",
      gallery: ["images/h33/h33_01.jpg", "images/h33/h33_02.jpg", "images/h33/h33_03.jpg"]
    }
  },

  {
    id: "h34",
    name: "Greenwood City Hotel",
    description: "A well-maintained hotel offering a balance between comfort and affordability. " +
    "Guests appreciate the reliable service and convenient access to public transport.",
    attributes: {
      price: 163,
      stars: 3,
      rating: 8.1,
      reviewCount: 278,
      distance: 2.0,
      breakfast: true,
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
      cover: "images/h34/h34_01.jpg",
      gallery: ["images/h34/h34_01.jpg", "images/h34/h34_02.jpg", "images/h34/h34_03.jpg"]
    }
  },

  {
    id: "h35",
    name: "Vancouver Central B&B",
    description: "A small bed & breakfast that combines proximity to downtown with a personal atmosphere. " +
    "We keep our prices low because we believe that the beautiful city of Vancouver should be accessible to everyone.",
    attributes: {
      price: 151,
      stars: 3,
      rating: 8.8,
      reviewCount: 142,
      distance: 1.1,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "bnb"
    },
    images: {
      cover: "images/h35/h35_01.jpg",
      gallery: ["images/h35/h35_01.jpg", "images/h35/h35_02.jpg", "images/h35/h35_03.jpg"]
    }
  },

  {
    id: "h36",
    name: "Cambie Street B&B",
    description: "A charming bed and breakfast on one of Vancouver's most characterful streets. " +
    "Individually decorated rooms, a generous homemade breakfast, and hosts who genuinely care about your stay.",
    attributes: {
      price: 149,
      stars: 3,
      rating: 9.0,
      reviewCount: 143,
      distance: 1.9,
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
      cover: "images/h36/h36_01.jpg",
      gallery: ["images/h36/h36_01.jpg", "images/h36/h36_02.jpg", "images/h36/h36_03.jpg"]
    }
  },

    {
    id: "h37",
    name: "Chinatown Heritage Apartment",
    description: "A characterful apartment in Vancouver's historic Chinatown, surrounded by some of the city's best food and culture. " +
    "Well-equipped and full of local character these apartments offer a genuine alternative to the standard hotel experience.",
    attributes: {
      price: 143,
      stars: 3,
      rating: 8.3,
      reviewCount: 167,
      distance: 1.2,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h37/h37_01.jpg",
      gallery: ["images/h37/h37_01.jpg", "images/h37/h37_02.jpg", "images/h37/h37_03.jpg"]
    }
  },

  {
    id: "h38",
    name: "Davie Street Residences",
    description: "Modern and well-appointed apartments in the heart of Vancouver's vibrant West End. " +
    "Steps from the beach and surrounded by a lively mix of beautiful cafes, restaurants and boutique shops.",
    attributes: {
      price: 198,
      stars: 4,
      rating: 8.5,
      reviewCount: 223,
      distance: 1.4,
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
      cover: "images/h38/h38_01.jpg",
      gallery: ["images/h38/h38_01.jpg", "images/h38/h38_02.jpg", "images/h38/h38_03.jpg"]
    }
  },

  {
    id: "h39",
    name: "Fairview Boutique Hotel",
    description: "An artistic retreat in the Fairview slopes. Each room is a gallery of local art, " +
    "offering a sophisticated stay with stunning views of the downtown skyline.",
    attributes: {
      price: 215,
      stars: 4,
      rating: 9.1,
      reviewCount: 124,
      distance: 2.1,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h39/h39_01.jpg",
      gallery: ["images/h39/h39_01.jpg", "images/h39/h39_02.jpg", "images/h39/h39_03.jpg"]
    }
  },

  {
    id: "h40",
    name: "Mount Pleasant Studio Flats",
    description: "Compact and affordable studio flats in Vancouver's up-and-coming Mount Pleasant neighbourhood. " +
    "A practical choice for independent travellers who want easy access to the city without spending a fortune.",
    attributes: {
      price: 127,
      stars: 3,
      rating: 7.6,
      reviewCount: 98,
      distance: 2.3,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h40/h40_01.jpg",
      gallery: ["images/h40/h40_01.jpg", "images/h40/h40_02.jpg", "images/h40/h40_03.jpg"]
    }
  },

  {
    id: "h41",
    name: "The Metropolitan Vancouver",
    description: "The Metropolitan has been a fixture of Vancouver's luxury hotel scene for years and continues to earn its place. " +
     "A polished 5-star hotel in the heart of downtown with a special highlight: The unique rooftop bar known as 'The Metro'.",
    attributes: {
      price: 342,
      stars: 5,
      rating: 9.2,
      reviewCount: 586,
      distance: 0.3,
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
      cover: "images/h41/h41_01.jpg",
      gallery: ["images/h41/h41_01.jpg", "images/h41/h41_02.jpg", "images/h41/h41_03.jpg"
      ]
    }
  },

  {
    id: "h42",
    name: "South Granville B&B",
    description: "A welcoming bed and breakfast in the upscale South Granville neighbourhood, known for its galleries and independent shops. " +
    "Thoughtfully decorated rooms and a generous breakfast make every morning here a good one.",
    attributes: {
      price: 158,
      stars: 3,
      rating: 9.1,
      reviewCount: 108,
      distance: 2.6,
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
      cover: "images/h42/h42_01.jpg",
      gallery: ["images/h42/h42_01.jpg", "images/h42/h42_02.jpg", "images/h42/h42_03.jpg"]
    }
  },

  {
    id: "h43",
    name: "West End Heritage Flat",
    description: "Stay in a piece of history. This converted Victorian house offers apartments with original crown molding " +
    "and large bay windows overlooking leafy streets. A truly unique experience right in the heart of Vancouver's West End.",
    attributes: {
      price: 165,
      stars: 3,
      rating: 8.7,
      reviewCount: 54,
      distance: 1.1,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: true,
      parkingFree: false,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h43/h43_01.jpg",
      gallery: ["images/h43/h43_01.jpg", "images/h43/h43_02.jpg", "images/h43/h43_03.jpg"]
    }
  },

  {
    id: "h44",
    name: "Urban Plaza Hotel",
    description: "No-nonsense comfort in the business district. Reliable, clean, and efficient, catering to budget-conscious travelers " +
    "who need a solid base for their city exploration.",
    attributes: {
      price: 163,
      stars: 3,
      rating: 7.3,
      reviewCount: 356,
      distance: 0.8,
      breakfast: true,
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
      cover: "images/h44/h44_01.jpg",
      gallery: ["images/h44/h44_01.jpg", "images/h44/h44_02.jpg", "images/h44/h44_03.jpg"]
    }
  },

  {
    id: "h45",
    name: "Vancouver Riverside Hotel",
    description: "A relaxed hotel located near the Fraser River that offers a quieter alternative to the city centre. " +
    "Guests appreciate the peaceful setting, beautiful river view, and good transport connection.",
    attributes: {
      price: 161,
      stars: 3,
      rating: 7.8,
      reviewCount: 176,
      distance: 4.6,
      breakfast: true,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: true,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "hotel"
    },
    images: {
      cover: "images/h45/h45_01.jpg", 
      gallery: ["images/h45/h45_01.jpg","images/h45/h45_02.jpg","images/h45/h45_03.jpg"] 
    }
  },

  {
    id: "h46",
    name: "Shaughnessy Basement Suite",
    description: "A private, quiet suite in one of Vancouver's most prestigious neighborhoods. Surrounded by beautiful gardens " +
    "our guests get to experience Vancouver like a local resident.",
    attributes: {
      price: 135,
      stars: 3,
      rating: 8.5,
      reviewCount: 29,
      distance: 4.9,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "apartment"
    },
    images: {
      cover: "images/h46/h46_01.jpg",
      gallery: ["images/h46/h46_01.jpg", "images/h46/h46_02.jpg", "images/h46/h46_03.jpg"]
    }
  },

  {
    id: "h47",
    name: "West End Park Hotel",
    description: "Located close to Stanley Park, this hotel offers a quieter stay in one of Vancouver's most popular neighborhoods. " +
    "Guests enjoy green surroundings while staying within easy reach of downtown.",
    attributes: {
      price: 192,
      stars: 4,
      rating: 8.4,
      reviewCount: 244,
      distance: 1.5,
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
      cover: "images/h47/h47_01.jpg", 
      gallery: ["images/h47/h47_01.jpg","images/h47/h47_02.jpg","images/h47/h47_03.jpg"] 
    }
  },

  {
    id: "h48",
    name: "Olympic Village Waterfront Apartment",
    description: "A sleek and modern apartment in the award-winning Olympic Village neighbourhood, right on the water's edge. " +
    "Excellent transport links, a thriving local food scene, and stunning views make this one of Vancouver's most sought-after addresses.",
    attributes: {
      price: 231,
      stars: 4,
      rating: 8.8,
      reviewCount: 254,
      distance: 1.9,
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
      cover: "images/h48/h48_01.jpg",
      gallery: ["images/h48/h48_01.jpg", "images/h48/h48_02.jpg", "images/h48/h48_03.jpg"]
    }
  },

  {
    id: "h49",
    name: "Burnaby Heights Guesthouse",
    description: "A friendly, family-run guesthouse located on the heights. Enjoy the community atmosphere and traditional home-style hospitality " +
    "in a quiet residential street and explore the city from a more local perspective.",
    attributes: {
      price: 115,
      stars: 3,
      rating: 8.4,
      reviewCount: 92,
      distance: 4.8,
      breakfast: false,
      pool: false,
      wellness: false,
      fitness: false,
      aircon: false,
      freeCancellation: true,
      parkingFree: true,
      parkingPaid: false,
      accommodationType: "guesthouse"
    },
    images: {
      cover: "images/h49/h49_01.jpg",
      gallery: ["images/h49/h49_01.jpg", "images/h49/h49_02.jpg", "images/h49/h49_03.jpg"]
    }
  },

  {
    id: "h50",
    name: "Robson Plaza Hotel",
    description: "Set on Vancouver's famous Robson Street, this hotel places you right in the middle of shopping and dining. " +
    "A stylish retreat that serves as a convenient and lively base for exploring the city.",
    attributes: {
      price: 208,
      stars: 4,
      rating: 8.3,
      reviewCount: 399,
      distance: 0.3,
      breakfast: false,
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
      cover: "images/h50/h50_01.jpg", 
      gallery: ["images/h50/h50_01.jpg","images/h50/h50_02.jpg","images/h50/h50_03.jpg"] 
    }
  },
];