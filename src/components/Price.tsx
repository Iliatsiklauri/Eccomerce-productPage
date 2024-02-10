import { useContext } from 'react';
import { GlobalStates } from '../data';

const Price = () => {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { price, count } = context;
  return (
    <div className="w-full h-[34px] flex justify-between mt-6">
      <div className="flex gap-6 items-center">
        <h2 className="text-gray-800 font-bold text-2xl leading-normal">
          ${price * count}.00
        </h2>
        <div className="w-[51px] h-[27px] text-[#FF7E1B] bg-[#FFEEE2] rounded-md text-center">
          50%
        </div>
      </div>
      <div className="flex items-center text-gray-400 font-bold  text-base leading-6 line-through">
        ${price * 2 * count}.00
      </div>
    </div>
  );
};

export default Price;
