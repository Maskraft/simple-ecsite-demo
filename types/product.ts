export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  badges: string[];
  tags: string[];
  stock: number;
  rating: number;
  reviews: number;
  thumbnail: string;
  features: string[];
  shippingDays: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  highlight: string;
}

