import { useContext } from 'react';
import { GlobalStates } from '../data';

const Navbar = () => {
  const context = useContext(GlobalStates);

  if (!context) {
    return <h1>nocontext</h1>;
  }
  const { sidebar, setSidebar, setCart, cart } = context;

  return (
    <div className="w-full h-[60px] flex items-center  justify-center xl:absolute xl:top-0 xl:h-[100px]">
      <div className="flex w-10/12 h-full justify-between items-center">
        <div className="flex gap-4">
          {sidebar ? (
            <img
              src="Combined Shape 2 (1).svg"
              alt=""
              className="xl:hidden cursor-pointer z-50 ransition-opacity hover:opacity-90"
              onClick={() => {
                setSidebar(!sidebar);
              }}
            />
          ) : (
            <img
              src="icon-close.svg"
              alt=""
              className="xl:hidden cursor-pointer z-50 ransition-opacity hover:opacity-90"
              onClick={() => {
                setSidebar(!sidebar);
              }}
            />
          )}
          <img src="logo.svg" alt="" />
        </div>
        <div className="gap-8 hidden xl:flex mr-[350px] mt-9">
          <p className="cursor-pointer  hover:border-b-4  pb-8 hover:pb-5 hover:border-b-[#FF7E1B]">
            Collections
          </p>
          <p className="cursor-pointer hover:border-b-4  pb-8 hover:pb-5 hover:border-b-[#FF7E1B]">
            Men
          </p>
          <p className="cursor-pointer  hover:border-b-4  pb-8 hover:pb-5 hover:border-b-[#FF7E1B]">
            Women
          </p>
          <p className="cursor-pointer  hover:border-b-4  pb-8 hover:pb-5 hover:border-b-[#FF7E1B]">
            About
          </p>
          <p className="cursor-pointer hover:border-b-4  pb-8 hover:pb-5 hover:border-b-[#FF7E1B]">
            Contact
          </p>
        </div>
        <div className="flex gap-6">
          <img
            src="icon-cart.svg"
            alt=""
            className="cursor-pointer w-[21px] h-[20px]  xl:mt-[18px]"
            onClick={() => setCart(!cart)}
          />
          <img src="Oval.png" alt="" className="xl:hidden" />
          <img src="ovaal.png" alt="" className="hidden xl:block w-[50px] " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
