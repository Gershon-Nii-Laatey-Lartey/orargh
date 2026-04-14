export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
}

export const curatedProducts: Product[] = [
  { 
    id: 1, 
    name: "iPhone 17 Pro Max", 
    category: "Phones", 
    brand: "Apple", 
    price: "GH₵ 22,500", 
    image: "/images/iphone_17.png",
    images: ["/images/iphone_17.png"],
    description: "The most powerful iPhone ever. Featuring a sculpted titanium design with a stunning Super Retina XDR display with ProMotion technology.",
    specs: [
      { label: "Display", value: '6.9" Super Retina XDR' },
      { label: "Chip", value: "A19 Pro chip" },
      { label: "Camera", value: "48MP Pro System" },
      { label: "Battery", value: "Up to 30 hours video playback" }
    ]
  },
  { 
    id: 2, 
    name: "Samsung S26 Ultra", 
    category: "Phones", 
    brand: "Samsung", 
    price: "GH₵ 23,500", 
    image: "/images/s26_ultra.png",
    images: ["/images/s26_ultra.png"],
    description: "Galaxy AI at your fingertips. Experience the new era of mobile with the Galaxy S26 Ultra.",
    specs: [
      { label: "Display", value: '6.8" Dynamic AMOLED' },
      { label: "Chip", value: "Snapdragon 8 Gen 5" },
      { label: "Camera", value: "200MP Quad System" },
      { label: "Battery", value: "5000mAh with Super Charging" }
    ]
  },
  { 
    id: 3, 
    name: "Pixel 10 Pro Fold", 
    category: "Phones", 
    brand: "Google", 
    price: "GH₵ 28,000", 
    image: "/images/pixel_fold.png",
    images: ["/images/pixel_fold.png"],
    description: "The thinnest foldable phone with the best camera. Google Tensor G5 inside for advanced AI experiences.",
    specs: [
      { label: "Inner Display", value: '8.0" Actua Display' },
      { label: "Chip", value: "Google Tensor G5" },
      { label: "Camera", value: "Advanced AI Triple System" },
      { label: "Design", value: "Aerospace aluminum hinge" }
    ]
  },
  { 
    id: 4, 
    name: "Pixel 10 Pro", 
    category: "Phones", 
    brand: "Google", 
    price: "GH₵ 15,000", 
    image: "/images/pixel_10.png",
    images: ["/images/pixel_10.png"],
    description: "The most advanced Pixel yet. Featuring an elevated sophisticated design and a pro camera that captures incredible photos and video.",
    specs: [
      { label: "Display", value: '6.7" Actua Display' },
      { label: "Chip", value: "Google Tensor G5" },
      { label: "Camera", value: "50MP Triple System" },
      { label: "Safety", value: "Satellite SOS and Safety Check" }
    ]
  },
  { 
    id: 5, 
    name: "iPhone 17", 
    category: "Phones", 
    brand: "Apple", 
    price: "GH₵ 12,000", 
    image: "/images/iphone_17.png",
    images: ["/images/iphone_17.png"],
    description: "Powerful and colorful. iPhone 17 features the Dynamic Island and an advanced camera system.",
    specs: [
      { label: "Display", value: '6.1" Super Retina XDR' },
      { label: "Chip", value: "A19 chip" },
      { label: "Camera", value: "48MP Main System" },
      { label: "Colors", value: "Available in 5 stunning colors" }
    ]
  },
  { 
    id: 6, 
    name: "Pixel 9", 
    category: "Phones", 
    brand: "Google", 
    price: "GH₵ 10,500", 
    image: "/images/pixel.png",
    images: ["/images/pixel.png"],
    description: "Effortlessly smart. Pixel 9 features the best-in-class Google camera and helpful AI features.",
    specs: [
      { label: "Display", value: '6.3" Actua Display' },
      { label: "Chip", value: "Google Tensor G4" },
      { label: "Camera", value: "50MP Dual System" },
      { label: "AI", value: "Best of Google AI" }
    ]
  },
  { 
    id: 7, 
    name: "AirPods Max", 
    category: "Accessories", 
    brand: "Apple", 
    price: "GH₵ 8,500", 
    image: "/images/Airpod-Transparent-Background-PNG.png",
    images: ["/images/Airpod-Transparent-Background-PNG.png"],
    description: "High-fidelity audio. Active Noise Cancellation with Transparency mode. Spatial audio for theater-class sound that surrounds you.",
    specs: [
      { label: "Type", value: "Over-ear Wireless" },
      { label: "Audio", value: "Personalized Spatial Audio" },
      { label: "NoiseControl", value: "Active Noise Cancellation" },
      { label: "Battery", value: "20 hours listening time" }
    ]
  },
  { 
    id: 8, 
    name: "Watch Series 10", 
    category: "Accessories", 
    brand: "Apple", 
    price: "GH₵ 6,500", 
    image: "/images/apple watch.png",
    images: ["/images/apple watch.png"],
    description: "Thinner than ever. Apple Watch Series 10 features our biggest and most advanced display yet.",
    specs: [
      { label: "Display", value: 'Always-On Retina display' },
      { label: "Safety", value: "Fall and Crash Detection" },
      { label: "Health", value: "Temperature & Blood Oxygen" },
      { label: "Charging", value: "Fast Charging capable" }
    ]
  },
  { 
    id: 9, 
    name: "Elite Controller", 
    category: "Accessories", 
    brand: "Xbox", 
    price: "GH₵ 2,800", 
    image: "/images/xbox_series.png",
    images: ["/images/xbox_series.png"],
    description: "Pro-level performance for every player. Built for today's competitive gamers.",
    specs: [
      { label: "Type", value: "Wireless Controller" },
      { label: "Switches", value: "Adjustable-tension thumbsticks" },
      { label: "Shell", value: "Textured wrap-around rubberized grip" },
      { label: "Custom", value: "Interchangeable paddles" }
    ]
  },
  { 
    id: 10, 
    name: "65W Trio Charger", 
    category: "Accessories", 
    brand: "Samsung", 
    price: "GH₵ 850", 
    image: "/images/samsung-charger.png",
    images: ["/images/samsung-charger.png"],
    description: "Charge three devices simultaneously with a 65W charger that delivers incredibly fast power.",
    specs: [
      { label: "Ports", value: "2x USB-C, 1x USB-A" },
      { label: "Power", value: "Max 65W PD Support" },
      { label: "Design", value: "Compact and Travel-ready" },
      { label: "Compat", value: "Universal Device Compatibility" }
    ]
  }
];

