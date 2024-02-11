import { useContext } from 'react';
import { GlobalStates } from '../data';

const Thumbnail = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>nocontext</h1>;
  }
  const { setCurrentImageIndex } = context;

  return (
    <div className="hidden xl:flex w-full justify-between mt-8">
      <img
        src="public\image-product-1-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
        id="1"
        onClick={() => setCurrentImageIndex(0)}
      />
      <img
        src="public\image-product-2-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
        id="2"
        onClick={() => setCurrentImageIndex(1)}
      />
      <img
        src="public\image-product-3-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
        id="3"
        onClick={() => setCurrentImageIndex(2)}
      />
      <img
        src="public\image-product-4-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
        id="3"
        onClick={() => setCurrentImageIndex(3)}
      />
    </div>
  );
};

export default Thumbnail;
