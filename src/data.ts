import { createContext } from 'react';

type globaltype = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  push: boolean;
  setPush: React.Dispatch<React.SetStateAction<boolean>>;
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const images = [
  'public/main/image-product-1.jpg',
  'public/main/image-product-2.jpg',
  'public/main/image-product-3.jpg',
  'public/main/image-product-4.jpg',
];

export const GlobalStates = createContext<globaltype | null>(null);
