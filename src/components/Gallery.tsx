import { useState } from 'react';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  const images = [
    'public/main/image-product-1.jpg',
    'public/main/image-product-2.jpg',
    'public/main/image-product-3.jpg',
    'public/main/image-product-4.jpg',
  ];

  return (
    <div className="w-full h-[300px] bg-black ">
      <img
        src="public\Group 18 Copy 3.png"
        alt=""
        className="cursor-pointer absolute mt-28 right-4"
        onClick={handlePrev}
      />
      <img
        src="public\Group 18 Copy 2.png"
        alt=""
        className="cursor-pointer absolute mt-28 left-4"
        onClick={handleNext}
      />
      <img src={images[currentImageIndex]} className="w-full h-full" />
    </div>
  );
};

export default Gallery;