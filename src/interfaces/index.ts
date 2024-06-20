import { ReactNode } from "react";
export interface ProductObject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: { rate: string; count: number };
  quantity: number;
}
export interface ProductProps {
  allProducts: ProductObject[];
  onAdd: (item: ProductObject) => void;
}
export interface ChildrenProps {
  children: ReactNode;
}

export interface ProductItemProps {
  productItem: ProductObject;
  onAdd: (item: ProductObject) => void;
}

export interface ShoppingCartObject {
  items: number;
  cartItems: ProductObject[];
  total: number;
}
