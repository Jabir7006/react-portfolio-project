import React, { useEffect, useState } from "react";
import worksData from "./../worksData";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Testomonials from "./Testomonials";

const Works = () => {
  const [activeOption, setActiveOption] = useState("All");
  const [worksModal, setWorksModal] = useState(false);
  const [data, setData] = useState(worksData);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    handleCat(option.toLowerCase());
  };

  const handleCat = (cat) => {
    if (cat === "all") {
      setData(worksData);
    } else {
      const newData = worksData.filter((work) => work.cat === cat);
      setData(newData);
    }
  };

  return (
    <section className="bg-[#0b0a10] pb-8 min-h-screen">
      <div className="container mx-auto px-5 lg:pt-20 lg:ps-24 xl:ps-18">
        <p className="text-[#ff3c4c] text-[15px] text-center font-medium">Services</p>
        <h3 className="text-[1.2rem] mb-10 text-center font-medium xl:font-bold xl:text-2xl">
          Resent Works
        </h3>

        <ul className="flex justify-center items-center">
          <li
            className={`cursor-pointer py-1 px-3 rounded-lg ${
              activeOption === "All" ? "bg-[#ff3c4c]" : ""
            }`}
            onClick={() => handleOptionClick("All")}
          >
            All
          </li>
          <li
            className={`cursor-pointer py-1 px-3 rounded-lg ${
              activeOption === "Web" ? "bg-[#ff3c4c]" : ""
            }`}
            onClick={() => handleOptionClick("Web")}
          >
            Web
          </li>
          <li
            className={`cursor-pointer py-1 px-3 rounded-lg ${
              activeOption === "App" ? "bg-[#ff3c4c]" : ""
            }`}
            onClick={() => handleOptionClick("App")}
          >
            App
          </li>
          <li
            className={`cursor-pointer py-1 px-3 rounded-lg ${
              activeOption === "Design" ? "bg-[#ff3c4c]" : ""
            }`}
            onClick={() => handleOptionClick("Design")}
          >
            Design
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-14 lg:grid-cols-3 lg:gap-5 xl:px-20 xl:gap-x-3 xl:gap-y-0">
          {data.map((work, index) => {
            const { title, img, desc, date, tech, role, demo, modalTitle  } = work;

            return (
              <section key={index}>
              <div
                className="mt-10 max-w-2xl w-[95%] mx-auto bg-[#18181e] p-4 rounded-md max-h-full"
              >
                <img src={img} className="w-full rounded-lg" alt="" />

                <h4 className="pt-4 pb-2">{title}</h4>

                <span
                  className="group flex items-center gap-2 cursor-pointer"
                  onClick={() => setWorksModal(index)}
                >
                  <p className="text-[.8rem] text-[#f86874]">Demo</p>
                  <AiOutlineArrowRight
                    size={13}
                    className="text-[#f86874] group-hover:translate-x-1 transition duration-200"
                  />
                </span>
              </div>

              {/* ==== */}

              {worksModal === index && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black mx-2 z-50">
            

                <div className="relative bg-[#18161f] px-6 py-8 w-[95%] rounded-xl max-w-sm max-h-full flex flex-col md:flex-row md:w-full md:max-w-2xl md:gap-10 lg:max-w-3xl items-center" key={index}>

                <button className="absolute right-3 top-3" onClick={() => setWorksModal(false)}>
              <MdOutlineClose size={20} className="text-[#ff3c4c]" />
            </button>
                  <img src={img} className="w-full rounded-lg mb-8 md:w-1/2 md:mt-5" alt="" />

                 <div>
                 <p className="text-[.75rem] text-[#cdd0dd] mb-1 md:mb-2">Featured - {title}</p>

<h6 className="text-[.84rem] mb-3 min-[425px]:text-[.96rem] min-[425px]:font-medium">{modalTitle}</h6>

<p className="text-[#cdd0dd] text-[.78rem] mb-7 min-[425px]:text-[.84rem] md:mb-6">{desc}</p>

<p className="text-[.76rem] text-[#cdd0dd] mb-1 min-[425px]:text-[.8rem]">Created - {date}</p>
<p className="text-[.76rem] text-[#cdd0dd] mb-1 min-[425px]:text-[.8rem]">Technolies - {tech}</p>
<p className="text-[.76rem] text-[#cdd0dd] mb-1 min-[425px]:text-[.8rem]">Role - {role}</p>
<p className="text-[.76rem] text-[#cdd0dd] min-[425px]:text-[.8rem]">View - <a href="" className="text-[#ff3c4c]">
{demo}
  </a></p>
                 </div>
                </div>
          
            
          </div>
        )}
              </section>
            );
          })}
        </div>


       <Testomonials />
      </div>
    </section>
  );
};

export default Works;
