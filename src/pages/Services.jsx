import React, { useState } from "react";
import { MdWeb, MdOutlineClose } from "react-icons/md";
import { BsCode } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuVerified } from "react-icons/lu";
import Skills from "./skills";


const Services = () => {

const [firstModal, setFirstModal] = useState(false);
const [thirdModal, setThirdModal] = useState(false);
const [secondModal, setSecondModal] = useState(false);

  return (
    <section className="bg-[#0b0a10]">
      <div className="container mx-auto px-5 lg:pt-20 lg:ps-24 xl:ps-18">
        <p className=" text-[#ff3c4c] text-[15px] text-center font-medium">Services</p>
        <h3 className="text-[1.2rem] mb-10 text-center font-medium xl:font-bold xl:text-2xl pb-8 md:pb-10">
          What I Offer
        </h3>

        {/* ===== Services ===== */}

        <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 min-[425px]:justify-center gap-3 mt-10 md:gap-6 lg:px-20 lg:gap-5 xl:px-48 xl:gap-0">
          <div className="bg-[#18181e] p-8 min-[425px]:py-14 rounded flex flex-col items-center lg:items-start lg:w-56 lg:h-64 lg:justify-end">
            <MdWeb size={22} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem] pb-3 md:font-medium">Web Designer</p>

            <span className="group flex items-center gap-2 cursor-pointer" onClick={() => setFirstModal(true)}>
              <p className="text-[.8rem] text-[#f86874] ">View More</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>
          <div className="bg-[#18181e] p-8 rounded flex flex-col items-center min-[425px]:py-12 lg:items-start lg:w-56 lg:h-64 lg:justify-end">
            <BsCode size={22} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem] pb-3 md:font-medium">UI/UX Designer</p>

            <span className="group flex items-center gap-2 cursor-pointer" onClick={() => setSecondModal(true)}>
              <p className="text-[.8rem] text-[#f86874] ">View More</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>
          <div className="bg-[#18181e] p-8 rounded flex flex-col items-center min-[425px]:py-12 lg:items-start lg:w-56 lg:h-64 lg:justify-end">
            <BiTrendingUp size={22} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem] pb-3 md:font-medium">Branding Designer</p>
            <span className="group flex items-center gap-2 cursor-pointer" onClick={() => setThirdModal(true)}>
              <p className="text-[.8rem] text-[#f86874] ">View More</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>
        </div>

        {/* ===== Service Details ===== */}

        {
          firstModal && (
        
           <section className="fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-50 mx-3 md:mx-0">

            

             <div className="modal relative bg-[#18161f] p-8 w-full rounded-xl max-w-md">
              
              <button className="absolute right-3 top-3" onClick={() => setFirstModal(false)}>
                <MdOutlineClose size={20} className="text-[#ff3c4c]"/>
              </button>
  
            <h2 className="text-center mb-3">Web Designer</h2>
            <p className="text-[.87rem] text-[#cdd0dd] text-center mb-8">
              Services with more than 3 years of experience. Providing quality work to clients and
              compor
            </p>
  
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I develop the user interface.</p></li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> Web page development.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I create ux element interactions.</p>
                </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> I position your company brand.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className="text-[#ff3c4c]"/>
              <p className="text-[.84rem] text-[#cdd0dd]"> Design and mockups of products for companies.</p>
              </li>
            </ul>
          </div>
         
           </section>
           
          )
        }
        {
          secondModal && (
        
           <section className="fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-50">

            

             <div className="modal relative bg-[#18161f] p-8 w-full rounded-xl max-w-md">
              
              <button className="absolute right-3 top-3" onClick={() => setSecondModal(false)}>
                <MdOutlineClose size={20} className="text-[#ff3c4c]"/>
              </button>
  
            <h2 className="text-center mb-3">UI/UX Designer</h2>
            <p className="text-[.87rem] text-[#cdd0dd] text-center mb-8">
              Services with more than 3 years of experience. Providing quality work to clients and
              compor
            </p>
  
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I develop the user interface.</p></li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> Web page development.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I create ux element interactions.</p>
                </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> I position your company brand.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className="text-[#ff3c4c]"/>
              <p className="text-[.84rem] text-[#cdd0dd]"> Design and mockups of products for companies.</p>
              </li>
            </ul>
          </div>
         
           </section>
           
          )
        }
        {
          thirdModal && (
        
           <section className="fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-50">

            

             <div className="modal relative bg-[#18161f] p-8 w-full rounded-xl max-w-md">
              
              <button className="absolute right-3 top-3" onClick={() => setThirdModal(false)}>
                <MdOutlineClose size={20} className="text-[#ff3c4c]"/>
              </button>
  
            <h2 className="text-center mb-3">Branding Designer</h2>
            <p className="text-[.87rem] text-[#cdd0dd] text-center mb-8">
              Services with more than 3 years of experience. Providing quality work to clients and
              compor
            </p>
  
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I develop the user interface.</p></li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> Web page development.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
                <p className="text-[.84rem] text-[#cdd0dd]">I create ux element interactions.</p>
                </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className=" text-[#ff3c4c]"/>
               <p className="text-[.84rem] text-[#cdd0dd]"> I position your company brand.</p>
               </li>
              <li className="flex items-center gap-2">
              <LuVerified size={20} className="text-[#ff3c4c]"/>
              <p className="text-[.84rem] text-[#cdd0dd]"> Design and mockups of products for companies.</p>
              </li>
            </ul>
          </div>
         
           </section>
           
          )
        }

        <Skills />
      </div>
    </section>
  );
};

export default Services;