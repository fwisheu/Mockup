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
      breakfast: true,
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
    description: "The Pacific Crown is a luxurious 5-star hotel with a long-standing reputation for providing exclusive service. " +
    "With its prime location in the heart of Vancouver, it offers easy access to Vancouver's top attractions and vibrant culture.",
    attributes: {
      price: 229,
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
    description: "A warm, unpretentious guesthouse that offers everything needed to make your stay comfortable. " +
    "Clean rooms, a genuine welcome, and fair rates make it ideal for guests who want a reliable base without unnecessary extras.",
    attributes: {
      price: 129,
      stars: 3,
      rating: 7.2,
      reviewCount: 97,
      distance: 1.7,
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
    description: "A carefully considered boutique hotel with lots of character located on Vancouver's scenic north shore. " +
    "It offers a quieter, more personal alternative to the bustling city centre and its massive downtown hotels.",
    attributes: {
      price: 175,
      stars: 4,
      rating: 8.0,
      reviewCount: 208,
      distance: 3.1,
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
    description: "Named after Vancouver's most iconic landmark, the Lions Gate has earned a loyal following " +
    "through years of consistent, attentive hospitality. A hotel that takes pride in the details and that shows.",
    attributes: {
      price: 235,
      stars: 4,
      rating: 8.8,
      reviewCount: 467,
      distance: 1.0,
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
      cover: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
      gallery: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
      ]
    }
  }
];