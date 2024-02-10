const Thumbnail = () => {
  return (
    <div className="hidden xl:flex w-full justify-between mt-8">
      <img
        src="public\image-product-1-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
      />
      <img
        src="public\image-product-2-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
      />
      <img
        src="public\image-product-3-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
      />
      <img
        src="public\image-product-4-thumbnail.jpg"
        alt=""
        className="h-[88px] w-[88px] rounded-lg cursor-pointer hover:opacity-35 hover:border-2 hover:border-[#FF7E1B]"
      />
    </div>
  );
};

export default Thumbnail;
