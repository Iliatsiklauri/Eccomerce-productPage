import { useContext } from 'react';
import Button from './Button';
import { GlobalStates } from '../data';

const Insidecart = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>no context</h1>;
  }
  const { count, price, setPush } = context;
  return (
    <div className="w-11/12 h-[150px] bg-white absolute bottom-[20px] left-[15px]">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="flex justify-between items-center w-full mt-4">
          <img src="Rectangle (2).png" alt="" />
          <div>
            <p className=" text-gray-600  text-base font-normal leading-6">
              Fall Limited Edition Sneakers
            </p>
            <div className="flex items-center justify-between w-[190px]">
              <p className="text-gray-600 text-base font-normal leading-6">
                ${price}.00 x {count}
              </p>
              <p className="text-gray-800 text-base font-bold leading-6">
                ${price * count}.00
              </p>
            </div>
          </div>
          <img
            src="icon-delete.svg"
            alt=""
            className="w-[14px] h-[16px] cursor-pointer"
            onClick={() => setPush(false)}
          />
        </div>
        <Button text={'Checkout'} display={false} />
      </div>
    </div>
  );
};

export default Insidecart;
