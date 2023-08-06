import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-[#0b0a10]">
     <div className="pt-12">
     <p className="text-[#ff3c4c] text-[15px] text-center font-medium">Get in touch</p>
      <h3 className="text-2xl mb-10 text-center font-medium xl:font-bold xl:text-3xl">
        Contact Me
      </h3>
     </div>

      <div className="container mx-auto px-5 lg:pt-20 lg:ps-24 xl:ps-18 flex flex-col md:flex-row md:justify-center md:w-[90%] md:gap-10 lg:gap-6 xl:gap-0 xl:w-[70%]">
        {/* ===== Contact ===== */}

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#18181e] md:px-14 p-8 min-[425px]:py-6 rounded-md flex flex-col items-center max-w-[300px] mx-auto w-full md:w-full">
            <RiMailSendLine size={28} className="mb-2" />
            <p className="text-[.98rem] pb-1 md:font-medium">Email</p>

            <p className="text-[.8rem] text-[#cdd0dd] mb-5">www.roman1249@gmail.com</p>

            <span className="group flex items-center gap-2 cursor-pointer">
              <p className="text-[.8rem] text-[#f86874] ">Write me</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>

          <div className="bg-[#18181e] md:px-14 p-8 min-[425px]:py-6 rounded flex flex-col items-center mx-auto w-full max-w-[300px]">
            <BsWhatsapp size={28} className="mb-2" />
            <p className="text-[.98rem] pb-1 md:font-medium">Whatsapp</p>

            <p className="text-[.8rem] text-[#cdd0dd] mb-5">+88 01627159355</p>

            <span className="group flex items-center gap-2 cursor-pointer">
              <p className="text-[.8rem] text-[#f86874] ">Write me</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>

          <div className="bg-[#18181e] md:px-14 p-8 min-[425px]:py-6 rounded flex flex-col items-center mx-auto w-full max-w-[300px] mb-12">
            <BsMessenger size={28} className="mb-2" />
            <p className="text-[.98rem] pb-1 md:font-medium">Messenger</p>

            <p className="text-[.8rem] text-[#cdd0dd] mb-5">user.fbjabir</p>

            <span className="group flex items-center gap-2 cursor-pointer">
              <p className="text-[.8rem] text-[#f86874] ">Write me</p>
              <AiOutlineArrowRight
                size={13}
                className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-7 max-w-full w-full">
          <div className="text-[#cdd0dd]">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cdd0dd] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Username
              </label>
            </div>
          </div>
          <div className=" text-[#cdd0dd]">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cdd0dd] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
          </div>
          <div className="text-[#cdd0dd]">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
    placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l 
    before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cdd0dd] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="text-[#cdd0dd]">
            <div className="relative w-full min-w-[200px]">
              <textarea
                cols={10}
                rows={5}
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cdd0dd] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
