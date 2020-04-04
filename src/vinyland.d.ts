export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
}

export interface CartProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
  amount: number;
}
