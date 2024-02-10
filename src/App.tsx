import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Left from './components/Left';
import Content from './components/Content';
import Price from './components/Price';
import { GlobalStates } from './data';
import { useState } from 'react';
import Setprice from './components/Setprice';
import Button from './components/Button';
import Cart from './components/Cart';
import './App.css';
import Thumbnail from './components/Thumbnail';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [price, setPrice] = useState(125);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);
  const [push, setPush] = useState(false);
  return (
    <GlobalStates.Provider
      value={{
        price,
        setPrice,
        count,
        setCount,
        sidebar,
        setSidebar,
        cart,
        setCart,
        push,
        setPush,
      }}
    >
      <div className="flex flex-col items-center pb-12 relative xl:flex-row xl:justify-center xl:items-center xl:h-screen xl:gap-[175px] xl:mb-32">
        <div className="absolute hidden w-[85%] h-[1px] bg-[#E4E9F2] top-[100px] xl:block"></div>
        <Navbar />
        <div className="w-full max-w-[425px] xl:mt-80">
          <Gallery />
          <Thumbnail />
        </div>
        <Left />
        <div className="base w-11/12 max-w-[425px] xl:mt-44">
          <Content />
          <Price />
          <Setprice />
          <Button text={'Add to cart'} display={true} />
          <Cart />
        </div>
      </div>
    </GlobalStates.Provider>
  );
};

export default App;
