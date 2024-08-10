import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed   px-4  ">
      <div>
        <h1 className="text-3xl md:text-5xl font-signature ml-2">Gaurav</h1>
      </div>
      <ul className="hidden md:flex ">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Home
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          about
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          portfolio
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          experience
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          contact
        </li>
      </ul>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
          <li className="px-4 cursor-pointer py-6 text-4xl ">Home</li>
          <li className="px-4 cursor-pointer py-6 text-4xl ">About</li>
          <li className="px-4 cursor-pointer py-6 text-4xl ">Portfolio</li>
          <li className="px-4 cursor-pointer py-6 text-4xl ">Experience</li>
          <li className="px-4 cursor-pointer py-6 text-4xl ">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
