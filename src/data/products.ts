export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  thumbnails: string[];
  description: string;
  specs: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB Titanium",
    category: "Mobiles",
    price: 1199.99,
    rating: 4.8,
    reviews: 1245,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "The iPhone 15 Pro Max features a strong and lightweight aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that's tougher than any smartphone glass.",
    specs: {
      Brand: "Apple",
      Color: "Natural Titanium",
      Storage: "256GB",
      ScreenSize: "6.7 Inches"
    }
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Headphones",
    price: 348.00,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "The best noise canceling headphones on the market. Two processors control 8 microphones for unprecedented noise cancellation and call quality.",
    specs: {
      Brand: "Sony",
      Color: "Black",
      Connectivity: "Wireless/Bluetooth",
      BatteryLife: "30 Hours"
    }
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch M3 Pro",
    category: "Laptops",
    price: 1999.00,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "The 14-inch MacBook Pro with M3 Pro and M3 Max is a powerhouse that brings pro performance to a beautifully compact design.",
    specs: {
      Brand: "Apple",
      Color: "Space Black",
      RAM: "18GB",
      Storage: "512GB SSD"
    }
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6 Classic",
    category: "Smart Watches",
    price: 399.99,
    rating: 4.6,
    reviews: 651,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Look your best and do more with the Galaxy Watch6 Classic smartwatch. Featuring a rotating bezel for easy navigation.",
    specs: {
      Brand: "Samsung",
      Color: "Silver",
      Size: "47mm",
      Connectivity: "Bluetooth + LTE"
    }
  },
  {
    id: 5,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 99.99,
    rating: 4.8,
    reviews: 1845,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
    specs: {
      Brand: "Logitech",
      Color: "Graphite",
      Connectivity: "Wireless",
      Compatibility: "Windows/Mac"
    }
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    category: "Mobiles",
    price: 1299.99,
    rating: 4.9,
    reviews: 843,
    image: "https://images.unsplash.com/photo-1610945264803-c22b6272a7c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1610945264803-c22b6272a7c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity and productivity.",
    specs: {
      Brand: "Samsung",
      Color: "Titanium Gray",
      Storage: "512GB",
      ScreenSize: "6.8 Inches"
    }
  },
  {
    id: 7,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1749.00,
    rating: 4.5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "The XPS 15 is the perfect balance of size and performance to fuel even more intensive creative projects.",
    specs: {
      Brand: "Dell",
      Color: "Platinum Silver",
      RAM: "16GB",
      Storage: "1TB SSD"
    }
  },
  {
    id: 8,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Headphones",
    price: 249.00,
    rating: 4.8,
    reviews: 2154,
    image: "https://images.unsplash.com/photo-1606220588913-b3aecb4d061f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1606220588913-b3aecb4d061f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency and Personalized Spatial Audio with dynamic head tracking.",
    specs: {
      Brand: "Apple",
      Color: "White",
      Connectivity: "Wireless/Bluetooth",
      BatteryLife: "Up to 30 hours with case"
    }
  }
];