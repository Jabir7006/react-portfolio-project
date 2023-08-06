/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsMessenger } from "react-icons/bs"; 
import { AiOutlineUser, AiOutlineWhatsApp,AiOutlineMail } from "react-icons/ai";
import { RxBorderSolid } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../assets/home-img.png';

const Home = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto lg:ps-28 xl:ps-20 px-8">
        <div className="flex items-center md:gap-5 gap-3 text-[#cdd0dd] follow-div">
          <p className="font-medium">Follow Me</p>
          <RxBorderSolid />
          <a href="/" className="hover:text-[#ff3c4c] duration-500'">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-[#ff3c4c] duration-500'">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-[#ff3c4c] duration-500'">
            <FaTwitter />
          </a>
        </div>

       <div className="flex flex-col-reverse md:flex-row md:justify-between items-center ">
       <div className="md:w-[500px]">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-loose mb-1">
            Hi, I'am <span className="text-[#ff3c4c]">Mariam</span>
          </h1>

          <h6 className="font-medium text-[#d1c9c9] mb-3 text-[17px]">Frontend Devoloper</h6>

          <p className="text-[#cdd0dd] text-[15px] md:text-[14px] lg:text-[15px] lg:font-medium mb-8 leading-7">
            High level experience in web design and development knowledge, producing quality work.
          </p>

         <Link to="/about" className="inline-block">
         <button className="btn-style flex items-center gap-3 bg-[#ff3c4c] py-3 px-6 rounded relative z-10 transition duration-[.4s]">
            <AiOutlineUser size={20}/>
            More About Me
          </button>
         </Link>
        </div>

         
         <img className="w-[80%] pb-5 md:pb-0 md:w-3/5" src={img} alt="" />
       </div>


        <div className="md:flex items-center gap-5 md:mt-10 xl:mt-[-20px] hidden ">
        <BsMessenger size={23}/>
           <span>
           <h6>Messenger</h6>
           <p className="text-sm text-[#cdd0dd]">user.jabir</p>
           </span>
          
         
           <AiOutlineWhatsApp size={23}/>
                <span>
                <h6>Whatsapp</h6>
                <p className="text-sm text-[#cdd0dd]">user.jabir</p>
                </span>
                
                <AiOutlineMail size={23}/>
              <span>
              <h6>Email</h6>
              <p className="text-sm text-[#cdd0dd]">www.roman1249@gmail.com</p>
              </span>
                 
        </div>
      </div>
    </section>
  );
};

export default Home;
