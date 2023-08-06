import { RiSuitcaseLine } from "react-icons/ri";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import img from '../assets/about-img.jpg'
import { PiMedal } from "react-icons/pi";
import { TiTickOutline } from "react-icons/ti";
import { BiSolidCircle, BiCircle } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
function About() {



  return (
    <section className="pb-8">
      <div className="container mx-auto px-5 lg:pt-20 lg:ps-24 xl:ps-18">
        <p className=" text-[#ff3c4c] text-[15px] mb-1 font-medium text-center">My Intro</p>
        <h3 className="text-[1.2rem] mb-10 md:text-[1.4rem] md:font-medium lg:text-2xl lg:font-bold text-center">About Me</h3>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-14 w-full mx-auto pt-3 xl:gap-20">
          <img
            className="max-w-[70%] lg:w-[45%] mb-8 md:mb-12 rounded-xl"
            src={img}
            alt=""
          />

          <div className="text-center lg:text-left xl:w-[500px] xl:mt-5">
          <h4 className="font-medium text-[.87rem] min-[450px]:text-[1.15rem] mb-3 md:text-2xl lg:text-[1.2rem] xl:text-2xl">
            Hi, I'm Mariam Wallas, Based in Canada
          </h4>

          <p className="text-[#cdd0dd] text-[.8rem] min-[450px]:text-[.91rem] leading-relaxed md:leading-7 md:text-[1rem] lg:text-[.9rem] xl:text-[1.1rem]">
            Web developer, with extensive knowledge and years of experience, working in web
            technologie and UI / Ux design, delivering quality work.
          </p>

          <div className="lg:flex flex-row items-start gap-3 xl:gap-5 mt-10 hidden">
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <PiMedal size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Experience</p>
            <p className="text-[.8rem] text-[#cdd0dd]">2+ Years</p>
          </span>
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <TiTickOutline size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Completed</p>
            <p className="text-[.8rem] text-[#cdd0dd]">50+ Projects</p>
          </span>
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <FiHeadphones size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Support</p>
            <p className="text-[.8rem] text-[#cdd0dd]">Online 24/7</p>
          </span>
        </div>

        <Link to="/contact" className="lg:inline-block py-10 hidden">
          <button className="btn-style flex items-center gap-3 bg-[#ff3c4c] py-3 px-6 rounded relative z-10 transition duration-[.4s] ">
            <RiContactsLine size={20} />
            Contact Me
          </button>
        </Link>

          </div>
        </div>

        <div className="flex flex-col min-[450px]:flex-row min-[450px]:justify-center gap-3 mt-10 md:gap-6 lg:hidden">
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <PiMedal size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Experience</p>
            <p className="text-[.8rem] text-[#cdd0dd]">2+ Years</p>
          </span>
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <TiTickOutline size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Completed</p>
            <p className="text-[.8rem] text-[#cdd0dd]">50+ Projects</p>
          </span>
          <span className="bg-[#18181e] py-4 px-6 rounded flex flex-col items-center">
            <FiHeadphones size={20} className="text-[#ff3c4c] mb-2" />
            <p className="text-[.98rem]">Support</p>
            <p className="text-[.8rem] text-[#cdd0dd]">Online 24/7</p>
          </span>
        </div>

        <Link to="/contact" className="flex justify-center py-10 lg:hidden">
          <button className="btn-style flex items-center gap-3 bg-[#ff3c4c] py-3 px-6 rounded relative z-10 transition duration-[.4s] ">
            <RiContactsLine size={20} />
            Contact Me
          </button>
        </Link>

        <div className="mt-20 min-[450px]:mx-8 flex flex-col gap-8">
          <p className=" text-[#ff3c4c] text-[15px] text-center mb-[-20px] font-medium">My Journey</p>
          <h3 className="text-[1.2rem] mb-10 text-center font-medium xl:font-bold xl:text-2xl pb-8 md:pb-10">Qualification</h3>

         

          {/* ========= */}

          <div className="flex flex-col justify-around items-center gap-12 md:flex-row flex-wrap md:gap-14 xl:w-3/4 mx-auto relative">

          <span className="flex items-center gap-3 mb-4 xl:w-3/4 me-auto absolute left-0 sm:left-10 top-[-60px] md:left-3 lg:left-12 xl:left-10">
            <RiSuitcaseLine className="text-[20px] lg:text-[25px]"/>
            <p className="lg:text-[1.2rem]">Experience</p>
          </span>
          
            <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>
            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>

          <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>

          <div className="flex gap-7 relative">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>

          <div className="flex gap-7 relative">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>

          </div>

          

          <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>
          <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>
          <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>
          <div className="flex gap-7">
            <i className="line-st relative">
              <BiSolidCircle className="text-[#ff3c4c]" />
            </i>

            <span>
              <p className="text-[.9rem] min-[450px]:text-[1rem] xl:font-medium xl:text-[1.1rem]">Copalopa Inc. (Sometown, NJ)</p>
              <p className="text-[.85rem] min-[450px]:text-[.9rem] mb-3 text-[#cdd0dd] xl:text-[1rem]">
                Lead / Senior Ux Designer
              </p>
              <p className="text-[.75rem] min-[450px]:text-[.8rem] text-[#ff3c4c] xl:text-[.9rem]">
                2018 - present
              </p>
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
