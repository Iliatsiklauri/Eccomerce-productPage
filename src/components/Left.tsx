import { useContext } from 'react';
import { GlobalStates } from '../data';

const Left = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>nocontext</h1>;
  }
  const { sidebar } = context;
  return (
    <div
      className={`xl:hidden h-full w-[250px] top-0 absolute bg-white left-[-250px] flex flex-col items-start  gap-3  pt-20 pl-6 transition-all duration-500 ease-in-out z-40 ${
        !sidebar ? 'left-[0]' : null
      }`}
    >
      <p className="cursor-pointer">Collection</p>
      <p className="cursor-pointer">Men</p>
      <p className="cursor-pointer">Woman</p>
      <p className="cursor-pointer">About</p>
      <p className="cursor-pointer">Contact</p>
    </div>
  );
};

export default Left;