export const allProducts: Product[] = [...curatedProducts, ...[
  {
    "id": 100,
    "name": "Apple iPhone 14 Pro Max 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/100/img_1.jpg",
    "images": [
      "/images/scraped/100/img_1.jpg",
      "/images/scraped/100/img_2.jpg",
      "/images/scraped/100/img_3.jpg",
      "/images/scraped/100/img_4.jpg",
      "/images/scraped/100/img_5.jpg",
      "/images/scraped/100/img_6.jpg"
    ],
    "description": "➣The price tag is meant for the \"Buy now ,Pay later\" plan @ 40%. Kindly contact for more enquiries. \n➣It's very neat and factory unlocked (Physical sim)\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Visit the store at (Lapaz)",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 101,
    "name": "Samsung Galaxy S26 Ultra 5G 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 13,999",
    "image": "/images/scraped/101/img_1.jpg",
    "images": [
      "/images/scraped/101/img_1.jpg",
      "/images/scraped/101/img_2.jpg",
      "/images/scraped/101/img_3.jpg",
      "/images/scraped/101/img_4.jpg",
      "/images/scraped/101/img_5.jpg"
    ],
    "description": "➣Enjoy a default privacy screen protector (with impressive camera quality)\n➣Battery life is really strong \n➣Get a 3-month warranty & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 102,
    "name": "Airpod Pro 3",
    "category": "Accessories",
    "brand": "Airpod",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/102/img_1.jpg",
    "images": [
      "/images/scraped/102/img_1.jpg",
      "/images/scraped/102/img_2.jpg",
      "/images/scraped/102/img_3.jpg",
      "/images/scraped/102/img_4.jpg",
      "/images/scraped/102/img_5.jpg",
      "/images/scraped/102/img_6.jpg"
    ],
    "description": "➣Open box (original)\n➣Comes with 3 months warranty \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 103,
    "name": "Samsung Note 20 Ultra Screen",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/103/img_1.jpg",
    "images": [
      "/images/scraped/103/img_1.jpg",
      "/images/scraped/103/img_2.jpg",
      "/images/scraped/103/img_3.jpg",
      "/images/scraped/103/img_4.jpg",
      "/images/scraped/103/img_5.jpg",
      "/images/scraped/103/img_6.jpg",
      "/images/scraped/103/img_7.jpg",
      "/images/scraped/103/img_8.jpg"
    ],
    "description": "➣We have all kinds of original screen parts at a cool price.\n➣It comes with a free fixing service .\n➣Visit us at lapaz around the Tema station",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 104,
    "name": "Laptop Asus N550JK 8GB Intel Core I7 HDD+SSD 1T",
    "category": "Accessories",
    "brand": "Laptop",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/104/img_1.jpg",
    "images": [
      "/images/scraped/104/img_1.jpg",
      "/images/scraped/104/img_2.jpg",
      "/images/scraped/104/img_3.jpg",
      "/images/scraped/104/img_4.jpg",
      "/images/scraped/104/img_5.jpg",
      "/images/scraped/104/img_6.jpg",
      "/images/scraped/104/img_7.jpg",
      "/images/scraped/104/img_8.jpg",
      "/images/scraped/104/img_9.jpg"
    ],
    "description": "*Full description in the pictures . \n➣Get a 3-month warranty & free charger\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 105,
    "name": "Samsung Galaxy A25 256 GB Yellow",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/105/img_1.jpg",
    "images": [
      "/images/scraped/105/img_1.jpg",
      "/images/scraped/105/img_2.jpg",
      "/images/scraped/105/img_3.jpg",
      "/images/scraped/105/img_4.jpg",
      "/images/scraped/105/img_5.jpg",
      "/images/scraped/105/img_6.jpg",
      "/images/scraped/105/img_7.jpg",
      "/images/scraped/105/img_8.jpg"
    ],
    "description": "➣Very neat in good condition \n➣Battery life is really strong \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 106,
    "name": "Google Pixel 10 5G 128 GB Blue",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/106/img_1.jpg",
    "images": [
      "/images/scraped/106/img_1.jpg",
      "/images/scraped/106/img_2.jpg",
      "/images/scraped/106/img_3.jpg",
      "/images/scraped/106/img_4.jpg",
      "/images/scraped/106/img_5.jpg",
      "/images/scraped/106/img_6.jpg",
      "/images/scraped/106/img_7.jpg",
      "/images/scraped/106/img_8.jpg"
    ],
    "description": "*Swap/trade in is available \n➣It has impressive camera .\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 107,
    "name": "New Nothing Phone 3a 128 GB Black",
    "category": "Accessories",
    "brand": "Nothing",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/107/img_1.jpg",
    "images": [
      "/images/scraped/107/img_1.jpg",
      "/images/scraped/107/img_2.jpg",
      "/images/scraped/107/img_3.jpg",
      "/images/scraped/107/img_4.jpg"
    ],
    "description": "➣Out of box (comes with a free screen protector and case)\n➣Beautiful camera system(smooth user experience)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at(Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 108,
    "name": "New Google Pixel 10 128 GB Blue",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/108/img_1.jpg",
    "images": [
      "/images/scraped/108/img_1.jpg",
      "/images/scraped/108/img_2.jpg",
      "/images/scraped/108/img_3.jpg",
      "/images/scraped/108/img_4.jpg"
    ],
    "description": "*New (out of box )\n➣Esim unlocked (USA varaint)\n➣It offers one of the best camera systems in 2025(great performance).\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at(Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 109,
    "name": "Fossil Sports",
    "category": "Accessories",
    "brand": "Fossil",
    "price": "GHGH₵ 999",
    "image": "/images/scraped/109/img_1.jpg",
    "images": [
      "/images/scraped/109/img_1.jpg",
      "/images/scraped/109/img_2.jpg",
      "/images/scraped/109/img_3.jpg",
      "/images/scraped/109/img_4.jpg"
    ],
    "description": "➣Extremely neat in a good shape \n➣Visit us at lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 110,
    "name": "Google Pixel 10 Pro 128 GB Blue",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 9,499",
    "image": "/images/scraped/110/img_1.jpg",
    "images": [
      "/images/scraped/110/img_1.jpg",
      "/images/scraped/110/img_2.jpg",
      "/images/scraped/110/img_3.jpg",
      "/images/scraped/110/img_4.jpg",
      "/images/scraped/110/img_5.jpg",
      "/images/scraped/110/img_6.jpg"
    ],
    "description": "➣Almost new but no box\n➣Camera is so nice with an efficient performance \n➣Get a 3-month warranty,free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 111,
    "name": "Samsung Galaxy S25 Ultra 256 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 10,499",
    "image": "/images/scraped/111/img_1.jpg",
    "images": [
      "/images/scraped/111/img_1.jpg",
      "/images/scraped/111/img_2.jpg",
      "/images/scraped/111/img_3.jpg",
      "/images/scraped/111/img_4.jpg",
      "/images/scraped/111/img_5.jpg",
      "/images/scraped/111/img_6.jpg",
      "/images/scraped/111/img_7.jpg",
      "/images/scraped/111/img_8.jpg"
    ],
    "description": "➣Powered by Snapdragon 8 Elite\n➣Very neat in a good condition \n➣Battery is so strong \n➣Trade-in / Swap is possible.\r\n➣Comes with 3 month warranty, get free charger & wireles eaphone/ AirPod \n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Visit the shop at lapaz around Tema station",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 112,
    "name": "Samsung Galaxy S21 5G 128 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,699",
    "image": "/images/scraped/112/img_1.jpg",
    "images": [
      "/images/scraped/112/img_1.jpg",
      "/images/scraped/112/img_2.jpg",
      "/images/scraped/112/img_3.jpg",
      "/images/scraped/112/img_4.jpg",
      "/images/scraped/112/img_5.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life, and we have more colors in stock \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 113,
    "name": "Samsung Galaxy S22 Ultra 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/113/img_1.jpg",
    "images": [
      "/images/scraped/113/img_1.jpg",
      "/images/scraped/113/img_2.jpg",
      "/images/scraped/113/img_3.jpg",
      "/images/scraped/113/img_4.jpg",
      "/images/scraped/113/img_5.jpg",
      "/images/scraped/113/img_6.jpg",
      "/images/scraped/113/img_7.jpg",
      "/images/scraped/113/img_8.jpg"
    ],
    "description": "➣It's very neat and in excellent condition.\r\n➣Battery in very strong . \r\n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us .\r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit our shop or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 114,
    "name": "Samsung Galaxy S25 Edge 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/114/img_1.jpg",
    "images": [
      "/images/scraped/114/img_1.jpg",
      "/images/scraped/114/img_2.jpg",
      "/images/scraped/114/img_3.jpg",
      "/images/scraped/114/img_4.jpg",
      "/images/scraped/114/img_5.jpg",
      "/images/scraped/114/img_6.jpg",
      "/images/scraped/114/img_7.jpg",
      "/images/scraped/114/img_8.jpg"
    ],
    "description": "➣Thin and sleek smartphone(swap is allowed)\n➣Extremely neat with a strong battery life \n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 116,
    "name": "Samsung Galaxy S21 Ultra 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/116/img_1.jpg",
    "images": [
      "/images/scraped/116/img_1.jpg",
      "/images/scraped/116/img_2.jpg",
      "/images/scraped/116/img_3.jpg",
      "/images/scraped/116/img_4.jpg",
      "/images/scraped/116/img_5.jpg",
      "/images/scraped/116/img_6.jpg",
      "/images/scraped/116/img_7.jpg",
      "/images/scraped/116/img_8.jpg",
      "/images/scraped/116/img_9.jpg",
      "/images/scraped/116/img_10.jpg"
    ],
    "description": "➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 117,
    "name": "Samsung Galaxy S25 Ultra 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 10,499",
    "image": "/images/scraped/117/img_1.jpg",
    "images": [
      "/images/scraped/117/img_1.jpg",
      "/images/scraped/117/img_2.jpg",
      "/images/scraped/117/img_3.jpg",
      "/images/scraped/117/img_4.jpg",
      "/images/scraped/117/img_5.jpg",
      "/images/scraped/117/img_6.jpg",
      "/images/scraped/117/img_7.jpg",
      "/images/scraped/117/img_8.jpg"
    ],
    "description": "*One of the best phones on the market (improved gaming capabilities)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 118,
    "name": "Samsung Galaxy S22 Ultra 5G 128 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/118/img_1.jpg",
    "images": [
      "/images/scraped/118/img_1.jpg",
      "/images/scraped/118/img_2.jpg",
      "/images/scraped/118/img_3.jpg",
      "/images/scraped/118/img_4.jpg",
      "/images/scraped/118/img_5.jpg",
      "/images/scraped/118/img_6.jpg"
    ],
    "description": "*Installment plan (iPhones) is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Very neat and in good condition (preowned from Europe/USA).\n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 10GB of data from the MTN or AT for referring people to buy from us.\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 119,
    "name": "Samsung Galaxy Z Fold7 512 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 16,999",
    "image": "/images/scraped/119/img_1.jpg",
    "images": [
      "/images/scraped/119/img_1.jpg",
      "/images/scraped/119/img_2.jpg",
      "/images/scraped/119/img_3.jpg",
      "/images/scraped/119/img_4.jpg",
      "/images/scraped/119/img_5.jpg",
      "/images/scraped/119/img_6.jpg",
      "/images/scraped/119/img_7.jpg",
      "/images/scraped/119/img_8.jpg",
      "/images/scraped/119/img_9.jpg",
      "/images/scraped/119/img_10.jpg",
      "/images/scraped/119/img_11.jpg",
      "/images/scraped/119/img_12.jpg"
    ],
    "description": "➣It's very sleek (fast performance)\n➣Battery life is really great.\n➣It’s in great condition with a strong battery life \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 120,
    "name": "Samsung Galaxy S10 128 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/120/img_1.jpg",
    "images": [
      "/images/scraped/120/img_1.jpg",
      "/images/scraped/120/img_2.jpg",
      "/images/scraped/120/img_3.jpg",
      "/images/scraped/120/img_4.jpg",
      "/images/scraped/120/img_5.jpg",
      "/images/scraped/120/img_6.jpg"
    ],
    "description": "➣It's neat in a good shape \n➣Battery health is strong\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 121,
    "name": "Samsung Galaxy S25 FE 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/121/img_1.jpg",
    "images": [
      "/images/scraped/121/img_1.jpg",
      "/images/scraped/121/img_2.jpg",
      "/images/scraped/121/img_3.jpg",
      "/images/scraped/121/img_4.jpg",
      "/images/scraped/121/img_5.jpg",
      "/images/scraped/121/img_6.jpg"
    ],
    "description": "➣UK/USA used with a strong battery life (bulk) \n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 122,
    "name": "Laptop Apple MacBook Pro 2015 16GB Intel Core I7 SSD 1T",
    "category": "Accessories",
    "brand": "Laptop",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/122/img_1.jpg",
    "images": [
      "/images/scraped/122/img_1.jpg",
      "/images/scraped/122/img_2.jpg",
      "/images/scraped/122/img_3.jpg",
      "/images/scraped/122/img_4.jpg",
      "/images/scraped/122/img_5.jpg"
    ],
    "description": "➣Mid 2015 \n➣All features are listed above \n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 123,
    "name": "Google Pixel 8 128 GB",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/123/img_1.jpg",
    "images": [
      "/images/scraped/123/img_1.jpg",
      "/images/scraped/123/img_2.jpg",
      "/images/scraped/123/img_3.jpg",
      "/images/scraped/123/img_4.jpg",
      "/images/scraped/123/img_5.jpg",
      "/images/scraped/123/img_6.jpg"
    ],
    "description": "➣Very neat in a good condition \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 124,
    "name": "Samsung Galaxy S25 128 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/124/img_1.jpg",
    "images": [
      "/images/scraped/124/img_1.jpg",
      "/images/scraped/124/img_2.jpg",
      "/images/scraped/124/img_3.jpg",
      "/images/scraped/124/img_4.jpg",
      "/images/scraped/124/img_5.jpg",
      "/images/scraped/124/img_6.jpg",
      "/images/scraped/124/img_7.jpg",
      "/images/scraped/124/img_8.jpg"
    ],
    "description": "➣Comes in open box\n➣Powered by 8 Elite chipset (activating the best performance in a smartphone)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 125,
    "name": "Apple iPhone Air 256 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 10,999",
    "image": "/images/scraped/125/img_1.jpg",
    "images": [
      "/images/scraped/125/img_1.jpg",
      "/images/scraped/125/img_2.jpg",
      "/images/scraped/125/img_3.jpg",
      "/images/scraped/125/img_4.jpg",
      "/images/scraped/125/img_5.jpg",
      "/images/scraped/125/img_6.jpg"
    ],
    "description": "➣Uk /USA used (extremely neat)\n➣Bh is 97% to 100(in bulk)\n➣We have both physical and esim \n➣Comes in all colors (factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to MTN/AT by referring us to others\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 126,
    "name": "Samsung Galaxy Note 10 Plus 5G 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/126/img_1.jpg",
    "images": [
      "/images/scraped/126/img_1.jpg",
      "/images/scraped/126/img_2.jpg",
      "/images/scraped/126/img_3.jpg",
      "/images/scraped/126/img_4.jpg",
      "/images/scraped/126/img_5.jpg",
      "/images/scraped/126/img_6.jpg",
      "/images/scraped/126/img_7.jpg",
      "/images/scraped/126/img_8.jpg"
    ],
    "description": "➣It's very neat and in good condition \n➣Battery is really strong \n➣Ge a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 127,
    "name": "Samsung Galaxy S10 Plus 128 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/127/img_1.jpg",
    "images": [
      "/images/scraped/127/img_1.jpg",
      "/images/scraped/127/img_2.jpg",
      "/images/scraped/127/img_3.jpg",
      "/images/scraped/127/img_4.jpg",
      "/images/scraped/127/img_5.jpg",
      "/images/scraped/127/img_6.jpg"
    ],
    "description": "➣It's very neat in a good condition \n➣Battery is really strong \n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 128,
    "name": "New Samsung Galaxy Z Flip7 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/128/img_1.jpg",
    "images": [
      "/images/scraped/128/img_1.jpg",
      "/images/scraped/128/img_2.jpg",
      "/images/scraped/128/img_3.jpg",
      "/images/scraped/128/img_4.jpg",
      "/images/scraped/128/img_5.jpg",
      "/images/scraped/128/img_6.jpg",
      "/images/scraped/128/img_7.jpg",
      "/images/scraped/128/img_8.jpg",
      "/images/scraped/128/img_9.jpg",
      "/images/scraped/128/img_10.jpg"
    ],
    "description": "*New with box but not sealed \n➣Most influential tech youtuber named it as the \"best small phone of 2025-2026\"\n➣The battery is really strong\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 129,
    "name": "Samsung Galaxy S24 128 GB Silver",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/129/img_1.jpg",
    "images": [
      "/images/scraped/129/img_1.jpg",
      "/images/scraped/129/img_2.jpg",
      "/images/scraped/129/img_3.jpg",
      "/images/scraped/129/img_4.jpg",
      "/images/scraped/129/img_5.jpg",
      "/images/scraped/129/img_6.jpg"
    ],
    "description": "➣Pre-owned from USA /Uk.\n➣HQ camera and has a strong battery life \n➣Preinstalled One Ui\n➣Get a 3-month warranty, free charger & wireless earphones \n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\n➣Read reviews for immediate decision\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 130,
    "name": "Samsung Galaxy S20 Ultra 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/130/img_1.jpg",
    "images": [
      "/images/scraped/130/img_1.jpg",
      "/images/scraped/130/img_2.jpg",
      "/images/scraped/130/img_3.jpg",
      "/images/scraped/130/img_4.jpg",
      "/images/scraped/130/img_5.jpg",
      "/images/scraped/130/img_6.jpg",
      "/images/scraped/130/img_7.jpg",
      "/images/scraped/130/img_8.jpg"
    ],
    "description": "➣Battery life is strong \n➣Comes with a 3-month warranty,free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Read reviews for immediate decision\r\n➣Visit the store at Lapaz or choose pa",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 131,
    "name": "Samsung Galaxy S23 Plus 512 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/131/img_1.jpg",
    "images": [
      "/images/scraped/131/img_1.jpg",
      "/images/scraped/131/img_2.jpg",
      "/images/scraped/131/img_3.jpg",
      "/images/scraped/131/img_4.jpg",
      "/images/scraped/131/img_5.jpg",
      "/images/scraped/131/img_6.jpg",
      "/images/scraped/131/img_7.jpg",
      "/images/scraped/131/img_8.jpg"
    ],
    "description": "*Powered by snapdragon 8 gen 3 (for boost performance)\n➣It's very neat in a good condition \n➣Battery life is great\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 132,
    "name": "Samsung Galaxy S24 Plus 512 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/132/img_1.jpg",
    "images": [
      "/images/scraped/132/img_1.jpg",
      "/images/scraped/132/img_2.jpg",
      "/images/scraped/132/img_3.jpg",
      "/images/scraped/132/img_4.jpg",
      "/images/scraped/132/img_5.jpg",
      "/images/scraped/132/img_6.jpg",
      "/images/scraped/132/img_7.jpg",
      "/images/scraped/132/img_8.jpg"
    ],
    "description": "➣Slightly used from UK & USA (available in all colors)\n➣Faster performance, HQ camera and strong battery life .\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 133,
    "name": "New Samsung Galaxy S25 256 GB Silver",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/133/img_1.jpg",
    "images": [
      "/images/scraped/133/img_1.jpg",
      "/images/scraped/133/img_2.jpg",
      "/images/scraped/133/img_3.jpg",
      "/images/scraped/133/img_4.jpg",
      "/images/scraped/133/img_5.jpg",
      "/images/scraped/133/img_6.jpg",
      "/images/scraped/133/img_7.jpg",
      "/images/scraped/133/img_8.jpg"
    ],
    "description": "➣Out of box \n➣Battery life is really good \n➣Get a 3-month warranty, free charger, and wireless earphones.\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews to make an immediate decision.\n➣Visit the store in Lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 134,
    "name": "Samsung Galaxy S22+ 5G 128 GB Green",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/134/img_1.jpg",
    "images": [
      "/images/scraped/134/img_1.jpg",
      "/images/scraped/134/img_2.jpg",
      "/images/scraped/134/img_3.jpg",
      "/images/scraped/134/img_4.jpg",
      "/images/scraped/134/img_5.jpg",
      "/images/scraped/134/img_6.jpg"
    ],
    "description": "➣Pre-owned from USA & UK(very neat).\n➣Comes in all colors \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 135,
    "name": "Samsung Galaxy Z Fold 3 256 GB Pink",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/135/img_1.jpg",
    "images": [
      "/images/scraped/135/img_1.jpg",
      "/images/scraped/135/img_2.jpg",
      "/images/scraped/135/img_3.jpg",
      "/images/scraped/135/img_4.jpg",
      "/images/scraped/135/img_5.jpg",
      "/images/scraped/135/img_6.jpg"
    ],
    "description": "➣Everything works perfectly\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 136,
    "name": "Samsung Galaxy Z Fold7 256 GB Silver",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 15,999",
    "image": "/images/scraped/136/img_1.jpg",
    "images": [
      "/images/scraped/136/img_1.jpg",
      "/images/scraped/136/img_2.jpg",
      "/images/scraped/136/img_3.jpg",
      "/images/scraped/136/img_4.jpg",
      "/images/scraped/136/img_5.jpg",
      "/images/scraped/136/img_6.jpg",
      "/images/scraped/136/img_7.jpg",
      "/images/scraped/136/img_8.jpg"
    ],
    "description": "➣It's very sleek \n➣Battery life is really great.\n➣It’s in great condition with a strong battery life and a built-in S pen \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 137,
    "name": "Samsung Crystal Uhd 50\"",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/137/img_1.jpg",
    "images": [
      "/images/scraped/137/img_1.jpg",
      "/images/scraped/137/img_2.jpg",
      "/images/scraped/137/img_3.jpg",
      "/images/scraped/137/img_4.jpg",
      "/images/scraped/137/img_5.jpg",
      "/images/scraped/137/img_6.jpg",
      "/images/scraped/137/img_7.jpg",
      "/images/scraped/137/img_8.jpg"
    ],
    "description": "➣4K Resolution with Crystal Processor 4K\r\n➣Gaming Features: The CU7190 includes Motion Xcelerator and more \n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 138,
    "name": "Samsung Galaxy S25+ 256 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/138/img_1.jpg",
    "images": [
      "/images/scraped/138/img_1.jpg",
      "/images/scraped/138/img_2.jpg",
      "/images/scraped/138/img_3.jpg",
      "/images/scraped/138/img_4.jpg",
      "/images/scraped/138/img_5.jpg",
      "/images/scraped/138/img_6.jpg",
      "/images/scraped/138/img_7.jpg",
      "/images/scraped/138/img_8.jpg",
      "/images/scraped/138/img_9.jpg"
    ],
    "description": "➣Equipped with a Snapdragon 8 Elite chipset, allowing a smooth user experience and nice camera.\n➣Get a 3-month warranty, free charger, and wireless earphones.\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews to make an immediate decision.\n➣Visit the store in Lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 139,
    "name": "Hp Prodesk 405 G4 (Gaming)",
    "category": "Accessories",
    "brand": "Hp",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/139/img_1.jpg",
    "images": [
      "/images/scraped/139/img_1.jpg",
      "/images/scraped/139/img_2.jpg",
      "/images/scraped/139/img_3.jpg",
      "/images/scraped/139/img_4.jpg",
      "/images/scraped/139/img_5.jpg",
      "/images/scraped/139/img_6.jpg"
    ],
    "description": "*Lenovo thinkpad MT 11R8 (gaming machine)\n➣CPU: AMD Ryzen 5 PRO 2500U (2.0-3.6 GHz) \n➣RAM: 8GB DDR4 \n➣Storage: 256GB SSD \n➣ Display: 11.6\" HD IPS \n➣Graphics: Radeon Vega 8 \n➣Ports: 2x USB 3.1, USB-C, HDMI, RJ-45, microSD \n➣OS: Windows 10 Pro \n➣Get a 3-month warranty & and a free charger \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 140,
    "name": "Samsung Galaxy S23 Ultra 256 GB Green",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/140/img_1.jpg",
    "images": [
      "/images/scraped/140/img_1.jpg",
      "/images/scraped/140/img_2.jpg",
      "/images/scraped/140/img_3.jpg",
      "/images/scraped/140/img_4.jpg",
      "/images/scraped/140/img_5.jpg",
      "/images/scraped/140/img_6.jpg",
      "/images/scraped/140/img_7.jpg",
      "/images/scraped/140/img_8.jpg",
      "/images/scraped/140/img_9.jpg"
    ],
    "description": "It's very neat and in good condition .\n➣8k video capture @ 30fps\n➣8 gen 2 Snapdragon\n➣Integrated S Pen\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 141,
    "name": "Samsung Galaxy S24 Ultra 256 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/141/img_1.jpg",
    "images": [
      "/images/scraped/141/img_1.jpg",
      "/images/scraped/141/img_2.jpg",
      "/images/scraped/141/img_3.jpg",
      "/images/scraped/141/img_4.jpg",
      "/images/scraped/141/img_5.jpg",
      "/images/scraped/141/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life\n➣Swap/trade in is allowed\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 142,
    "name": "Samsung Galaxy S25+ 256 GB Green",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/142/img_1.jpg",
    "images": [
      "/images/scraped/142/img_1.jpg",
      "/images/scraped/142/img_2.jpg",
      "/images/scraped/142/img_3.jpg",
      "/images/scraped/142/img_4.jpg",
      "/images/scraped/142/img_5.jpg",
      "/images/scraped/142/img_6.jpg"
    ],
    "description": "➣Very neat in a good shape (swap allowed)\n➣Great camera with a strong battery life\n➣Get a 3-month warranty, free charger, and wireless earphones.\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews to make an immediate decision.\n➣Visit the store in Lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 143,
    "name": "Samsung Galaxy S22 Ultra 5G 512 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/143/img_1.jpg",
    "images": [
      "/images/scraped/143/img_1.jpg",
      "/images/scraped/143/img_2.jpg",
      "/images/scraped/143/img_3.jpg",
      "/images/scraped/143/img_4.jpg",
      "/images/scraped/143/img_5.jpg",
      "/images/scraped/143/img_6.jpg",
      "/images/scraped/143/img_7.jpg",
      "/images/scraped/143/img_8.jpg"
    ],
    "description": "➣It's very neat with a great battery life\n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣And also receive 30GB of data to networks by referring people to us \r\n➣Discover the reasons to choose us via reviews\r\n➣ Visit the store at lapaz around Tema station store or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 144,
    "name": "Samsung Galaxy S22+ 5G 256 GB Green",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/144/img_1.jpg",
    "images": [
      "/images/scraped/144/img_1.jpg",
      "/images/scraped/144/img_2.jpg",
      "/images/scraped/144/img_3.jpg",
      "/images/scraped/144/img_4.jpg",
      "/images/scraped/144/img_5.jpg",
      "/images/scraped/144/img_6.jpg"
    ],
    "description": "➣Great performance with a strong battery life (available in all colors).\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Also received 30GB of data to all networks by referring people to buy from us \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 145,
    "name": "Apple iPhone 14 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/145/img_1.jpg",
    "images": [
      "/images/scraped/145/img_1.jpg",
      "/images/scraped/145/img_2.jpg",
      "/images/scraped/145/img_3.jpg",
      "/images/scraped/145/img_4.jpg",
      "/images/scraped/145/img_5.jpg",
      "/images/scraped/145/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Factory unlocked \n➣Battery health is 90+(available in all colors)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣➣Also, get 10GB of data to all networks by referring us to others \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 146,
    "name": "Samsung Galaxy A15 128 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 1,699",
    "image": "/images/scraped/146/img_1.jpg",
    "images": [
      "/images/scraped/146/img_1.jpg",
      "/images/scraped/146/img_2.jpg",
      "/images/scraped/146/img_3.jpg",
      "/images/scraped/146/img_4.jpg",
      "/images/scraped/146/img_5.jpg",
      "/images/scraped/146/img_6.jpg",
      "/images/scraped/146/img_7.jpg",
      "/images/scraped/146/img_8.jpg",
      "/images/scraped/146/img_9.jpg"
    ],
    "description": "➣All-day battery life device . \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 147,
    "name": "Samsung Galaxy S24 Ultra 512 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 9,499",
    "image": "/images/scraped/147/img_1.jpg",
    "images": [
      "/images/scraped/147/img_1.jpg",
      "/images/scraped/147/img_2.jpg",
      "/images/scraped/147/img_3.jpg",
      "/images/scraped/147/img_4.jpg",
      "/images/scraped/147/img_5.jpg",
      "/images/scraped/147/img_6.jpg"
    ],
    "description": "➣very neat and in good condition \n➣8k video capture @ 30fps\n➣8 gen 3 processor for Galaxy \n➣Integrated S Pen.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 148,
    "name": "Samsung Galaxy S22 Ultra 5G 128 GB Bronze",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/148/img_1.jpg",
    "images": [
      "/images/scraped/148/img_1.jpg",
      "/images/scraped/148/img_2.jpg",
      "/images/scraped/148/img_3.jpg",
      "/images/scraped/148/img_4.jpg",
      "/images/scraped/148/img_5.jpg",
      "/images/scraped/148/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life and has a built-in Spen \r\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 149,
    "name": "Samsung Galaxy S25 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/149/img_1.jpg",
    "images": [
      "/images/scraped/149/img_1.jpg",
      "/images/scraped/149/img_2.jpg",
      "/images/scraped/149/img_3.jpg",
      "/images/scraped/149/img_4.jpg"
    ],
    "description": "➣It's extremely neat as new(swap is allowed)\n➣Great performance with a beautiful camera.\n➣Get a 3-month warranty, free charger, and wireless earphones.\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews to make an immediate decision.\n➣Visit the store in Lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 150,
    "name": "Apple iPhone 17 Pro Max 256 GB Orange",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 15,999",
    "image": "/images/scraped/150/img_1.jpg",
    "images": [
      "/images/scraped/150/img_1.jpg",
      "/images/scraped/150/img_2.jpg",
      "/images/scraped/150/img_3.jpg",
      "/images/scraped/150/img_4.jpg",
      "/images/scraped/150/img_5.jpg",
      "/images/scraped/150/img_6.jpg",
      "/images/scraped/150/img_7.jpg",
      "/images/scraped/150/img_8.jpg"
    ],
    "description": "*Swap is allowed \n➣Comes with the box (battery health is 100%)\n➣Factory unlocked with a physical sim slot (very neat with no single dent)\n➣Get a 3-month warranty & a free wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 151,
    "name": "Samsung Galaxy S21 5G 128 GB Purple",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,699",
    "image": "/images/scraped/151/img_1.jpg",
    "images": [
      "/images/scraped/151/img_1.jpg",
      "/images/scraped/151/img_2.jpg",
      "/images/scraped/151/img_3.jpg",
      "/images/scraped/151/img_4.jpg",
      "/images/scraped/151/img_5.jpg",
      "/images/scraped/151/img_6.jpg"
    ],
    "description": "➣ Preowned from Europe/USA\n➣ High performance (supports One Ui 7).\n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 152,
    "name": "Google Pixel 7 128 GB Gold",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/152/img_1.jpg",
    "images": [
      "/images/scraped/152/img_1.jpg",
      "/images/scraped/152/img_2.jpg",
      "/images/scraped/152/img_3.jpg",
      "/images/scraped/152/img_4.jpg",
      "/images/scraped/152/img_5.jpg",
      "/images/scraped/152/img_6.jpg",
      "/images/scraped/152/img_7.jpg",
      "/images/scraped/152/img_8.jpg"
    ],
    "description": "➣It's very neat and in good condition\n➣The battery is really strong \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 153,
    "name": "Apple Watch \"Series 10\" (Cellular)",
    "category": "Accessories",
    "brand": "Apple",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/153/img_1.jpg",
    "images": [
      "/images/scraped/153/img_1.jpg",
      "/images/scraped/153/img_2.jpg",
      "/images/scraped/153/img_3.jpg",
      "/images/scraped/153/img_4.jpg",
      "/images/scraped/153/img_5.jpg",
      "/images/scraped/153/img_6.jpg"
    ],
    "description": "➣We have them in all kinds(cellular)\n➣Battery healh is above 90%\n➣Comes with a free charger plus enjoy 3 months warranty \n➣Visit us the store at Lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 154,
    "name": "Apple iPhone 16 Plus 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 8,800",
    "image": "/images/scraped/154/img_1.jpg",
    "images": [
      "/images/scraped/154/img_1.jpg",
      "/images/scraped/154/img_2.jpg",
      "/images/scraped/154/img_3.jpg",
      "/images/scraped/154/img_4.jpg",
      "/images/scraped/154/img_5.jpg",
      "/images/scraped/154/img_6.jpg"
    ],
    "description": "➣Battery health is 90% and above (factory unlocked)\n➣It's extremely neat (physical sim variant)\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 155,
    "name": "Samsung Galaxy S23 FE 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/155/img_1.jpg",
    "images": [
      "/images/scraped/155/img_1.jpg",
      "/images/scraped/155/img_2.jpg",
      "/images/scraped/155/img_3.jpg",
      "/images/scraped/155/img_4.jpg"
    ],
    "description": "➣It's very neat and in good condition \n➣Enjoy all-day battery life \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 156,
    "name": "Samsung Galaxy S20+ 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/156/img_1.jpg",
    "images": [
      "/images/scraped/156/img_1.jpg",
      "/images/scraped/156/img_2.jpg",
      "/images/scraped/156/img_3.jpg",
      "/images/scraped/156/img_4.jpg",
      "/images/scraped/156/img_5.jpg",
      "/images/scraped/156/img_6.jpg"
    ],
    "description": "➣It's very neat and in a good condition \n➣Battery is very strong and its equipped with all smart features \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 157,
    "name": "Samsung Galaxy S24 Plus 256 GB Purple",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/157/img_1.jpg",
    "images": [
      "/images/scraped/157/img_1.jpg",
      "/images/scraped/157/img_2.jpg",
      "/images/scraped/157/img_3.jpg",
      "/images/scraped/157/img_4.jpg",
      "/images/scraped/157/img_5.jpg",
      "/images/scraped/157/img_6.jpg",
      "/images/scraped/157/img_7.jpg",
      "/images/scraped/157/img_8.jpg"
    ],
    "description": "➣It’s in great condition\n➣Triple rear cameras (50MP main, 12MP ultra-wide, 10MP telephoto)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 158,
    "name": "Samsung Galaxy S24 Ultra 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/158/img_1.jpg",
    "images": [
      "/images/scraped/158/img_1.jpg",
      "/images/scraped/158/img_2.jpg",
      "/images/scraped/158/img_3.jpg",
      "/images/scraped/158/img_4.jpg",
      "/images/scraped/158/img_5.jpg",
      "/images/scraped/158/img_6.jpg",
      "/images/scraped/158/img_7.jpg",
      "/images/scraped/158/img_8.jpg"
    ],
    "description": "➣Comes with the box\n➣Best smartphone in 2024 \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 159,
    "name": "Samsung Galaxy S24 Ultra 256 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/159/img_1.jpg",
    "images": [
      "/images/scraped/159/img_1.jpg",
      "/images/scraped/159/img_2.jpg",
      "/images/scraped/159/img_3.jpg",
      "/images/scraped/159/img_4.jpg",
      "/images/scraped/159/img_5.jpg",
      "/images/scraped/159/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life\n➣Swap/ trade-in is allowed\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) opposite of fraga oil or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 160,
    "name": "Apple iPhone 13 Pro 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/160/img_1.jpg",
    "images": [
      "/images/scraped/160/img_1.jpg",
      "/images/scraped/160/img_2.jpg",
      "/images/scraped/160/img_3.jpg",
      "/images/scraped/160/img_4.jpg",
      "/images/scraped/160/img_5.jpg",
      "/images/scraped/160/img_6.jpg",
      "/images/scraped/160/img_7.jpg",
      "/images/scraped/160/img_8.jpg"
    ],
    "description": "➣Very neat in a good condition (factory unlocked).\n➣The battery health is around 90% (available in all colors).\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz)or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 161,
    "name": "Samsung Galaxy S23 Ultra 256 GB Pink",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/161/img_1.jpg",
    "images": [
      "/images/scraped/161/img_1.jpg",
      "/images/scraped/161/img_2.jpg",
      "/images/scraped/161/img_3.jpg",
      "/images/scraped/161/img_4.jpg",
      "/images/scraped/161/img_5.jpg",
      "/images/scraped/161/img_6.jpg",
      "/images/scraped/161/img_7.jpg",
      "/images/scraped/161/img_8.jpg",
      "/images/scraped/161/img_9.jpg"
    ],
    "description": "➣Pre-owned from Europe/USA(available in all colors)\n➣It has strong battery life .\n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Discover our review section for decision\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 162,
    "name": "Samsung Galaxy Note 20 Ultra 5G 256 GB Bronze",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,299",
    "image": "/images/scraped/162/img_1.jpg",
    "images": [
      "/images/scraped/162/img_1.jpg",
      "/images/scraped/162/img_2.jpg",
      "/images/scraped/162/img_3.jpg",
      "/images/scraped/162/img_4.jpg"
    ],
    "description": "➣Also available and black and white\n➣Battery life is really great and equipped with S Pen.\n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for easy decision if you doubt.\r\n➣ Visit the store at lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 163,
    "name": "Samsung Galaxy S10 Plus 128 GB Orange",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/163/img_1.jpg",
    "images": [
      "/images/scraped/163/img_1.jpg",
      "/images/scraped/163/img_2.jpg",
      "/images/scraped/163/img_3.jpg",
      "/images/scraped/163/img_4.jpg"
    ],
    "description": "➣It's extremely neat and in good condition .\n➣A high-performance device with a strong battery life .\r\n➣Get a 3-month warranty, free charger & wireless earphones.\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision .\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 164,
    "name": "Samsung Galaxy Note 20 Ultra 128 GB Bronze",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/164/img_1.jpg",
    "images": [
      "/images/scraped/164/img_1.jpg",
      "/images/scraped/164/img_2.jpg",
      "/images/scraped/164/img_3.jpg",
      "/images/scraped/164/img_4.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life and a built-in S pen \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Swap/trade in is allowed\r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 165,
    "name": "Samsung Galaxy S23 Ultra 512 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/165/img_1.jpg",
    "images": [
      "/images/scraped/165/img_1.jpg",
      "/images/scraped/165/img_2.jpg",
      "/images/scraped/165/img_3.jpg",
      "/images/scraped/165/img_4.jpg",
      "/images/scraped/165/img_5.jpg",
      "/images/scraped/165/img_6.jpg",
      "/images/scraped/165/img_7.jpg",
      "/images/scraped/165/img_8.jpg"
    ],
    "description": "➣It's very neat with a strong battery life \n➣Powered by Snapdragon 8 gen 2 and runs on One UI 7 (great performance)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 166,
    "name": "Apple iPhone 13 128 GB Pink",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/166/img_1.jpg",
    "images": [
      "/images/scraped/166/img_1.jpg",
      "/images/scraped/166/img_2.jpg",
      "/images/scraped/166/img_3.jpg",
      "/images/scraped/166/img_4.jpg",
      "/images/scraped/166/img_5.jpg",
      "/images/scraped/166/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Battery health is over 90%(very neat)\n➣Comes in all colors (factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to MTN/AT by referring us to others\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 167,
    "name": "Google Pixel 7a 128 GB Blue",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/167/img_1.jpg",
    "images": [
      "/images/scraped/167/img_1.jpg",
      "/images/scraped/167/img_2.jpg",
      "/images/scraped/167/img_3.jpg",
      "/images/scraped/167/img_4.jpg",
      "/images/scraped/167/img_5.jpg",
      "/images/scraped/167/img_6.jpg",
      "/images/scraped/167/img_7.jpg",
      "/images/scraped/167/img_8.jpg"
    ],
    "description": "➣It's extremely neat and in good condition \n➣The battery is really strong \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 168,
    "name": "Samsung Galaxy S20 Ultra 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/168/img_1.jpg",
    "images": [
      "/images/scraped/168/img_1.jpg",
      "/images/scraped/168/img_2.jpg",
      "/images/scraped/168/img_3.jpg",
      "/images/scraped/168/img_4.jpg",
      "/images/scraped/168/img_5.jpg",
      "/images/scraped/168/img_6.jpg",
      "/images/scraped/168/img_7.jpg",
      "/images/scraped/168/img_8.jpg",
      "/images/scraped/168/img_9.jpg"
    ],
    "description": "➣The camera looks great.\r\n➣It’s in great condition with a strong battery life\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 169,
    "name": "Google Pixel 9 Pro XL 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/169/img_1.jpg",
    "images": [
      "/images/scraped/169/img_1.jpg",
      "/images/scraped/169/img_2.jpg",
      "/images/scraped/169/img_3.jpg",
      "/images/scraped/169/img_4.jpg",
      "/images/scraped/169/img_5.jpg",
      "/images/scraped/169/img_6.jpg"
    ],
    "description": "➣Very neat in a good condition.\n➣The battery life and camera is so great \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Discover more about us via reviews,\r\n➣ Visit the store at lapaz or pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 170,
    "name": "Samsung Galaxy A17 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/170/img_1.jpg",
    "images": [
      "/images/scraped/170/img_1.jpg",
      "/images/scraped/170/img_2.jpg",
      "/images/scraped/170/img_3.jpg",
      "/images/scraped/170/img_4.jpg",
      "/images/scraped/170/img_5.jpg",
      "/images/scraped/170/img_6.jpg"
    ],
    "description": "➣Very neat in good shape \n➣Battery is really strong \n➣Comes in all colors (factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to MTN/AT by referring us to others\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 171,
    "name": "Samsung Galaxy S22 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,799",
    "image": "/images/scraped/171/img_1.jpg",
    "images": [
      "/images/scraped/171/img_1.jpg",
      "/images/scraped/171/img_2.jpg",
      "/images/scraped/171/img_3.jpg",
      "/images/scraped/171/img_4.jpg",
      "/images/scraped/171/img_5.jpg",
      "/images/scraped/171/img_6.jpg"
    ],
    "description": "➣Very neat in a good shape \n➣Battery is strong \n➣Get a 3-month warranty, free charger, and wireless earphones.\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews to make an immediate decision.\n➣Visit the store in Lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 172,
    "name": "Google Pixel 9 Pro XL 256 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/172/img_1.jpg",
    "images": [
      "/images/scraped/172/img_1.jpg",
      "/images/scraped/172/img_2.jpg",
      "/images/scraped/172/img_3.jpg",
      "/images/scraped/172/img_4.jpg",
      "/images/scraped/172/img_5.jpg",
      "/images/scraped/172/img_6.jpg",
      "/images/scraped/172/img_7.jpg",
      "/images/scraped/172/img_8.jpg"
    ],
    "description": "➣It's very neat in good shape \n➣Battery is really strong (great camera)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 173,
    "name": "Airpod Max 2 (2024)",
    "category": "Accessories",
    "brand": "Airpod",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/173/img_1.jpg",
    "images": [
      "/images/scraped/173/img_1.jpg",
      "/images/scraped/173/img_2.jpg",
      "/images/scraped/173/img_3.jpg",
      "/images/scraped/173/img_4.jpg",
      "/images/scraped/173/img_5.jpg",
      "/images/scraped/173/img_6.jpg"
    ],
    "description": "Almost new .\n➣20hr battery to enjoy a quality sound \n➣Get a 3-month warranty and a free charger\n➣Also, get 30GB of data to all networks by referring us to others \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 174,
    "name": "Samsung Galaxy S22 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,799",
    "image": "/images/scraped/174/img_1.jpg",
    "images": [
      "/images/scraped/174/img_1.jpg",
      "/images/scraped/174/img_2.jpg",
      "/images/scraped/174/img_3.jpg",
      "/images/scraped/174/img_4.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life\n➣Available in all chipsets \n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 175,
    "name": "New Samsung Galaxy S26 Ultra 5G 256 GB",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 14,999",
    "image": "/images/scraped/175/img_1.jpg",
    "images": [
      "/images/scraped/175/img_1.jpg",
      "/images/scraped/175/img_2.jpg",
      "/images/scraped/175/img_3.jpg",
      "/images/scraped/175/img_4.jpg"
    ],
    "description": "Trade-in/swap is allowed \n➣Get a 3-month warranty & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 176,
    "name": "Ps5 1tb Console",
    "category": "Accessories",
    "brand": "Ps5",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/176/img_1.jpg",
    "images": [
      "/images/scraped/176/img_1.jpg",
      "/images/scraped/176/img_2.jpg",
      "/images/scraped/176/img_3.jpg",
      "/images/scraped/176/img_4.jpg",
      "/images/scraped/176/img_5.jpg",
      "/images/scraped/176/img_6.jpg"
    ],
    "description": "➣Very neat and in a perfect condition \n➣Comes with FC 25 offline plus one controllers.\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 177,
    "name": "Samsung Galaxy A16 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/177/img_1.jpg",
    "images": [
      "/images/scraped/177/img_1.jpg",
      "/images/scraped/177/img_2.jpg",
      "/images/scraped/177/img_3.jpg",
      "/images/scraped/177/img_4.jpg",
      "/images/scraped/177/img_5.jpg",
      "/images/scraped/177/img_6.jpg"
    ],
    "description": "➣It's in great condition but not too neat.\n➣Strong battery life with pre installed One Ui 7 OS.\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision\n➣Visit us at Lapaz opposite the fraga oil",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 178,
    "name": "Samsung Galaxy Note 20 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/178/img_1.jpg",
    "images": [
      "/images/scraped/178/img_1.jpg",
      "/images/scraped/178/img_2.jpg",
      "/images/scraped/178/img_3.jpg",
      "/images/scraped/178/img_4.jpg",
      "/images/scraped/178/img_5.jpg",
      "/images/scraped/178/img_6.jpg"
    ],
    "description": "➣Very neat and in a good condition \n➣It's takes a very nice pictures and equipped with a strong battery life \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 179,
    "name": "Samsung Galaxy Z Flip4 256 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/179/img_1.jpg",
    "images": [
      "/images/scraped/179/img_1.jpg",
      "/images/scraped/179/img_2.jpg",
      "/images/scraped/179/img_3.jpg",
      "/images/scraped/179/img_4.jpg",
      "/images/scraped/179/img_5.jpg",
      "/images/scraped/179/img_6.jpg"
    ],
    "description": "➣Very neat in a good condition \n➣Battery life is strong \r\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 180,
    "name": "Apple iPhone 14 Plus 256 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/180/img_1.jpg",
    "images": [
      "/images/scraped/180/img_1.jpg",
      "/images/scraped/180/img_2.jpg",
      "/images/scraped/180/img_3.jpg",
      "/images/scraped/180/img_4.jpg",
      "/images/scraped/180/img_5.jpg",
      "/images/scraped/180/img_6.jpg",
      "/images/scraped/180/img_7.jpg",
      "/images/scraped/180/img_8.jpg"
    ],
    "description": "➣It's very neat & factory unlocked(sim slot)\n➣Battery health is above 90%.\n➣ It has the best battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 182,
    "name": "Samsung Galaxy Z Fold 3 512 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/182/img_1.jpg",
    "images": [
      "/images/scraped/182/img_1.jpg",
      "/images/scraped/182/img_2.jpg",
      "/images/scraped/182/img_3.jpg",
      "/images/scraped/182/img_4.jpg",
      "/images/scraped/182/img_5.jpg",
      "/images/scraped/182/img_6.jpg",
      "/images/scraped/182/img_7.jpg",
      "/images/scraped/182/img_8.jpg",
      "/images/scraped/182/img_9.jpg",
      "/images/scraped/182/img_10.jpg"
    ],
    "description": "➣It's very neat and in good condition \n➣The battery life is really strong and equipped with a nice camera system\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 183,
    "name": "Apple iPhone 15 Plus 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/183/img_1.jpg",
    "images": [
      "/images/scraped/183/img_1.jpg",
      "/images/scraped/183/img_2.jpg",
      "/images/scraped/183/img_3.jpg",
      "/images/scraped/183/img_4.jpg",
      "/images/scraped/183/img_5.jpg",
      "/images/scraped/183/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣It's very neat with a battery health of 90-95%.\n➣Factory unlocked.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or AT for referring people to buy from us . \n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 184,
    "name": "Apple iPhone 15 Pro 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/184/img_1.jpg",
    "images": [
      "/images/scraped/184/img_1.jpg",
      "/images/scraped/184/img_2.jpg",
      "/images/scraped/184/img_3.jpg",
      "/images/scraped/184/img_4.jpg",
      "/images/scraped/184/img_5.jpg",
      "/images/scraped/184/img_6.jpg"
    ],
    "description": "➣UK/USA used, and it's very neat (factory unlocked)\n➣Battery health ranges from 90 to 98%\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 185,
    "name": "Samsung Galaxy S24 Ultra 256 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 8,499",
    "image": "/images/scraped/185/img_1.jpg",
    "images": [
      "/images/scraped/185/img_1.jpg",
      "/images/scraped/185/img_2.jpg",
      "/images/scraped/185/img_3.jpg",
      "/images/scraped/185/img_4.jpg",
      "/images/scraped/185/img_5.jpg",
      "/images/scraped/185/img_6.jpg",
      "/images/scraped/185/img_7.jpg",
      "/images/scraped/185/img_8.jpg",
      "/images/scraped/185/img_9.jpg"
    ],
    "description": "●Top reviewers \"best Android phone on the market \",packed with all features .\n➣It’s in great condition.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 186,
    "name": "Apple iPhone 14 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,299",
    "image": "/images/scraped/186/img_1.jpg",
    "images": [
      "/images/scraped/186/img_1.jpg",
      "/images/scraped/186/img_2.jpg",
      "/images/scraped/186/img_3.jpg",
      "/images/scraped/186/img_4.jpg"
    ],
    "description": "➣It’s in great condition with a battery health of 90-95 %\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 187,
    "name": "Samsung Galaxy S22 Ultra 5G 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/187/img_1.jpg",
    "images": [
      "/images/scraped/187/img_1.jpg",
      "/images/scraped/187/img_2.jpg",
      "/images/scraped/187/img_3.jpg",
      "/images/scraped/187/img_4.jpg",
      "/images/scraped/187/img_5.jpg",
      "/images/scraped/187/img_6.jpg"
    ],
    "description": "➣USA / UK variant \r\n➣It’s in great condition with a strong battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 188,
    "name": "Apple iPhone 16 128 GB",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/188/img_1.jpg",
    "images": [
      "/images/scraped/188/img_1.jpg",
      "/images/scraped/188/img_2.jpg",
      "/images/scraped/188/img_3.jpg",
      "/images/scraped/188/img_4.jpg",
      "/images/scraped/188/img_5.jpg",
      "/images/scraped/188/img_6.jpg"
    ],
    "description": "➣Very neat (UK /USA) variants ,\"factory unlocked\" with sim.\n➣Battery health is 90% and above(get it in all colors).\n➣Get a 3-month warranty,free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 189,
    "name": "Apple iPhone 12 Pro 128 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/189/img_1.jpg",
    "images": [
      "/images/scraped/189/img_1.jpg",
      "/images/scraped/189/img_2.jpg",
      "/images/scraped/189/img_3.jpg",
      "/images/scraped/189/img_4.jpg",
      "/images/scraped/189/img_5.jpg",
      "/images/scraped/189/img_6.jpg"
    ],
    "description": "➣We have it in bulk (factory unlocked).\n➣Battery health is 90 to 95%(very neat) \n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 190,
    "name": "Apple iPhone 11 Pro 64 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/190/img_1.jpg",
    "images": [
      "/images/scraped/190/img_1.jpg",
      "/images/scraped/190/img_2.jpg",
      "/images/scraped/190/img_3.jpg",
      "/images/scraped/190/img_4.jpg",
      "/images/scraped/190/img_5.jpg",
      "/images/scraped/190/img_6.jpg"
    ],
    "description": "*Battery health is 90% and over (extremely neat)\n*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us .\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 191,
    "name": "New Google Pixel 9 Pro Fold 256 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 14,500",
    "image": "/images/scraped/191/img_1.jpg",
    "images": [
      "/images/scraped/191/img_1.jpg",
      "/images/scraped/191/img_2.jpg",
      "/images/scraped/191/img_3.jpg",
      "/images/scraped/191/img_4.jpg",
      "/images/scraped/191/img_5.jpg",
      "/images/scraped/191/img_6.jpg",
      "/images/scraped/191/img_7.jpg",
      "/images/scraped/191/img_8.jpg"
    ],
    "description": "➣New (open box)\n➣One of the best Foldables\n➣The camera and battery are consistently good .\n➣Get a 3-month warranty,free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 192,
    "name": "Samsung Galaxy S21 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/192/img_1.jpg",
    "images": [
      "/images/scraped/192/img_1.jpg",
      "/images/scraped/192/img_2.jpg",
      "/images/scraped/192/img_3.jpg",
      "/images/scraped/192/img_4.jpg",
      "/images/scraped/192/img_5.jpg",
      "/images/scraped/192/img_6.jpg"
    ],
    "description": "➣No faults (UK / USA) used and it's very neat \n➣Great camera system.\n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 193,
    "name": "Samsung Galaxy A55 128 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/193/img_1.jpg",
    "images": [
      "/images/scraped/193/img_1.jpg",
      "/images/scraped/193/img_2.jpg",
      "/images/scraped/193/img_3.jpg",
      "/images/scraped/193/img_4.jpg",
      "/images/scraped/193/img_5.jpg",
      "/images/scraped/193/img_6.jpg"
    ],
    "description": "➣Enjoy fast performance and a strong battery life with improved camera systems.\n➣ It's in excellent condition \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 194,
    "name": "Samsung Galaxy S20 128 GB Pink",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,700",
    "image": "/images/scraped/194/img_1.jpg",
    "images": [
      "/images/scraped/194/img_1.jpg",
      "/images/scraped/194/img_2.jpg",
      "/images/scraped/194/img_3.jpg",
      "/images/scraped/194/img_4.jpg",
      "/images/scraped/194/img_5.jpg",
      "/images/scraped/194/img_6.jpg",
      "/images/scraped/194/img_7.jpg",
      "/images/scraped/194/img_8.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose \nconvenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 195,
    "name": "Apple iPhone SE (2020) 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,499",
    "image": "/images/scraped/195/img_1.jpg",
    "images": [
      "/images/scraped/195/img_1.jpg",
      "/images/scraped/195/img_2.jpg",
      "/images/scraped/195/img_3.jpg",
      "/images/scraped/195/img_4.jpg",
      "/images/scraped/195/img_5.jpg",
      "/images/scraped/195/img_6.jpg",
      "/images/scraped/195/img_7.jpg",
      "/images/scraped/195/img_8.jpg"
    ],
    "description": "➣Slightly and factory unlocked \n➣Battery health is 90 and above \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 196,
    "name": "Samsung Galaxy Note 10 Plus 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/196/img_1.jpg",
    "images": [
      "/images/scraped/196/img_1.jpg",
      "/images/scraped/196/img_2.jpg",
      "/images/scraped/196/img_3.jpg",
      "/images/scraped/196/img_4.jpg",
      "/images/scraped/196/img_5.jpg"
    ],
    "description": "➣RAM is 12GB\n➣It’s in great condition with a strong battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 197,
    "name": "Samsung 45watt Charger (Original)",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 149",
    "image": "/images/scraped/197/img_1.jpg",
    "images": [
      "/images/scraped/197/img_1.jpg",
      "/images/scraped/197/img_2.jpg",
      "/images/scraped/197/img_3.jpg"
    ],
    "description": "➣Actually the best to find on the market(super fast charging)\n➣Visit us at Lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 198,
    "name": "Samsung Galaxy S23 Plus 256 GB Pink",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/198/img_1.jpg",
    "images": [
      "/images/scraped/198/img_1.jpg",
      "/images/scraped/198/img_2.jpg",
      "/images/scraped/198/img_3.jpg",
      "/images/scraped/198/img_4.jpg",
      "/images/scraped/198/img_5.jpg",
      "/images/scraped/198/img_6.jpg"
    ],
    "description": "➣Very neat in good condition.\n➣Has one of the best battery and camera \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 199,
    "name": "Apple iPhone 15 Pro Max 256 GB Gray",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 9,499",
    "image": "/images/scraped/199/img_1.jpg",
    "images": [
      "/images/scraped/199/img_1.jpg",
      "/images/scraped/199/img_2.jpg",
      "/images/scraped/199/img_3.jpg",
      "/images/scraped/199/img_4.jpg",
      "/images/scraped/199/img_5.jpg",
      "/images/scraped/199/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Very neat and in good condition (esim unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 200,
    "name": "Samsung Galaxy S23 128 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/200/img_1.jpg",
    "images": [
      "/images/scraped/200/img_1.jpg",
      "/images/scraped/200/img_2.jpg",
      "/images/scraped/200/img_3.jpg",
      "/images/scraped/200/img_4.jpg",
      "/images/scraped/200/img_5.jpg",
      "/images/scraped/200/img_6.jpg",
      "/images/scraped/200/img_7.jpg",
      "/images/scraped/200/img_8.jpg"
    ],
    "description": "➣It's extremely neat in a good condition\n➣Powered by Snapdragon 8 gen 2 chipset that enables higher performance \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 201,
    "name": "Apple iPhone 14 Plus 128 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/201/img_1.jpg",
    "images": [
      "/images/scraped/201/img_1.jpg",
      "/images/scraped/201/img_2.jpg",
      "/images/scraped/201/img_3.jpg",
      "/images/scraped/201/img_4.jpg",
      "/images/scraped/201/img_5.jpg",
      "/images/scraped/201/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment \n➣Very neat\n➣Battery health is 90+(factory unlocked)\n➣And also receive 10GB of data to all networks by referring people us\n➣Enjoy a 3-month warranty, free charger & wireless earphones.\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 202,
    "name": "Samsung Galaxy S21 Ultra 5G 256 GB Silver",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/202/img_1.jpg",
    "images": [
      "/images/scraped/202/img_1.jpg",
      "/images/scraped/202/img_2.jpg",
      "/images/scraped/202/img_3.jpg",
      "/images/scraped/202/img_4.jpg",
      "/images/scraped/202/img_5.jpg",
      "/images/scraped/202/img_6.jpg"
    ],
    "description": "➣Supports One Ui 7\n➣Pre-owned from UK/USA \n➣Equipped with great camera system\n➣Enjoy a 3-month warranty, free charger & wireless earphones.\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read our reviews if your doubt buying decision\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 203,
    "name": "Samsung Galaxy S22 Ultra 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/203/img_1.jpg",
    "images": [
      "/images/scraped/203/img_1.jpg",
      "/images/scraped/203/img_2.jpg",
      "/images/scraped/203/img_3.jpg",
      "/images/scraped/203/img_4.jpg",
      "/images/scraped/203/img_5.jpg",
      "/images/scraped/203/img_6.jpg"
    ],
    "description": "‣It's in great condition with a strong battery life and has got a vivid display\n‣ Get a 3-month warranty, free charger & wireless earphones\n‣And also receive 10GB of data from the MTN or other networks for referring people to buy from us. \n‣Read reviews for immediate decision \n‣ Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 204,
    "name": "Samsung Galaxy S21+ 5G 128 GB Purple",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/204/img_1.jpg",
    "images": [
      "/images/scraped/204/img_1.jpg",
      "/images/scraped/204/img_2.jpg",
      "/images/scraped/204/img_3.jpg",
      "/images/scraped/204/img_4.jpg",
      "/images/scraped/204/img_5.jpg",
      "/images/scraped/204/img_6.jpg"
    ],
    "description": "➣Very neat and in a good condition\n➣Fast performance and better camera system (One Ui 7 soon)\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 205,
    "name": "Samsung Galaxy S23 Ultra 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/205/img_1.jpg",
    "images": [
      "/images/scraped/205/img_1.jpg",
      "/images/scraped/205/img_2.jpg",
      "/images/scraped/205/img_3.jpg",
      "/images/scraped/205/img_4.jpg",
      "/images/scraped/205/img_5.jpg",
      "/images/scraped/205/img_6.jpg"
    ],
    "description": "➣It's available in bulk (pre-owned from Europe/USA)\n➣Enjoy a 3-month warranty, free charger & wireless earphones )\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz light store or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 206,
    "name": "Samsung Galaxy A55 256 GB Rose Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/206/img_1.jpg",
    "images": [
      "/images/scraped/206/img_1.jpg",
      "/images/scraped/206/img_2.jpg",
      "/images/scraped/206/img_3.jpg",
      "/images/scraped/206/img_4.jpg",
      "/images/scraped/206/img_5.jpg",
      "/images/scraped/206/img_6.jpg",
      "/images/scraped/206/img_7.jpg",
      "/images/scraped/206/img_8.jpg",
      "/images/scraped/206/img_9.jpg"
    ],
    "description": "➣It's very neat and in a good shape \n➣Enjoy all-day battery life \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 207,
    "name": "Apple iPhone 11 64 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/207/img_1.jpg",
    "images": [
      "/images/scraped/207/img_1.jpg",
      "/images/scraped/207/img_2.jpg",
      "/images/scraped/207/img_3.jpg",
      "/images/scraped/207/img_4.jpg",
      "/images/scraped/207/img_5.jpg",
      "/images/scraped/207/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment \n➣Battery health is between 90 -97% fully unlocked \n➣It’s neat\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN /AT for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 208,
    "name": "Apple iPhone 14 Pro Max 128 GB Purple",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/208/img_1.jpg",
    "images": [
      "/images/scraped/208/img_1.jpg",
      "/images/scraped/208/img_2.jpg",
      "/images/scraped/208/img_3.jpg",
      "/images/scraped/208/img_4.jpg",
      "/images/scraped/208/img_5.jpg",
      "/images/scraped/208/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Factory unlocked (physical sim).\n➣Battery health is 90+ ( very neat )\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 209,
    "name": "Samsung Galaxy Note 10 5G 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/209/img_1.jpg",
    "images": [
      "/images/scraped/209/img_1.jpg",
      "/images/scraped/209/img_2.jpg",
      "/images/scraped/209/img_3.jpg",
      "/images/scraped/209/img_4.jpg",
      "/images/scraped/209/img_5.jpg",
      "/images/scraped/209/img_6.jpg",
      "/images/scraped/209/img_7.jpg",
      "/images/scraped/209/img_8.jpg"
    ],
    "description": "➣It's very neat in good condition \n➣Curved screen in beautiful styles and comes with the Stylus Pen \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 210,
    "name": "Samsung Galaxy S23 Ultra 512 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/210/img_1.jpg",
    "images": [
      "/images/scraped/210/img_1.jpg",
      "/images/scraped/210/img_2.jpg",
      "/images/scraped/210/img_3.jpg",
      "/images/scraped/210/img_4.jpg",
      "/images/scraped/210/img_5.jpg",
      "/images/scraped/210/img_6.jpg",
      "/images/scraped/210/img_7.jpg",
      "/images/scraped/210/img_8.jpg",
      "/images/scraped/210/img_9.jpg"
    ],
    "description": "➣It’s well-maintained with a strong battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 211,
    "name": "Apple iPhone 14 Plus 256 GB Rose Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/211/img_1.jpg",
    "images": [
      "/images/scraped/211/img_1.jpg",
      "/images/scraped/211/img_2.jpg",
      "/images/scraped/211/img_3.jpg",
      "/images/scraped/211/img_4.jpg",
      "/images/scraped/211/img_5.jpg",
      "/images/scraped/211/img_6.jpg"
    ],
    "description": "➣Swap is allowed(UK & USA used, almost new)\n➣Battery health is above 90%(sim slot)\n➣Get a 3-month warranty,free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 212,
    "name": "Samsung Galaxy S24 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/212/img_1.jpg",
    "images": [
      "/images/scraped/212/img_1.jpg",
      "/images/scraped/212/img_2.jpg",
      "/images/scraped/212/img_3.jpg",
      "/images/scraped/212/img_4.jpg",
      "/images/scraped/212/img_5.jpg",
      "/images/scraped/212/img_6.jpg"
    ],
    "description": "➣It’s in great condition\n➣Triple rear cameras (50MP main, 12MP ultra-wide, 10MP telephoto)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 214,
    "name": "Google Pixel 7 Pro 128 GB Gold",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/214/img_1.jpg",
    "images": [
      "/images/scraped/214/img_1.jpg",
      "/images/scraped/214/img_2.jpg",
      "/images/scraped/214/img_3.jpg",
      "/images/scraped/214/img_4.jpg",
      "/images/scraped/214/img_5.jpg",
      "/images/scraped/214/img_6.jpg"
    ],
    "description": "➣Very neat in a good condition \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 215,
    "name": "Apple iPhone 14 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,299",
    "image": "/images/scraped/215/img_1.jpg",
    "images": [
      "/images/scraped/215/img_1.jpg",
      "/images/scraped/215/img_2.jpg",
      "/images/scraped/215/img_3.jpg",
      "/images/scraped/215/img_4.jpg",
      "/images/scraped/215/img_5.jpg",
      "/images/scraped/215/img_6.jpg",
      "/images/scraped/215/img_7.jpg",
      "/images/scraped/215/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Physical sim\n➣Battery health is 90+\n➣It's very neat and in good condition\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 216,
    "name": "Samsung Galaxy Note 20 5G 128 GB",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/216/img_1.jpg",
    "images": [
      "/images/scraped/216/img_1.jpg",
      "/images/scraped/216/img_2.jpg",
      "/images/scraped/216/img_3.jpg",
      "/images/scraped/216/img_4.jpg",
      "/images/scraped/216/img_5.jpg"
    ],
    "description": "➣ Versatile Triple Camera System\n➣ S Pen Stylus for Productivity\n➣It’s in great condition.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 217,
    "name": "Samsung Galaxy S22 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,799",
    "image": "/images/scraped/217/img_1.jpg",
    "images": [
      "/images/scraped/217/img_1.jpg",
      "/images/scraped/217/img_2.jpg",
      "/images/scraped/217/img_3.jpg",
      "/images/scraped/217/img_4.jpg",
      "/images/scraped/217/img_5.jpg",
      "/images/scraped/217/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life a\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 218,
    "name": "Samsung Galaxy Z Fold6 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 9,999",
    "image": "/images/scraped/218/img_1.jpg",
    "images": [
      "/images/scraped/218/img_1.jpg",
      "/images/scraped/218/img_2.jpg",
      "/images/scraped/218/img_3.jpg",
      "/images/scraped/218/img_4.jpg",
      "/images/scraped/218/img_5.jpg",
      "/images/scraped/218/img_6.jpg"
    ],
    "description": "➣It's extremely neat and in great condition (Premium).\n➣Battery life is soo impressive \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 220,
    "name": "Samsung Galaxy S21 FE 128 GB",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/220/img_1.jpg",
    "images": [
      "/images/scraped/220/img_1.jpg",
      "/images/scraped/220/img_2.jpg",
      "/images/scraped/220/img_3.jpg",
      "/images/scraped/220/img_4.jpg",
      "/images/scraped/220/img_5.jpg",
      "/images/scraped/220/img_6.jpg"
    ],
    "description": "➣Very neat in good condition \n➣Battery life is great \n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 221,
    "name": "Samsung Galaxy S21 Ultra 5G 128 GB Silver",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/221/img_1.jpg",
    "images": [
      "/images/scraped/221/img_1.jpg",
      "/images/scraped/221/img_2.jpg",
      "/images/scraped/221/img_3.jpg",
      "/images/scraped/221/img_4.jpg",
      "/images/scraped/221/img_5.jpg",
      "/images/scraped/221/img_6.jpg"
    ],
    "description": "➣One of the top tiers in the game . \n➣Will support One ui 7 OS . \n➣Extremely neat and in good condition\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 222,
    "name": "Samsung Galaxy S21+ 5G 128 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/222/img_1.jpg",
    "images": [
      "/images/scraped/222/img_1.jpg",
      "/images/scraped/222/img_2.jpg",
      "/images/scraped/222/img_3.jpg",
      "/images/scraped/222/img_4.jpg",
      "/images/scraped/222/img_5.jpg",
      "/images/scraped/222/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life and delivers an incredible performance \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 223,
    "name": "Apple iPhone 12 Pro Max 128 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/223/img_1.jpg",
    "images": [
      "/images/scraped/223/img_1.jpg",
      "/images/scraped/223/img_2.jpg",
      "/images/scraped/223/img_3.jpg",
      "/images/scraped/223/img_4.jpg",
      "/images/scraped/223/img_5.jpg",
      "/images/scraped/223/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣ Very neat ,factory unlocked with a battery health of 90-95% .\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us .\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 224,
    "name": "Apple iPhone 14 Pro 128 GB Purple",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,299",
    "image": "/images/scraped/224/img_1.jpg",
    "images": [
      "/images/scraped/224/img_1.jpg",
      "/images/scraped/224/img_2.jpg",
      "/images/scraped/224/img_3.jpg",
      "/images/scraped/224/img_4.jpg",
      "/images/scraped/224/img_5.jpg",
      "/images/scraped/224/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment(simcard)\n➣Very neat and in good condition(factory unlocked ) \n➣Battery health is 90 and above \n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to MTN/AT by referring us to others \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 225,
    "name": "Samsung Galaxy S23 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/225/img_1.jpg",
    "images": [
      "/images/scraped/225/img_1.jpg",
      "/images/scraped/225/img_2.jpg",
      "/images/scraped/225/img_3.jpg",
      "/images/scraped/225/img_4.jpg",
      "/images/scraped/225/img_5.jpg",
      "/images/scraped/225/img_6.jpg",
      "/images/scraped/225/img_7.jpg",
      "/images/scraped/225/img_8.jpg"
    ],
    "description": "➣Very neat in a good condition \n➣Battery is too strong \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 226,
    "name": "Apple Watch Series 10",
    "category": "Accessories",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/226/img_1.jpg",
    "images": [
      "/images/scraped/226/img_1.jpg",
      "/images/scraped/226/img_2.jpg",
      "/images/scraped/226/img_3.jpg",
      "/images/scraped/226/img_4.jpg",
      "/images/scraped/226/img_5.jpg"
    ],
    "description": "➣46mm(battery health is 100%)\n➣WiFi+Cellular \n➣One of the best on the market \n➣Comes with a free charger \n➣Visit the shop at lapaz or choose a convenient free delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 227,
    "name": "Samsung Galaxy Z Flip 3 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/227/img_1.jpg",
    "images": [
      "/images/scraped/227/img_1.jpg",
      "/images/scraped/227/img_2.jpg",
      "/images/scraped/227/img_3.jpg",
      "/images/scraped/227/img_4.jpg",
      "/images/scraped/227/img_5.jpg",
      "/images/scraped/227/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life powered by snapdragon\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 228,
    "name": "Samsung Galaxy Z Flip4 128 GB Purple",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/228/img_1.jpg",
    "images": [
      "/images/scraped/228/img_1.jpg",
      "/images/scraped/228/img_2.jpg",
      "/images/scraped/228/img_3.jpg",
      "/images/scraped/228/img_4.jpg",
      "/images/scraped/228/img_5.jpg",
      "/images/scraped/228/img_6.jpg",
      "/images/scraped/228/img_7.jpg",
      "/images/scraped/228/img_8.jpg",
      "/images/scraped/228/img_9.jpg",
      "/images/scraped/228/img_10.jpg"
    ],
    "description": "➣Flip in style \n➣It’s in great condition with a strong battery life.\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 229,
    "name": "New Apple iPhone 17 Pro 256 GB Orange",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 18,999",
    "image": "/images/scraped/229/img_1.jpg",
    "images": [
      "/images/scraped/229/img_1.jpg",
      "/images/scraped/229/img_2.jpg",
      "/images/scraped/229/img_3.jpg",
      "/images/scraped/229/img_4.jpg",
      "/images/scraped/229/img_5.jpg",
      "/images/scraped/229/img_6.jpg"
    ],
    "description": "*Installment plan (iPhones) is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Factory unlocked with a physical Sim\n➣Get a 3-month warranty & free wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 230,
    "name": "New Samsung Galaxy S24 Ultra 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 9,999",
    "image": "/images/scraped/230/img_1.jpg",
    "images": [
      "/images/scraped/230/img_1.jpg",
      "/images/scraped/230/img_2.jpg",
      "/images/scraped/230/img_3.jpg",
      "/images/scraped/230/img_4.jpg"
    ],
    "description": "➣Uk & USA variant (brand new)\n➣Great performance with 7 years OS update \n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 231,
    "name": "Samsung Galaxy S21 Ultra 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/231/img_1.jpg",
    "images": [
      "/images/scraped/231/img_1.jpg",
      "/images/scraped/231/img_2.jpg",
      "/images/scraped/231/img_3.jpg",
      "/images/scraped/231/img_4.jpg",
      "/images/scraped/231/img_5.jpg",
      "/images/scraped/231/img_6.jpg"
    ],
    "description": "‣It's in great condition but not too neat.\n‣Strong battery life with pre installed One Ui 7 OS. \n‣Get a 3-month warranty, free charger & wireless earphones \n‣Also, get 10GB of data to all networks by referring us to others\n‣ Read reviews for immediate decision\n‣Visit us at lapaz or choose a convenient free delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 232,
    "name": "New Samsung Galaxy S25 256 GB",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 9,499",
    "image": "/images/scraped/232/img_1.jpg",
    "images": [
      "/images/scraped/232/img_1.jpg",
      "/images/scraped/232/img_2.jpg",
      "/images/scraped/232/img_3.jpg",
      "/images/scraped/232/img_4.jpg",
      "/images/scraped/232/img_5.jpg",
      "/images/scraped/232/img_6.jpg"
    ],
    "description": "*Factory unlocked (great performance)\n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 233,
    "name": "Xbox One S",
    "category": "Accessories",
    "brand": "Xbox",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/233/img_1.jpg",
    "images": [
      "/images/scraped/233/img_1.jpg",
      "/images/scraped/233/img_2.jpg",
      "/images/scraped/233/img_3.jpg",
      "/images/scraped/233/img_4.jpg"
    ],
    "description": "Plays all your high end games \nVisit us at lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 234,
    "name": "Samsung Galaxy S23 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,699",
    "image": "/images/scraped/234/img_1.jpg",
    "images": [
      "/images/scraped/234/img_1.jpg",
      "/images/scraped/234/img_2.jpg",
      "/images/scraped/234/img_3.jpg",
      "/images/scraped/234/img_4.jpg",
      "/images/scraped/234/img_5.jpg",
      "/images/scraped/234/img_6.jpg"
    ],
    "description": "‣It's neat in good shape and very smart as well ‣Has a strong battery life\n‣Get a 3-month warranty, free charger & wireless earphones\n‣Get 10GB of data from the MTN or other networks for referring people to buy from us .\n‣Read reviews for immediate decision\n‣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 235,
    "name": "Google Pixel 6 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/235/img_1.jpg",
    "images": [
      "/images/scraped/235/img_1.jpg",
      "/images/scraped/235/img_2.jpg",
      "/images/scraped/235/img_3.jpg",
      "/images/scraped/235/img_4.jpg"
    ],
    "description": "➣It's in a very good shape \n➣The battery is really strong \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 236,
    "name": "Google Pixel 7 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/236/img_1.jpg",
    "images": [
      "/images/scraped/236/img_1.jpg",
      "/images/scraped/236/img_2.jpg",
      "/images/scraped/236/img_3.jpg",
      "/images/scraped/236/img_4.jpg",
      "/images/scraped/236/img_5.jpg",
      "/images/scraped/236/img_6.jpg",
      "/images/scraped/236/img_7.jpg",
      "/images/scraped/236/img_8.jpg",
      "/images/scraped/236/img_9.jpg"
    ],
    "description": "*We have all kinds and Android and iPhones in stock .\n➣The camera looks superb \n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 237,
    "name": "Samsung Galaxy A54 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/237/img_1.jpg",
    "images": [
      "/images/scraped/237/img_1.jpg",
      "/images/scraped/237/img_2.jpg",
      "/images/scraped/237/img_3.jpg",
      "/images/scraped/237/img_4.jpg"
    ],
    "description": "➣Almost new and good condition \n➣Enjoy all-day battery life \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 238,
    "name": "Apple iPhone 12 64 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,799",
    "image": "/images/scraped/238/img_1.jpg",
    "images": [
      "/images/scraped/238/img_1.jpg",
      "/images/scraped/238/img_2.jpg",
      "/images/scraped/238/img_3.jpg",
      "/images/scraped/238/img_4.jpg",
      "/images/scraped/238/img_5.jpg",
      "/images/scraped/238/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Battery health is 90 + factory unlocked\n➣It’s in great condition \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or AT for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 239,
    "name": "New Google Pixel 8 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/239/img_1.jpg",
    "images": [
      "/images/scraped/239/img_1.jpg",
      "/images/scraped/239/img_2.jpg",
      "/images/scraped/239/img_3.jpg",
      "/images/scraped/239/img_4.jpg"
    ],
    "description": "*Supports 7 years of OS update\n➣Impressive camera features and high-performance\n➣Get a 3-month warranty & a wireless earphone\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 240,
    "name": "Samsung Galaxy Note 20 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/240/img_1.jpg",
    "images": [
      "/images/scraped/240/img_1.jpg",
      "/images/scraped/240/img_2.jpg",
      "/images/scraped/240/img_3.jpg",
      "/images/scraped/240/img_4.jpg",
      "/images/scraped/240/img_5.jpg",
      "/images/scraped/240/img_6.jpg"
    ],
    "description": "➣It's very neat in a good condition \n➣Battery life is really strong \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Also received 30GB of data to all networks by referring people to buy from us \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 241,
    "name": "Samsung Galaxy S21 5G 128 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,699",
    "image": "/images/scraped/241/img_1.jpg",
    "images": [
      "/images/scraped/241/img_1.jpg",
      "/images/scraped/241/img_2.jpg",
      "/images/scraped/241/img_3.jpg",
      "/images/scraped/241/img_4.jpg"
    ],
    "description": "➣Support esim as well, allowing for dual sim mode \n➣It’s in great condition.\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 242,
    "name": "Samsung Galaxy S22 Ultra 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/242/img_1.jpg",
    "images": [
      "/images/scraped/242/img_1.jpg",
      "/images/scraped/242/img_2.jpg",
      "/images/scraped/242/img_3.jpg",
      "/images/scraped/242/img_4.jpg",
      "/images/scraped/242/img_5.jpg",
      "/images/scraped/242/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life and has got a vivid display \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 243,
    "name": "Apple iPhone 12 Pro Max 256 GB Gray",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/243/img_1.jpg",
    "images": [
      "/images/scraped/243/img_1.jpg",
      "/images/scraped/243/img_2.jpg",
      "/images/scraped/243/img_3.jpg",
      "/images/scraped/243/img_4.jpg",
      "/images/scraped/243/img_5.jpg",
      "/images/scraped/243/img_6.jpg",
      "/images/scraped/243/img_7.jpg",
      "/images/scraped/243/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Very neat and in good condition (available in all colors)\n➣Battery health is 94%(factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Visit the store at (Lapaz) or choose delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 244,
    "name": "Apple iPhone 11 Pro 256 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/244/img_1.jpg",
    "images": [
      "/images/scraped/244/img_1.jpg",
      "/images/scraped/244/img_2.jpg",
      "/images/scraped/244/img_3.jpg",
      "/images/scraped/244/img_4.jpg",
      "/images/scraped/244/img_5.jpg",
      "/images/scraped/244/img_6.jpg",
      "/images/scraped/244/img_7.jpg",
      "/images/scraped/244/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Factory unlocked \n➣Battery health is 90% and above\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 245,
    "name": "Apple iPhone 11 Pro 64 GB",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/245/img_1.jpg",
    "images": [
      "/images/scraped/245/img_1.jpg",
      "/images/scraped/245/img_2.jpg",
      "/images/scraped/245/img_3.jpg",
      "/images/scraped/245/img_4.jpg",
      "/images/scraped/245/img_5.jpg",
      "/images/scraped/245/img_6.jpg",
      "/images/scraped/245/img_7.jpg",
      "/images/scraped/245/img_8.jpg"
    ],
    "description": "*Installment plan (iPhones) is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Very neat with a battery health of 90-95%.\n➣Factory unlocked.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN/AT for referring people to buy from us . \n➣Visit the store at or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 246,
    "name": "Apple iPhone XS 256 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,299",
    "image": "/images/scraped/246/img_1.jpg",
    "images": [
      "/images/scraped/246/img_1.jpg",
      "/images/scraped/246/img_2.jpg",
      "/images/scraped/246/img_3.jpg",
      "/images/scraped/246/img_4.jpg",
      "/images/scraped/246/img_5.jpg",
      "/images/scraped/246/img_6.jpg",
      "/images/scraped/246/img_7.jpg",
      "/images/scraped/246/img_8.jpg"
    ],
    "description": "➣Battery health is 90%. \n➣It’s in great condition with a strong battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery\r\n.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 247,
    "name": "Apple iPhone 11 Pro 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/247/img_1.jpg",
    "images": [
      "/images/scraped/247/img_1.jpg",
      "/images/scraped/247/img_2.jpg",
      "/images/scraped/247/img_3.jpg",
      "/images/scraped/247/img_4.jpg",
      "/images/scraped/247/img_5.jpg",
      "/images/scraped/247/img_6.jpg",
      "/images/scraped/247/img_7.jpg",
      "/images/scraped/247/img_8.jpg"
    ],
    "description": "➣Battery health is 90% (very strong )\n➣It's extremely neat and factory unlocked .\n➣Swap/trade in is allowed\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 248,
    "name": "Apple iPhone 15 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/248/img_1.jpg",
    "images": [
      "/images/scraped/248/img_1.jpg",
      "/images/scraped/248/img_2.jpg",
      "/images/scraped/248/img_3.jpg",
      "/images/scraped/248/img_4.jpg",
      "/images/scraped/248/img_5.jpg",
      "/images/scraped/248/img_6.jpg"
    ],
    "description": "➣It is very neat in good condition (available in all colors)\n➣Battery health is 90+(%); \"factory unlocked\".\n➣ UK /USA models\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or AT for referring people to buy from us\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 249,
    "name": "Laptop Apple MacBook Pro 2018 16GB Intel Core I7 SSD 512GB",
    "category": "Accessories",
    "brand": "Laptop",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/249/img_1.jpg",
    "images": [
      "/images/scraped/249/img_1.jpg",
      "/images/scraped/249/img_2.jpg",
      "/images/scraped/249/img_3.jpg",
      "/images/scraped/249/img_4.jpg",
      "/images/scraped/249/img_5.jpg",
      "/images/scraped/249/img_6.jpg"
    ],
    "description": "➣It's a very neat and powerful machine\n➣Comes with a free charger and a case\n➣Get a 3-month warranty\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 250,
    "name": "Google Pixel 8 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/250/img_1.jpg",
    "images": [
      "/images/scraped/250/img_1.jpg",
      "/images/scraped/250/img_2.jpg",
      "/images/scraped/250/img_3.jpg",
      "/images/scraped/250/img_4.jpg",
      "/images/scraped/250/img_5.jpg",
      "/images/scraped/250/img_6.jpg"
    ],
    "description": "➣It's in excellent condition with a strong battery life.\n➣Enjoy smooth user experience with strong battery life\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at(Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 251,
    "name": "Samsung Galaxy Z Fold6 256 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 9,999",
    "image": "/images/scraped/251/img_1.jpg",
    "images": [
      "/images/scraped/251/img_1.jpg",
      "/images/scraped/251/img_2.jpg",
      "/images/scraped/251/img_3.jpg",
      "/images/scraped/251/img_4.jpg",
      "/images/scraped/251/img_5.jpg",
      "/images/scraped/251/img_6.jpg",
      "/images/scraped/251/img_7.jpg",
      "/images/scraped/251/img_8.jpg",
      "/images/scraped/251/img_9.jpg"
    ],
    "description": "➣Extremely neat and in good condition \n➣Camera is soo impressive.\n➣Its one of the best folding phones \r\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 252,
    "name": "Samsung Galaxy Z Flip 5 256 GB Gray",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/252/img_1.jpg",
    "images": [
      "/images/scraped/252/img_1.jpg",
      "/images/scraped/252/img_2.jpg",
      "/images/scraped/252/img_3.jpg",
      "/images/scraped/252/img_4.jpg",
      "/images/scraped/252/img_5.jpg",
      "/images/scraped/252/img_6.jpg",
      "/images/scraped/252/img_7.jpg",
      "/images/scraped/252/img_8.jpg",
      "/images/scraped/252/img_9.jpg"
    ],
    "description": "➣Flip in style and has a great quality camera system \n➣Has a strong battery life\n➣Swap/trade in is allowed\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 253,
    "name": "Samsung Galaxy Note 10 5G 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/253/img_1.jpg",
    "images": [
      "/images/scraped/253/img_1.jpg",
      "/images/scraped/253/img_2.jpg",
      "/images/scraped/253/img_3.jpg",
      "/images/scraped/253/img_4.jpg",
      "/images/scraped/253/img_5.jpg",
      "/images/scraped/253/img_6.jpg"
    ],
    "description": "➣It’s in great condition with a strong battery life and improved performance \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 254,
    "name": "Samsung Galaxy Z Fold4 256 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/254/img_1.jpg",
    "images": [
      "/images/scraped/254/img_1.jpg",
      "/images/scraped/254/img_2.jpg",
      "/images/scraped/254/img_3.jpg",
      "/images/scraped/254/img_4.jpg",
      "/images/scraped/254/img_5.jpg",
      "/images/scraped/254/img_6.jpg",
      "/images/scraped/254/img_7.jpg",
      "/images/scraped/254/img_8.jpg",
      "/images/scraped/254/img_9.jpg",
      "/images/scraped/254/img_10.jpg",
      "/images/scraped/254/img_11.jpg"
    ],
    "description": "➣High performance and also got a stunning visuals.\n➣Versatile camera capabilities.\n➣All-day battery life.\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 255,
    "name": "Google Pixel 8 Pro 128 GB Blue",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/255/img_1.jpg",
    "images": [
      "/images/scraped/255/img_1.jpg",
      "/images/scraped/255/img_2.jpg",
      "/images/scraped/255/img_3.jpg",
      "/images/scraped/255/img_4.jpg",
      "/images/scraped/255/img_5.jpg",
      "/images/scraped/255/img_6.jpg"
    ],
    "description": "*Supports 7 years of OS update\n➣Impressive camera features and high performance\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 256,
    "name": "Apple iPhone 15 Pro Max 256 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 9,499",
    "image": "/images/scraped/256/img_1.jpg",
    "images": [
      "/images/scraped/256/img_1.jpg",
      "/images/scraped/256/img_2.jpg",
      "/images/scraped/256/img_3.jpg",
      "/images/scraped/256/img_4.jpg",
      "/images/scraped/256/img_5.jpg",
      "/images/scraped/256/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Physical sim (very neat).\n➣Battery health is 94 +\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 257,
    "name": "Apple iPhone XR 128 GB Orange",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/257/img_1.jpg",
    "images": [
      "/images/scraped/257/img_1.jpg",
      "/images/scraped/257/img_2.jpg",
      "/images/scraped/257/img_3.jpg",
      "/images/scraped/257/img_4.jpg",
      "/images/scraped/257/img_5.jpg",
      "/images/scraped/257/img_6.jpg"
    ],
    "description": "➣Xr in iPhone 17 pro max housing(UK USED)\n➣Battery health is 97%(factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to MTN/AT by referring us to others\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 258,
    "name": "New Samsung Galaxy S25 Ultra 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 11,499",
    "image": "/images/scraped/258/img_1.jpg",
    "images": [
      "/images/scraped/258/img_1.jpg",
      "/images/scraped/258/img_2.jpg",
      "/images/scraped/258/img_3.jpg",
      "/images/scraped/258/img_4.jpg"
    ],
    "description": "➣Brand new (factory unlocked)\n➣Strong battery life \n➣Get a 3-month warranty & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 259,
    "name": "Apple iPhone XR 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/259/img_1.jpg",
    "images": [
      "/images/scraped/259/img_1.jpg",
      "/images/scraped/259/img_2.jpg",
      "/images/scraped/259/img_3.jpg",
      "/images/scraped/259/img_4.jpg",
      "/images/scraped/259/img_5.jpg",
      "/images/scraped/259/img_6.jpg",
      "/images/scraped/259/img_7.jpg",
      "/images/scraped/259/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Swap in allowed (Pre-owned from UK).\n➣Battery health is above 90%(factory unlocked).\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or AT for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 260,
    "name": "Apple Fast Charger(Original)",
    "category": "Accessories",
    "brand": "Apple",
    "price": "GHGH₵ 149",
    "image": "/images/scraped/260/img_1.jpg",
    "images": [
      "/images/scraped/260/img_1.jpg",
      "/images/scraped/260/img_2.jpg",
      "/images/scraped/260/img_3.jpg",
      "/images/scraped/260/img_4.jpg",
      "/images/scraped/260/img_5.jpg",
      "/images/scraped/260/img_6.jpg",
      "/images/scraped/260/img_7.jpg",
      "/images/scraped/260/img_8.jpg"
    ],
    "description": "➣Actual the best type you to find on the market \n➣Original apple charger both lightning-fast and type c \n➣Visit us at lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 261,
    "name": "Apple iPhone 8 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,199",
    "image": "/images/scraped/261/img_1.jpg",
    "images": [
      "/images/scraped/261/img_1.jpg",
      "/images/scraped/261/img_2.jpg",
      "/images/scraped/261/img_3.jpg",
      "/images/scraped/261/img_4.jpg",
      "/images/scraped/261/img_5.jpg",
      "/images/scraped/261/img_6.jpg"
    ],
    "description": "➣Very neat in a good condition \n➣Battery health is 93%\r\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 262,
    "name": "iPad Pro (M4) Magic Keyboard",
    "category": "Accessories",
    "brand": "iPad",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/262/img_1.jpg",
    "images": [
      "/images/scraped/262/img_1.jpg",
      "/images/scraped/262/img_2.jpg",
      "/images/scraped/262/img_3.jpg",
      "/images/scraped/262/img_4.jpg",
      "/images/scraped/262/img_5.jpg",
      "/images/scraped/262/img_6.jpg"
    ],
    "description": "Very neat (comes with 3 months warranty).\nVisit us at lapaz opposite the fraga oil or choose a convenient delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 263,
    "name": "Lenovo Thinkpad Mt 11r8",
    "category": "Accessories",
    "brand": "Lenovo",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/263/img_1.jpg",
    "images": [
      "/images/scraped/263/img_1.jpg",
      "/images/scraped/263/img_2.jpg",
      "/images/scraped/263/img_3.jpg",
      "/images/scraped/263/img_4.jpg",
      "/images/scraped/263/img_5.jpg"
    ],
    "description": "*Lenovo thinkpad MT 11R8 (gaming machine)\n➣CPU: AMD Ryzen 5 PRO 2500U (2.0-3.6 GHz) \n➣RAM: 8GB DDR4 \n➣Storage: 256GB SSD \n➣ Display: 11.6\" HD IPS \n➣Graphics: Radeon Vega 8 \n➣Ports: 2x USB 3.1, USB-C, HDMI, RJ-45, microSD \n➣OS: Windows 10 Pro \n➣Get a 3-month warranty & and a free charger \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 264,
    "name": "Apple iPhone 13 Pro 256 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/264/img_1.jpg",
    "images": [
      "/images/scraped/264/img_1.jpg",
      "/images/scraped/264/img_2.jpg",
      "/images/scraped/264/img_3.jpg",
      "/images/scraped/264/img_4.jpg",
      "/images/scraped/264/img_5.jpg",
      "/images/scraped/264/img_6.jpg"
    ],
    "description": "➣It's very neat (factory unlocked)\n➣Battery health ranges from 90 to 98%\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 265,
    "name": "Apple iPhone SE (2020) 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,799",
    "image": "/images/scraped/265/img_1.jpg",
    "images": [
      "/images/scraped/265/img_1.jpg",
      "/images/scraped/265/img_2.jpg",
      "/images/scraped/265/img_3.jpg",
      "/images/scraped/265/img_4.jpg",
      "/images/scraped/265/img_5.jpg",
      "/images/scraped/265/img_6.jpg",
      "/images/scraped/265/img_7.jpg",
      "/images/scraped/265/img_8.jpg"
    ],
    "description": "➣It's very neat in good shape (UK)\n➣Battery health is 90%\n➣Supports iOS 26\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 266,
    "name": "Apple iPhone 12 64 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,799",
    "image": "/images/scraped/266/img_1.jpg",
    "images": [
      "/images/scraped/266/img_1.jpg",
      "/images/scraped/266/img_2.jpg",
      "/images/scraped/266/img_3.jpg",
      "/images/scraped/266/img_4.jpg",
      "/images/scraped/266/img_5.jpg",
      "/images/scraped/266/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Also available in all storage.\n➣Battery health is 90%(factory unlocked).\n➣Enjoy a 3-month warranty, free charger & wireless earphones.\n➣Get 10GB of data from the MTN or AT for referring people to buy from us\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 267,
    "name": "Samsung Galaxy S23 Ultra 512 GB",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/267/img_1.jpg",
    "images": [
      "/images/scraped/267/img_1.jpg",
      "/images/scraped/267/img_2.jpg",
      "/images/scraped/267/img_3.jpg",
      "/images/scraped/267/img_4.jpg",
      "/images/scraped/267/img_5.jpg",
      "/images/scraped/267/img_6.jpg",
      "/images/scraped/267/img_7.jpg"
    ],
    "description": "➣Dual sim variant \r\n➣It’s in great condition with a strong battery life\n➣Swap/trade in is allowed\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 268,
    "name": "New Apple iPhone 17 256 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 11,999",
    "image": "/images/scraped/268/img_1.jpg",
    "images": [
      "/images/scraped/268/img_1.jpg",
      "/images/scraped/268/img_2.jpg",
      "/images/scraped/268/img_3.jpg",
      "/images/scraped/268/img_4.jpg",
      "/images/scraped/268/img_5.jpg",
      "/images/scraped/268/img_6.jpg",
      "/images/scraped/268/img_7.jpg",
      "/images/scraped/268/img_8.jpg",
      "/images/scraped/268/img_9.jpg",
      "/images/scraped/268/img_10.jpg"
    ],
    "description": "*Reviews prove this to be the best iPhone in the 17 lineup.(buy now pay later plan is available)\n➣Get a 3-month warranty & wireless earphones\r\n10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 269,
    "name": "Samsung Galaxy S22+ 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/269/img_1.jpg",
    "images": [
      "/images/scraped/269/img_1.jpg",
      "/images/scraped/269/img_2.jpg",
      "/images/scraped/269/img_3.jpg",
      "/images/scraped/269/img_4.jpg",
      "/images/scraped/269/img_5.jpg",
      "/images/scraped/269/img_6.jpg"
    ],
    "description": "➣Pre-owned from USA & UK(very neat).\n➣Comes in all colors \n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 270,
    "name": "Google Pixel 8 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/270/img_1.jpg",
    "images": [
      "/images/scraped/270/img_1.jpg",
      "/images/scraped/270/img_2.jpg",
      "/images/scraped/270/img_3.jpg",
      "/images/scraped/270/img_4.jpg",
      "/images/scraped/270/img_5.jpg",
      "/images/scraped/270/img_6.jpg"
    ],
    "description": "*Supports 7 years of OS update\n‣Impressive camera features and high-performance \n‣Get 3-month warranty, free charger & wireless earphones \n‣Get 10GB of data from the MTN or other networks for referring people to buy from us. ‣Read reviews for immediate decision \n‣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 271,
    "name": "Apple iPhone 16 Pro Max 256 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 11,999",
    "image": "/images/scraped/271/img_1.jpg",
    "images": [
      "/images/scraped/271/img_1.jpg",
      "/images/scraped/271/img_2.jpg",
      "/images/scraped/271/img_3.jpg",
      "/images/scraped/271/img_4.jpg",
      "/images/scraped/271/img_5.jpg",
      "/images/scraped/271/img_6.jpg"
    ],
    "description": "➣It is very neat with a battery health of 100%\n➣Factory unlocked (physical sim)\n➣Get a 3-month warranty & a free wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 272,
    "name": "Apple iPhone 12 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/272/img_1.jpg",
    "images": [
      "/images/scraped/272/img_1.jpg",
      "/images/scraped/272/img_2.jpg",
      "/images/scraped/272/img_3.jpg",
      "/images/scraped/272/img_4.jpg",
      "/images/scraped/272/img_5.jpg",
      "/images/scraped/272/img_6.jpg",
      "/images/scraped/272/img_7.jpg",
      "/images/scraped/272/img_8.jpg"
    ],
    "description": "➣Battery health is above 90%(very neat from USA & UK)\n➣It's available in all colors(factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 273,
    "name": "Apple iPhone 13 Pro Max 256 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/273/img_1.jpg",
    "images": [
      "/images/scraped/273/img_1.jpg",
      "/images/scraped/273/img_2.jpg",
      "/images/scraped/273/img_3.jpg",
      "/images/scraped/273/img_4.jpg",
      "/images/scraped/273/img_5.jpg",
      "/images/scraped/273/img_6.jpg"
    ],
    "description": "*Installment plan (iPhones) is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣It's available in all colors (factory unlocked)\n➣Battery health is above 90% (very neat)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Read reviews for immediate decision\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 274,
    "name": "Apple iPhone XR 64 GB Red",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/274/img_1.jpg",
    "images": [
      "/images/scraped/274/img_1.jpg",
      "/images/scraped/274/img_2.jpg",
      "/images/scraped/274/img_3.jpg",
      "/images/scraped/274/img_4.jpg",
      "/images/scraped/274/img_5.jpg",
      "/images/scraped/274/img_6.jpg"
    ],
    "description": "➣Battery health is 93%, and it's factory unlocked .\n➣It’s in great condition.\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 275,
    "name": "Apple iPhone SE (2020) 64 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,499",
    "image": "/images/scraped/275/img_1.jpg",
    "images": [
      "/images/scraped/275/img_1.jpg",
      "/images/scraped/275/img_2.jpg",
      "/images/scraped/275/img_3.jpg",
      "/images/scraped/275/img_4.jpg",
      "/images/scraped/275/img_5.jpg",
      "/images/scraped/275/img_6.jpg"
    ],
    "description": "➣Swap is allowed(battery health is over 90%)\n➣Very neat (UK & USA models)\n➣Get a 3-month warranty,free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 276,
    "name": "Apple iPhone SE (2020) 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,499",
    "image": "/images/scraped/276/img_1.jpg",
    "images": [
      "/images/scraped/276/img_1.jpg",
      "/images/scraped/276/img_2.jpg",
      "/images/scraped/276/img_3.jpg",
      "/images/scraped/276/img_4.jpg",
      "/images/scraped/276/img_5.jpg",
      "/images/scraped/276/img_6.jpg",
      "/images/scraped/276/img_7.jpg",
      "/images/scraped/276/img_8.jpg"
    ],
    "description": "➣Battery health is 91% ,very strong . \r\n➣It’s in great condition \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery\r\n-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 277,
    "name": "Dell D10u (8th Gen)",
    "category": "Accessories",
    "brand": "Dell",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/277/img_1.jpg",
    "images": [
      "/images/scraped/277/img_1.jpg",
      "/images/scraped/277/img_2.jpg",
      "/images/scraped/277/img_3.jpg",
      "/images/scraped/277/img_4.jpg",
      "/images/scraped/277/img_5.jpg",
      "/images/scraped/277/img_6.jpg",
      "/images/scraped/277/img_7.jpg",
      "/images/scraped/277/img_8.jpg"
    ],
    "description": "➣CPU: Intel Core i5-8500T (2.7–3.3 GHz) \r\n➣RAM: 8GB DDR4 \r\n➣Storage: 256GB SSD \r\n➣Graphics: Intel UHD 630 \r\n➣Ports: 1x USB-C, 5x USB 3.1, 2x DP, HDMI, RJ-45 \r\n➣OS: Windows 10 Pro\n➣Get a 3-month warranty & a free charger \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 278,
    "name": "New Samsung Galaxy S23 Ultra 256 GB Pink",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/278/img_1.jpg",
    "images": [
      "/images/scraped/278/img_1.jpg",
      "/images/scraped/278/img_2.jpg",
      "/images/scraped/278/img_3.jpg",
      "/images/scraped/278/img_4.jpg"
    ],
    "description": "➣Equipped with a great performance(fully unlocked) \n➣Battery is really strong \n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 279,
    "name": "New Samsung Galaxy Z Fold6 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 11,999",
    "image": "/images/scraped/279/img_1.jpg",
    "images": [
      "/images/scraped/279/img_1.jpg",
      "/images/scraped/279/img_2.jpg",
      "/images/scraped/279/img_3.jpg",
      "/images/scraped/279/img_4.jpg"
    ],
    "description": "*Swap/exchange is allowed \n➣Get a 3-month warranty & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 280,
    "name": "Apple iPhone 12 128 GB",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,199",
    "image": "/images/scraped/280/img_1.jpg",
    "images": [
      "/images/scraped/280/img_1.jpg",
      "/images/scraped/280/img_2.jpg",
      "/images/scraped/280/img_3.jpg",
      "/images/scraped/280/img_4.jpg",
      "/images/scraped/280/img_5.jpg",
      "/images/scraped/280/img_6.jpg",
      "/images/scraped/280/img_7.jpg",
      "/images/scraped/280/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment\n➣Very neat and in good condition (factory unlocked)\n➣Battery health is 90+\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us.\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 281,
    "name": "Apple iPhone 12 Pro 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/281/img_1.jpg",
    "images": [
      "/images/scraped/281/img_1.jpg",
      "/images/scraped/281/img_2.jpg",
      "/images/scraped/281/img_3.jpg",
      "/images/scraped/281/img_4.jpg"
    ],
    "description": "➣Factory unlocked with a battery health of 90 to 96%. \n➣It’s in great condition\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 282,
    "name": "Apple iPhone 13 Pro 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/282/img_1.jpg",
    "images": [
      "/images/scraped/282/img_1.jpg",
      "/images/scraped/282/img_2.jpg",
      "/images/scraped/282/img_3.jpg",
      "/images/scraped/282/img_4.jpg",
      "/images/scraped/282/img_5.jpg",
      "/images/scraped/282/img_6.jpg",
      "/images/scraped/282/img_7.jpg",
      "/images/scraped/282/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Pre-owned from Europe/USA(unlocked)\n➣Battery health is above 90%.\n➣Enjoy a 3-month warranty, free charger & wireless earphones)\n➣Get 10GB of data from the MTN or AT for referring people to buy from us .\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 283,
    "name": "Apple iPhone 13 Pro Max 256 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/283/img_1.jpg",
    "images": [
      "/images/scraped/283/img_1.jpg",
      "/images/scraped/283/img_2.jpg",
      "/images/scraped/283/img_3.jpg",
      "/images/scraped/283/img_4.jpg",
      "/images/scraped/283/img_5.jpg",
      "/images/scraped/283/img_6.jpg",
      "/images/scraped/283/img_7.jpg",
      "/images/scraped/283/img_8.jpg"
    ],
    "description": "➣It's available in all colors (factory unlocked)\n➣Battery health is above 90% (very neat)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Also received 30GB of data to all networks by referring people to buy from us \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 284,
    "name": "Apple iPhone 12 128 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,199",
    "image": "/images/scraped/284/img_1.jpg",
    "images": [
      "/images/scraped/284/img_1.jpg",
      "/images/scraped/284/img_2.jpg",
      "/images/scraped/284/img_3.jpg",
      "/images/scraped/284/img_4.jpg",
      "/images/scraped/284/img_5.jpg",
      "/images/scraped/284/img_6.jpg",
      "/images/scraped/284/img_7.jpg",
      "/images/scraped/284/img_8.jpg",
      "/images/scraped/284/img_9.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Battery health is 100%\r\n➣It’s in great condition with a strong battery life\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN/AT for referring people to buy from us\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 285,
    "name": "Samsung Galaxy Z Flip4 256 GB Gold",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/285/img_1.jpg",
    "images": [
      "/images/scraped/285/img_1.jpg",
      "/images/scraped/285/img_2.jpg",
      "/images/scraped/285/img_3.jpg",
      "/images/scraped/285/img_4.jpg",
      "/images/scraped/285/img_5.jpg",
      "/images/scraped/285/img_6.jpg",
      "/images/scraped/285/img_7.jpg",
      "/images/scraped/285/img_8.jpg",
      "/images/scraped/285/img_9.jpg",
      "/images/scraped/285/img_10.jpg"
    ],
    "description": "➣Flip in style,a pocket size device \n➣It’s in great condition with a strong battery life\n➣Swap/trade in is allowed\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \n➣Read reviews for immediate decision \n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 286,
    "name": "New Apple iPhone 12 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/286/img_1.jpg",
    "images": [
      "/images/scraped/286/img_1.jpg",
      "/images/scraped/286/img_2.jpg",
      "/images/scraped/286/img_3.jpg",
      "/images/scraped/286/img_4.jpg"
    ],
    "description": "➣Factory unlocked\n➣Swap/ trade-in is allowed\r\n➣Get a 3-month warranty & wireless earphones\n➣And also receive 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 287,
    "name": "Apple iPhone X 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/287/img_1.jpg",
    "images": [
      "/images/scraped/287/img_1.jpg",
      "/images/scraped/287/img_2.jpg",
      "/images/scraped/287/img_3.jpg",
      "/images/scraped/287/img_4.jpg",
      "/images/scraped/287/img_5.jpg",
      "/images/scraped/287/img_6.jpg"
    ],
    "description": "➣It's extremely neat and in a good condition \n➣Battery health is 90 - 95%(factory unlocked) \n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Discover the reasons to choose us through reviews.\r\n➣ Visit the store at lapaz or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 288,
    "name": "Apple Airpod Pro",
    "category": "Accessories",
    "brand": "Apple",
    "price": "GHGH₵ 199",
    "image": "/images/scraped/288/img_1.jpg",
    "images": [
      "/images/scraped/288/img_1.jpg",
      "/images/scraped/288/img_2.jpg",
      "/images/scraped/288/img_3.jpg",
      "/images/scraped/288/img_4.jpg",
      "/images/scraped/288/img_5.jpg",
      "/images/scraped/288/img_6.jpg",
      "/images/scraped/288/img_7.jpg"
    ],
    "description": "➣The best grade to find on the market \n➣Sound is good with high quality call clarity\n➣Visit us at lapaz or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 289,
    "name": "Apple iPhone 11 Pro Max 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/289/img_1.jpg",
    "images": [
      "/images/scraped/289/img_1.jpg",
      "/images/scraped/289/img_2.jpg",
      "/images/scraped/289/img_3.jpg",
      "/images/scraped/289/img_4.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Battery health is 90%\n➣It’s in great shape & factory unlocked \r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 10GB of data from the MTN or AT referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 290,
    "name": "Samsung Galaxy S22+ 5G 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/290/img_1.jpg",
    "images": [
      "/images/scraped/290/img_1.jpg",
      "/images/scraped/290/img_2.jpg",
      "/images/scraped/290/img_3.jpg",
      "/images/scraped/290/img_4.jpg",
      "/images/scraped/290/img_5.jpg",
      "/images/scraped/290/img_6.jpg"
    ],
    "description": "➣Dual sim mode with improved camera & performance\n➣It’s in great condition\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣And also receive 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 291,
    "name": "Apple iPhone 13 Pro Max 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,799",
    "image": "/images/scraped/291/img_1.jpg",
    "images": [
      "/images/scraped/291/img_1.jpg",
      "/images/scraped/291/img_2.jpg",
      "/images/scraped/291/img_3.jpg",
      "/images/scraped/291/img_4.jpg",
      "/images/scraped/291/img_5.jpg",
      "/images/scraped/291/img_6.jpg"
    ],
    "description": "➣It's very neat in a good condition (factory unlocked).\n➣Battery health is 90% and above\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision.\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 292,
    "name": "Xbox Series \"S\" Digital (512gb) + Two Controllers",
    "category": "Accessories",
    "brand": "Xbox",
    "price": "GHGH₵ 4,999",
    "image": "/images/scraped/292/img_1.jpg",
    "images": [
      "/images/scraped/292/img_1.jpg",
      "/images/scraped/292/img_2.jpg",
      "/images/scraped/292/img_3.jpg",
      "/images/scraped/292/img_4.jpg",
      "/images/scraped/292/img_5.jpg",
      "/images/scraped/292/img_6.jpg",
      "/images/scraped/292/img_7.jpg",
      "/images/scraped/292/img_8.jpg"
    ],
    "description": "➣Comes with two controllers \n➣Get 3 months warranty \n➣Visit us at lapaz opposite of fraga oil",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 293,
    "name": "Apple iPhone 13 Pro Max 512 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,999",
    "image": "/images/scraped/293/img_1.jpg",
    "images": [
      "/images/scraped/293/img_1.jpg",
      "/images/scraped/293/img_2.jpg",
      "/images/scraped/293/img_3.jpg",
      "/images/scraped/293/img_4.jpg",
      "/images/scraped/293/img_5.jpg",
      "/images/scraped/293/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Very neat from USA /UK \n➣Battery health is 92% and above (factory unlocked)\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or AT for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 294,
    "name": "Apple iPhone 12 64 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,799",
    "image": "/images/scraped/294/img_1.jpg",
    "images": [
      "/images/scraped/294/img_1.jpg",
      "/images/scraped/294/img_2.jpg",
      "/images/scraped/294/img_3.jpg",
      "/images/scraped/294/img_4.jpg",
      "/images/scraped/294/img_5.jpg",
      "/images/scraped/294/img_6.jpg"
    ],
    "description": "➣Pre-owned from Europe/USA\n➣Battery health is 90% and above (factory unlocked).\n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 295,
    "name": "Apple iPhone 12 Pro Max 512 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/295/img_1.jpg",
    "images": [
      "/images/scraped/295/img_1.jpg",
      "/images/scraped/295/img_2.jpg",
      "/images/scraped/295/img_3.jpg",
      "/images/scraped/295/img_4.jpg",
      "/images/scraped/295/img_5.jpg",
      "/images/scraped/295/img_6.jpg",
      "/images/scraped/295/img_7.jpg",
      "/images/scraped/295/img_8.jpg",
      "/images/scraped/295/img_9.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Very neat (factory unlocked)\n➣Battery health is 90 to 95%\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us .\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 296,
    "name": "Samsung Galaxy S10e 128 GB White",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 2,150",
    "image": "/images/scraped/296/img_1.jpg",
    "images": [
      "/images/scraped/296/img_1.jpg",
      "/images/scraped/296/img_2.jpg",
      "/images/scraped/296/img_3.jpg",
      "/images/scraped/296/img_4.jpg",
      "/images/scraped/296/img_5.jpg",
      "/images/scraped/296/img_6.jpg",
      "/images/scraped/296/img_7.jpg",
      "/images/scraped/296/img_8.jpg"
    ],
    "description": "➣It's very neat\n➣Battery life is good and equipped with a great camera system\n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Discover the reasons to choose us through reviews\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 297,
    "name": "Apple iPhone XS Max 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/297/img_1.jpg",
    "images": [
      "/images/scraped/297/img_1.jpg",
      "/images/scraped/297/img_2.jpg",
      "/images/scraped/297/img_3.jpg",
      "/images/scraped/297/img_4.jpg",
      "/images/scraped/297/img_5.jpg",
      "/images/scraped/297/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Neat from UK & USA (available in all color too)\n➣Battery health ranges from 90 to 95%.\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or AT for referring people to buy from us\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 298,
    "name": "Apple iPhone 14 Pro Max 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/298/img_1.jpg",
    "images": [
      "/images/scraped/298/img_1.jpg",
      "/images/scraped/298/img_2.jpg",
      "/images/scraped/298/img_3.jpg",
      "/images/scraped/298/img_4.jpg",
      "/images/scraped/298/img_5.jpg",
      "/images/scraped/298/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Battery life is 90% and above (factory unlocked).\n➣Enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 299,
    "name": "Samsung Galaxy Z Flip6 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/299/img_1.jpg",
    "images": [
      "/images/scraped/299/img_1.jpg",
      "/images/scraped/299/img_2.jpg",
      "/images/scraped/299/img_3.jpg",
      "/images/scraped/299/img_4.jpg",
      "/images/scraped/299/img_5.jpg",
      "/images/scraped/299/img_6.jpg",
      "/images/scraped/299/img_7.jpg",
      "/images/scraped/299/img_8.jpg",
      "/images/scraped/299/img_9.jpg"
    ],
    "description": "➣Flip in style and has a great quality camera system \n➣Swap/ trade-in is allowed\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at Lapaz or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 300,
    "name": "Apple iPhone XS 64 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/300/img_1.jpg",
    "images": [
      "/images/scraped/300/img_1.jpg",
      "/images/scraped/300/img_2.jpg",
      "/images/scraped/300/img_3.jpg",
      "/images/scraped/300/img_4.jpg",
      "/images/scraped/300/img_5.jpg",
      "/images/scraped/300/img_6.jpg",
      "/images/scraped/300/img_7.jpg",
      "/images/scraped/300/img_8.jpg"
    ],
    "description": "➣We offer installment plan on all iphones ,\"Buy now ,Pay later\".\n➣ Kindly come with your Ghana card to claim at a deposit of 40~50%. \n➣We have offers for a new and used devices . \n➣We offer 3 months warranty on all phones. Google ,\"ORAR PHONES\" to find us at Lapaz opposite of fraga oil",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 301,
    "name": "Apple iPhone 11 Pro Max 256 GB Gold",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/301/img_1.jpg",
    "images": [
      "/images/scraped/301/img_1.jpg",
      "/images/scraped/301/img_2.jpg",
      "/images/scraped/301/img_3.jpg",
      "/images/scraped/301/img_4.jpg",
      "/images/scraped/301/img_5.jpg",
      "/images/scraped/301/img_6.jpg",
      "/images/scraped/301/img_7.jpg",
      "/images/scraped/301/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣It's neat (factory unlocked).\n➣Battery health is 90+\n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 10GB of data from the MTN/AT for referring people to buy from us\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 302,
    "name": "Apple iPhone 11 128 GB Green",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/302/img_1.jpg",
    "images": [
      "/images/scraped/302/img_1.jpg",
      "/images/scraped/302/img_2.jpg",
      "/images/scraped/302/img_3.jpg",
      "/images/scraped/302/img_4.jpg",
      "/images/scraped/302/img_5.jpg",
      "/images/scraped/302/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Very neat \n➣Factory unlocked with a battery health of 90% and above.\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us\n➣Visit the store at (Lapaz)or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 303,
    "name": "Samsung Galaxy Z Fold4 256 GB Blue",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,499",
    "image": "/images/scraped/303/img_1.jpg",
    "images": [
      "/images/scraped/303/img_1.jpg",
      "/images/scraped/303/img_2.jpg",
      "/images/scraped/303/img_3.jpg",
      "/images/scraped/303/img_4.jpg",
      "/images/scraped/303/img_5.jpg",
      "/images/scraped/303/img_6.jpg"
    ],
    "description": "*Swap is allowed .\n➣It's in prestine condition\n➣Multitasking is far more easier than the standard ones .\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision .\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 304,
    "name": "Apple iPhone 15 Pro Max 512 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 10,499",
    "image": "/images/scraped/304/img_1.jpg",
    "images": [
      "/images/scraped/304/img_1.jpg",
      "/images/scraped/304/img_2.jpg",
      "/images/scraped/304/img_3.jpg",
      "/images/scraped/304/img_4.jpg",
      "/images/scraped/304/img_5.jpg",
      "/images/scraped/304/img_6.jpg",
      "/images/scraped/304/img_7.jpg",
      "/images/scraped/304/img_8.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment \n➣Physical sim factory unlocked. \n➣Battery health is 90+ ,very neat \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN/AT for referring people to buy from us\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 305,
    "name": "Apple iPhone 11 Pro Max 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,499",
    "image": "/images/scraped/305/img_1.jpg",
    "images": [
      "/images/scraped/305/img_1.jpg",
      "/images/scraped/305/img_2.jpg",
      "/images/scraped/305/img_3.jpg",
      "/images/scraped/305/img_4.jpg",
      "/images/scraped/305/img_5.jpg",
      "/images/scraped/305/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Battery health is 90+ & factory unlocked. \n➣It’s very neat\r\n➣Enjoy a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN/AT or referring people to buy from us . \r\n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 306,
    "name": "Apple iPhone XR 64 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/306/img_1.jpg",
    "images": [
      "/images/scraped/306/img_1.jpg",
      "/images/scraped/306/img_2.jpg",
      "/images/scraped/306/img_3.jpg",
      "/images/scraped/306/img_4.jpg",
      "/images/scraped/306/img_5.jpg",
      "/images/scraped/306/img_6.jpg"
    ],
    "description": "*Installment plan (iPhones) is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣Pre-owned from UK & USA \n➣It's very neat and in good condition\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 307,
    "name": "Apple iPhone XR 128 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/307/img_1.jpg",
    "images": [
      "/images/scraped/307/img_1.jpg",
      "/images/scraped/307/img_2.jpg",
      "/images/scraped/307/img_3.jpg",
      "/images/scraped/307/img_4.jpg",
      "/images/scraped/307/img_5.jpg",
      "/images/scraped/307/img_6.jpg"
    ],
    "description": "➣It's available in all colors (factory unlocked).\n➣Battery health is 90% and above(very neat)\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 308,
    "name": "Apple iPhone 14 Pro Max 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/308/img_1.jpg",
    "images": [
      "/images/scraped/308/img_1.jpg",
      "/images/scraped/308/img_2.jpg",
      "/images/scraped/308/img_3.jpg",
      "/images/scraped/308/img_4.jpg",
      "/images/scraped/308/img_5.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Battery health is over 90%(very neat)\n➣Factory unlocked (esim)\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to MTN/AT by referring us to others\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 309,
    "name": "Apple iPhone 13 128 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,999",
    "image": "/images/scraped/309/img_1.jpg",
    "images": [
      "/images/scraped/309/img_1.jpg",
      "/images/scraped/309/img_2.jpg",
      "/images/scraped/309/img_3.jpg",
      "/images/scraped/309/img_4.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Battery health is 90% and above.\n➣Enjoy a 3-month warranty, free charger & wireless earphones).\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 310,
    "name": "Google Pixel 7 128 GB White",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 2,999",
    "image": "/images/scraped/310/img_1.jpg",
    "images": [
      "/images/scraped/310/img_1.jpg",
      "/images/scraped/310/img_2.jpg",
      "/images/scraped/310/img_3.jpg",
      "/images/scraped/310/img_4.jpg",
      "/images/scraped/310/img_5.jpg",
      "/images/scraped/310/img_6.jpg"
    ],
    "description": "➣Pre-owned from UK & USA (very neat)\n➣Smooth OS ,HQ camera system with a strong battery life .\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 311,
    "name": "Samsung Galaxy Z Flip 5 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/311/img_1.jpg",
    "images": [
      "/images/scraped/311/img_1.jpg",
      "/images/scraped/311/img_2.jpg",
      "/images/scraped/311/img_3.jpg",
      "/images/scraped/311/img_4.jpg",
      "/images/scraped/311/img_5.jpg",
      "/images/scraped/311/img_6.jpg",
      "/images/scraped/311/img_7.jpg",
      "/images/scraped/311/img_8.jpg",
      "/images/scraped/311/img_9.jpg"
    ],
    "description": "Swap is allowed .\n➣It's in excellent condition with a strong battery life.\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 312,
    "name": "New Apple iPhone 16 Pro Max 256 GB Bronze",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 15,999",
    "image": "/images/scraped/312/img_1.jpg",
    "images": [
      "/images/scraped/312/img_1.jpg",
      "/images/scraped/312/img_2.jpg",
      "/images/scraped/312/img_3.jpg",
      "/images/scraped/312/img_4.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment \n➣Factory unlocked(physical sim)\n➣Get a 3-month warranty & a free wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 313,
    "name": "New Apple iPhone 13 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 5,499",
    "image": "/images/scraped/313/img_1.jpg",
    "images": [
      "/images/scraped/313/img_1.jpg",
      "/images/scraped/313/img_2.jpg",
      "/images/scraped/313/img_3.jpg",
      "/images/scraped/313/img_4.jpg"
    ],
    "description": "*Brand new (factory unlocked)\n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us.\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 314,
    "name": "Samsung Galaxy S23 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,699",
    "image": "/images/scraped/314/img_1.jpg",
    "images": [
      "/images/scraped/314/img_1.jpg",
      "/images/scraped/314/img_2.jpg",
      "/images/scraped/314/img_3.jpg",
      "/images/scraped/314/img_4.jpg",
      "/images/scraped/314/img_5.jpg",
      "/images/scraped/314/img_6.jpg"
    ],
    "description": "➣Its one of the best small smartphone in world (better display,nice camera)\n➣It's in excellent condition.\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 315,
    "name": "Apple iPhone 13 256 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 4,799",
    "image": "/images/scraped/315/img_1.jpg",
    "images": [
      "/images/scraped/315/img_1.jpg",
      "/images/scraped/315/img_2.jpg",
      "/images/scraped/315/img_3.jpg",
      "/images/scraped/315/img_4.jpg",
      "/images/scraped/315/img_5.jpg",
      "/images/scraped/315/img_6.jpg",
      "/images/scraped/315/img_7.jpg",
      "/images/scraped/315/img_8.jpg"
    ],
    "description": "➣Very neat in good condition. ➣Battery health is 92% and it’s fully unlocked\n ➣Discover why to choose us through reviews.\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Enjoy a 3-month warranty, free charger and earpods.\n➣Visit store at lapaz or choose convenient delivery ( pay on delivery )",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 316,
    "name": "New Samsung Galaxy S22 5G 128 GB Purple",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/316/img_1.jpg",
    "images": [
      "/images/scraped/316/img_1.jpg",
      "/images/scraped/316/img_2.jpg",
      "/images/scraped/316/img_3.jpg",
      "/images/scraped/316/img_4.jpg"
    ],
    "description": "➣It has \"No form of restriction\" (strong battery life)\n➣Swap is available \n➣For phone purchases, enjoy a 3-month warranty & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 317,
    "name": "Google Pixel 7 Pro 128 GB Green",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/317/img_1.jpg",
    "images": [
      "/images/scraped/317/img_1.jpg",
      "/images/scraped/317/img_2.jpg",
      "/images/scraped/317/img_3.jpg",
      "/images/scraped/317/img_4.jpg",
      "/images/scraped/317/img_5.jpg",
      "/images/scraped/317/img_6.jpg",
      "/images/scraped/317/img_7.jpg",
      "/images/scraped/317/img_8.jpg"
    ],
    "description": "➣\" Not refurbished \" (unlike many on the market).\n➣The camera looks superb \n➣It’s in great condition. \n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \n➣Read reviews for immediate decision \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 318,
    "name": "New Apple iPhone 16 Plus 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 11,999",
    "image": "/images/scraped/318/img_1.jpg",
    "images": [
      "/images/scraped/318/img_1.jpg",
      "/images/scraped/318/img_2.jpg",
      "/images/scraped/318/img_3.jpg",
      "/images/scraped/318/img_4.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \"with a 40~50% downpayment \n➣Physical sim variant \n➣For phone purchases, enjoy a 3-month warranty, free charger & wireless earphones ).\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us .\r\n➣ Visit the store at lapaz or choose convenient pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 319,
    "name": "Apple iPhone 12 128 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 3,199",
    "image": "/images/scraped/319/img_1.jpg",
    "images": [
      "/images/scraped/319/img_1.jpg",
      "/images/scraped/319/img_2.jpg",
      "/images/scraped/319/img_3.jpg",
      "/images/scraped/319/img_4.jpg",
      "/images/scraped/319/img_5.jpg",
      "/images/scraped/319/img_6.jpg"
    ],
    "description": "➣Very neat and in a good condition (factory unlocked).\n➣Battery health is 90% and above\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision.\r\n➣Visit the store at (Lapaz) or choose pay-on-delivery.",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 320,
    "name": "New Apple iPhone 15 Pro Max 256 GB Blue",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 12,999",
    "image": "/images/scraped/320/img_1.jpg",
    "images": [
      "/images/scraped/320/img_1.jpg",
      "/images/scraped/320/img_2.jpg",
      "/images/scraped/320/img_3.jpg",
      "/images/scraped/320/img_4.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later \",with a 40~50% downpayment\n➣Sealed with a physical sim\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \n➣Visit the store at (Lapaz) near big traffic lights or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 321,
    "name": "New Samsung Galaxy Z Fold 3 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/321/img_1.jpg",
    "images": [
      "/images/scraped/321/img_1.jpg",
      "/images/scraped/321/img_2.jpg",
      "/images/scraped/321/img_3.jpg",
      "/images/scraped/321/img_4.jpg"
    ],
    "description": "*Multitasking made easier\n➣Strong battery life\n➣Get a 3-month warranty & and wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 322,
    "name": "New Samsung Galaxy S24 Plus 256 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 7,999",
    "image": "/images/scraped/322/img_1.jpg",
    "images": [
      "/images/scraped/322/img_1.jpg",
      "/images/scraped/322/img_2.jpg",
      "/images/scraped/322/img_3.jpg",
      "/images/scraped/322/img_4.jpg"
    ],
    "description": "➣Has a great performance with a strong battery life\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 323,
    "name": "Apple iPhone XR 128 GB White",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,299",
    "image": "/images/scraped/323/img_1.jpg",
    "images": [
      "/images/scraped/323/img_1.jpg",
      "/images/scraped/323/img_2.jpg",
      "/images/scraped/323/img_3.jpg",
      "/images/scraped/323/img_4.jpg",
      "/images/scraped/323/img_5.jpg",
      "/images/scraped/323/img_6.jpg",
      "/images/scraped/323/img_7.jpg",
      "/images/scraped/323/img_8.jpg"
    ],
    "description": "➣Available in all colors(factory unlocked).\n➣Battery health is 90% and above (effectively)\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 324,
    "name": "Apple iPhone XS Max 64 GB Black",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/324/img_1.jpg",
    "images": [
      "/images/scraped/324/img_1.jpg",
      "/images/scraped/324/img_2.jpg",
      "/images/scraped/324/img_3.jpg",
      "/images/scraped/324/img_4.jpg",
      "/images/scraped/324/img_5.jpg",
      "/images/scraped/324/img_6.jpg"
    ],
    "description": "➣Battery health is 90% and above (factory unlocked)\r\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 325,
    "name": "New Google Pixel 8 Pro 128 GB Black",
    "category": "Phones",
    "brand": "Google",
    "price": "GHGH₵ 6,499",
    "image": "/images/scraped/325/img_1.jpg",
    "images": [
      "/images/scraped/325/img_1.jpg",
      "/images/scraped/325/img_2.jpg",
      "/images/scraped/325/img_3.jpg",
      "/images/scraped/325/img_4.jpg",
      "/images/scraped/325/img_5.jpg",
      "/images/scraped/325/img_6.jpg"
    ],
    "description": "➣Another meaning of pixel is best camera features and software.\n➣It supports 7(yrs) OS updates.\n➣Get 3-month warranty & wireless earphones\n➣Get 30GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) near big traffic light or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 326,
    "name": "New Samsung Galaxy S22 Ultra 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 5,999",
    "image": "/images/scraped/326/img_1.jpg",
    "images": [
      "/images/scraped/326/img_1.jpg",
      "/images/scraped/326/img_2.jpg",
      "/images/scraped/326/img_3.jpg",
      "/images/scraped/326/img_4.jpg",
      "/images/scraped/326/img_5.jpg",
      "/images/scraped/326/img_6.jpg"
    ],
    "description": "*Brand new\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 30GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision\n➣Visit the store at lapaz opposite fraga oil or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 327,
    "name": "Samsung Galaxy S23 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,699",
    "image": "/images/scraped/327/img_1.jpg",
    "images": [
      "/images/scraped/327/img_1.jpg",
      "/images/scraped/327/img_2.jpg",
      "/images/scraped/327/img_3.jpg",
      "/images/scraped/327/img_4.jpg"
    ],
    "description": "➣Fully unlocked \n➣Great performance with avstrong battery life \n➣Get a 3-month warranty & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us. \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 328,
    "name": "New Samsung Galaxy Z Flip4 128 GB Black",
    "category": "Phones",
    "brand": "Samsung",
    "price": "GHGH₵ 4,499",
    "image": "/images/scraped/328/img_1.jpg",
    "images": [
      "/images/scraped/328/img_1.jpg",
      "/images/scraped/328/img_2.jpg",
      "/images/scraped/328/img_3.jpg",
      "/images/scraped/328/img_4.jpg"
    ],
    "description": "➣Brand New\n➣Get a 3-month warranty, free charger & wireless earphones\r\n➣Also, get 10GB of data to all networks by referring us to others \r\n➣Read reviews for immediate decision\n➣Visit the store at Lapaz, opposite of fraga oil, or choose a convenient delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 329,
    "name": "Apple iPhone XR 64 GB Red",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 1,999",
    "image": "/images/scraped/329/img_1.jpg",
    "images": [
      "/images/scraped/329/img_1.jpg",
      "/images/scraped/329/img_2.jpg",
      "/images/scraped/329/img_3.jpg",
      "/images/scraped/329/img_4.jpg",
      "/images/scraped/329/img_5.jpg",
      "/images/scraped/329/img_6.jpg"
    ],
    "description": "➣Available in all colors (slightly used)\n➣Very neat and in a good condition \n➣Battery health is 90 - 95%\n➣Get 3-month warranty, free charger & wireless earphones\n➣Get 10GB of data from the MTN or other networks for referring people to buy from us . \r\n➣Read reviews for immediate decision \r\n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  },
  {
    "id": 330,
    "name": "Locked\nApple iPhone 13 128 GB",
    "category": "Phones",
    "brand": "Apple",
    "price": "GHGH₵ 2,499",
    "image": "/images/scraped/330/img_1.jpg",
    "images": [
      "/images/scraped/330/img_1.jpg",
      "/images/scraped/330/img_2.jpg",
      "/images/scraped/330/img_3.jpg",
      "/images/scraped/330/img_4.jpg",
      "/images/scraped/330/img_5.jpg",
      "/images/scraped/330/img_6.jpg"
    ],
    "description": "*Installment plan is ongoing \"buy now pay later,\" with a 40~50% downpayment\n➣It's very neat in a good condition (locked)\n➣Battery health is 88%\n➣Get a 3-month warranty, free charger & wireless earphones\n➣Also, get 10GB of data to all networks by referring us to others \n➣Visit the store at (Lapaz) or choose pay-on-delivery",
    "specs": [
      {
        "label": "Condition",
        "value": "Used"
      },
      {
        "label": "Warranty",
        "value": "3 Months"
      }
    ]
  }
]];
