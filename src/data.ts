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
};

export const GlobalStates = createContext<globaltype | null>(null);
