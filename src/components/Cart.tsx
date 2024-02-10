import { useContext } from 'react';
import { GlobalStates } from '../data';
import Insidecart from './Insidecart';

const Cart = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>no context</h1>;
  }
  const { cart, push } = context;

  return (
    <div
      className={`h-[256px] w-[360px]  absolute top-16  m-auto rounded-lg bg-white  ${
        cart ? 'block' : 'hidden'
      }`}
      style={{
        boxShadow: '0px 20px 50px -20px rgba(29, 32, 38, 0.50)',
      }}
    >
      <p className="text-gray-700 font-bold text-base mt-6 ml-6">Cart</p>
      <div className="absolute w-full bg-[#E4E9F2] h-[1px] mt-[30px]"></div>
      {!push ? (
        <p className=" absolute left-[30%] bottom-16 text-gray-600 text-center font-bold  text-sm leading-6">
          Your cart is empty
        </p>
      ) : (
        <Insidecart />
      )}
    </div>
  );
};

export default Cart;
