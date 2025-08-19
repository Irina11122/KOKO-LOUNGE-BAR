import { useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { RiLoginBoxFill } from 'react-icons/ri';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="z-50 flex justify-between p-3 bg-black text-gray-100 fixed w-full z-10">
      <h1 className="montserrat-underline-700 text-2xl">Koko Lounge-bar</h1>
      {/* ------------ Desktop Nav ----------------- */}
      <nav className="md:flex gap-10 hidden text-2xl playfair-display-400">
        <a href="#home">Home</a>
        <a href="#specialties">Specialties</a>
        <Link to="/menu">Menu</Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="flex gap-3 relative">
        <button className="md:block hidden">
          <RiLoginBoxFill size={30} />
        </button>

        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setMenu(true)}
        >
          <HiMiniBars3BottomRight
            className={`${menu ? 'opacity-0' : 'opacity-100'}`}
            size={30}
          />
        </button>
      </div>

      {/* Hamburg Menu */}

      {menu && (
        <div className="fixed top-0 w-full z-50 right-0">
          <button
            className="md:hidden block cursor-pointer z-10 absolute top-2 right-2"
            onClick={() => setMenu(false)}
          >
            <LiaTimesSolid size={35} />
          </button>
          <nav className="absolute h-screen bg-black/90 top-0 right-0 w-screen flex flex-col gap-10 justify-center items-start pl-3 text-4xl uppercase font-bold">
            <Link to="/">Home</Link>
            <a href="#specialties">Specialties</a>
            <Link to="/menu">Menu</Link>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}
