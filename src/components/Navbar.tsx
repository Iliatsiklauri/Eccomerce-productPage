type propsType = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ sidebar, setSidebar }: propsType) => {
  return (
    <div className="w-full h-[80px] flex items-center  justify-center relative">
      <div className="flex w-10/12 justify-between items-center z-10">
        <div className="flex gap-4">
          <img
            src="public\Combined Shape 2 (1).svg"
            alt=""
            className="cursor-pointer"
            onClick={() => {
              setSidebar(!sidebar);
              console.log(sidebar);
            }}
          />
          <img src="public\sneakers 2.png" alt="" />
        </div>
        <div className="flex gap-6">
          <img src="public\Group 14.png" alt="" className="cursor-pointer" />
          <img src="public\Oval.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
