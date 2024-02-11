import { useContext } from 'react';
import { GlobalStates } from '../data';
import { images } from '../data';
const Gallery = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>nocontext</h1>;
  }
  const { currentImageIndex, setCurrentImageIndex } = context;

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="w-full h-[300px] max-w-[425px] relative xl:h-[445px]">
      <img
        src="public\Group 18 Copy 3.png"
        alt=""
        className="cursor-pointer absolute mt-28 right-4 xl:hidden"
        onClick={handlePrev}
      />
      <img
        src="public\Group 18 Copy 2.png"
        alt=""
        className="cursor-pointer absolute mt-28 left-4 xl:hidden"
        onClick={handleNext}
      />
      <img
        src={images[currentImageIndex]}
        className="w-full h-full xl:rounded-xl xl:cursor-pointer"
      />
    </div>
  );
};

export default Gallery;
