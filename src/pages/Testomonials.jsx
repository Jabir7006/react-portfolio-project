import React from 'react'
import {BiSolidQuoteAltLeft} from "react-icons/bi";
import { testiMonials } from '../worksData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




function Testomonials() {
  return (
   <section className='pt-20'>
     <p className="text-[#ff3c4c] text-[15px] text-center font-medium">My clients say</p>
        <h3 className="text-[1.2rem] mb-10 text-center font-medium xl:font-bold xl:text-2xl">
          Testimonials
        </h3>


        
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      modules={[Pagination]}
      loop = {true}
      breakpoints={{
          768 : {
              slidesPerView : 2,
              spaceBetween : 20,
              loop : false
          },

          
         

      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        <div>
          
          {testiMonials.map((testi, index) => {
            const {desc, date, img, name, role} = testi;  

            return (
                <SwiperSlide key={index} className='max-w-xl w-[95%] xl:mx-auto bg-[#18181e] p-5 rounded-md cursor-grab'>
                    <BiSolidQuoteAltLeft className='text-[#ff3c4c] text-[1.3rem] mb-3'/>

               
                
                 <p className='text-[#cdd0dd] text-[.8rem] mb-3'>{desc}</p>
                 <p className='text-[.9rem] mb-5'>{date}</p>
                
                 <div className='flex items-center gap-3'>
               
                    <span>
                    <img src={img} className="w-[50px] h-[50px] rounded-full" alt="" />
                    </span>
                 <span>
                 <p className='text-[.9rem] mb-1'>{name}</p>
                 <p className='text-[#cdd0dd] text-[.8rem]'>{role}</p>
                </span>
                </div>
                </SwiperSlide>
            )
          })}
          
        </div>

        </Swiper>
   </section>
  )
}

export default Testomonials