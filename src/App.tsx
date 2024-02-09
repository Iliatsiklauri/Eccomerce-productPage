import { useState } from 'react';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex w-screen h-screen flex-col items-center relative">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Gallery />
      <div
        className={`h-full w-[250px] top-0 absolute bg-white left-[-250px] flex flex-col items-start  gap-3 justify-center ${
          !sidebar ? 'left-[0]' : null
        }`}
      >
        <p>Collection</p>
        <p>Men</p>
        <p>Woman</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default App;
