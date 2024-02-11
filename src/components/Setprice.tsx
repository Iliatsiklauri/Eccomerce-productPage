import { useContext } from 'react';
import { GlobalStates } from '../data';

const Setprice = () => {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { count, setCount } = context;
  return (
    <div className="mt-6 w-full h-[56px] flex justify-between pl-5 pr-5 items-center border-xl bg-[#F6F8FD]">
      <img
        src="icon-minus.svg"
        alt=""
        className="cursor-pointer"
        onClick={() => {
          count > 1 ? setCount(count - 1) : null;
        }}
      />
      <h1>{count}</h1>

      <img
        src="icon-plus.svg"
        alt=""
        className="cursor-pointer"
        onClick={() => {
          count < 10 ? setCount(count + 1) : null;
        }}
      />
    </div>
  );
};

export default Setprice;
