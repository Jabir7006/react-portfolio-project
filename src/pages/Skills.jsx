import React, { useState } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { BiServer } from "react-icons/bi";
import { PiCaretDownBold, PiCaretRightBold } from "react-icons/pi";


const Skills = () => {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(true);
    const [third, setThird] = useState(false);


    const handleFirstToggle = () => {
        setFirst(!first);
        setSecond(false);
        setThird(false);
      };
    
      const handleSecondToggle = () => {
        setFirst(false);
        setSecond(!second);
        setThird(false);
      };
    
      const handleThirdToggle = () => {
        setFirst(false);
        setSecond(false);
        setThird(!third);
      };
    

  return (
    <section className="pt-20 pb-10">
      <p className="text-[#ff3c4c] text-[15px] text-center font-medium">My Abilities</p>
      <h3 className="text-[1.2rem] mb-10 text-center font-medium xl:font-bold xl:text-2xl">
        My Experience
      </h3>

      <div className="flex flex-col gap-8 md:flex-row md:gap-20 md:justify-center md:mx-12 xl:w-[75%] xl:mx-auto">
        <div className="flex flex-col gap-8 w-full">
        <div className="skills max-w-full cursor-pointer" onClick={handleFirstToggle}>
          <PiBracketsCurlyBold size={25} className="text-[#ff3c4c]" />
          <span className="me-auto">
            <p className="text-[.9rem]">Frontend devoloper</p>
            <p className="text-[.78rem] text-[#cdd0dd]">More then 5 years</p>
          </span>

          <span>
            {first ? <PiCaretDownBold size={25} className="text-[#ff3c4c]" onClick={handleFirstToggle}/> : <PiCaretRightBold size={25} className="text-[#ff3c4c]" onClick={handleFirstToggle}/>}
          </span>
        </div>

        <div className="skills max-w-full cursor-pointer" onClick={handleSecondToggle}>
          <CgWebsite size={25} className="text-[#ff3c4c]" />
          <span className="me-auto">
            <p className="text-[.9rem]">UI/UX designer</p>
            <p className="text-[.78rem] text-[#cdd0dd]">More then 5 years</p>
          </span>

          <span>
          {second ? <PiCaretDownBold size={25} className="text-[#ff3c4c]" onClick={handleSecondToggle}/> : <PiCaretRightBold size={25} className="text-[#ff3c4c]" onClick={handleSecondToggle}/>}
          </span>
        </div>

        <div className="skills max-w-full cursor-pointer" onClick={handleThirdToggle}>
          <BiServer size={25} className="text-[#ff3c4c]" />
          <span className="me-auto">
            <p className="text-[.9rem]">Backend devoloper</p>
            <p className="text-[.78rem] text-[#cdd0dd]">More then 5 years</p>
          </span>

          <span className="cursor-pointerr">
          {third ? <PiCaretDownBold size={25} className="text-[#ff3c4c]" onClick={handleThirdToggle}/> : <PiCaretRightBold size={25} className="text-[#ff3c4c]" onClick={handleThirdToggle}/>}
          </span>
        </div>
        </div>
 

        {/* ===== skills ===== */}

      <div className="w-full">
  
       {first && (
            <div>
            <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Html{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                90%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-8">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "90%" }} />
            </div>
          </div>
  
          <div className="overflow-hidden">
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Css{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                80%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-8">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "80%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              JavaScript{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                70%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-8">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "70%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Tailwind{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                88%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-8">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "45%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              React JS{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                75%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "75%" }} />
            </div>
          </div>
            </div>
        )}
    

     
        {second && (
            <div className="flex flex-col gap-8">
            <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Figma{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                69%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "69%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Sketch{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                76%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "76%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Photoshop{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                55%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "55%" }} />
            </div>
          </div>

            </div>
        )}
     

        {third && (
            <div className="flex flex-col gap-8">
            <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Node JS{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                86%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "86%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              MongoDB{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                70%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "70%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Express JS{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                77%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "77%" }} />
            </div>
          </div>
  
          <div>
            <div className="mb-1 font-medium relative text-[.9rem] text-[#cdd0dd]">
              Firebase{" "}
              <span className="absolute top-0 right-0 text-[.9rem] text-[#b2b3bb] font-light">
                50%
              </span>
            </div>
  
            <div className="w-full bg-[#18181e] rounded-full h-1.5 mb-1">
              <div className="bg-[#ff3c4c] h-1.5 rounded-full" style={{ width: "50%" }} />
            </div>
          </div>

            </div>
        )}

      </div>
     
      </div>
    </section>
  );
};

export default Skills;
