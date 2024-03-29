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
  centerDiv: boolean;
  setCenterDiv: React.Dispatch<React.SetStateAction<boolean>>;
};

export const images = [
  'main/image-product-1.jpg',
  'main/image-product-2.jpg',
  'main/image-product-3.jpg',
  'main/image-product-4.jpg',
];

export const GlobalStates = createContext<globaltype | null>(null);
