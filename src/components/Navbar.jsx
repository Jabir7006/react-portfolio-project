import { AiOutlineMenu } from "react-icons/ai"; 
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShareAlt, AiOutlineClose } from 'react-icons/ai';
import { BsSun} from 'react-icons/bs';

function Navbar() {

        const [nav, setNav] = useState(false);
  

  return (

    <>
   
      <button className="absolute top-5 right-5">
      <BsSun size={20}/>
      </button>
   
  

    <nav className="nav text-white lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-screen lg:w-20 lg:fixed lg:bg-[#0b0a10] py-6 ">

      <div className="">
        <h3 className="hidden font-bold bg-[#ff384a] lg:inline-block py-2 px-3 rounded-full">M</h3>

      </div>

       <button className="block lg:hidden bg-[#ff384a] py-1 px-2 rounded-sm ms-4" onClick={() => setNav(!nav)}>
          {!nav ? <AiOutlineMenu size={23} /> : <AiOutlineClose size={23}/>}
        </button>

      <div className="hidden lg:block rotate-[-90deg]">
        <ul className="flex flex-row-reverse gap-6">
          <li className="hover:text-[#ff384a] transition-all md:duration-300 li-style">
            <NavLink to="/" className="text-[.9rem] xl:text-[1rem]">Home</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style">
            <NavLink to="about" className="text-[.9rem] xl:text-[1rem]">About</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style">
            <NavLink to="services" className="text-[.9rem] xl:text-[1rem]">Services</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style">
            <NavLink to="/works" className="text-[.9rem] xl:text-[1rem]">Works</NavLink>
          </li>
         
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style">
            <NavLink to="contact" className="text-[.9rem] xl:text-[1rem]">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block">
        <AiOutlineShareAlt size={25} className="cursor-pointer" />
      </div>

       {/* mobile menu */}


  <div className={`menu-div bock lg:hidden ${nav ? "menu-open" : ""}`}>
  {nav && <div>
        <ul className="flex flex-col gap-6">
          <li className="hover:text-[#ff384a] transition-all md:duration-300 li-style" onClick={() => setNav(!nav)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style" onClick={() => setNav(!nav)}>
            <NavLink to="about">About</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style" onClick={() => setNav(!nav)}>
            <NavLink to="services">Services</NavLink>
          </li>
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style" onClick={() => setNav(!nav)}>
            <NavLink to="/works">Works</NavLink>
          </li>
          
          <li className="hover:text-[#ff384a] transition-all duration-300 li-style" onClick={() => setNav(!nav)}>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>}
  </div>
    </nav>
    </>
  );
}

export default Navbar;
