// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB Titanium",
    price: 1199.99,
    category: "Mobile",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 348.00,
    category: "Audio",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch M3 Pro",
    price: 1999.00,
    category: "Laptops",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 399.99,
    category: "Wearables",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
  }
];