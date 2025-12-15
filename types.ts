export interface Attraction {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Rental {
  id: number;
  title: string;
  description: string;
  capacity: string;
  price?: string; // Optional, as some might need inquiry
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceItem {
  category: string;
  price: string;
  detail?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}