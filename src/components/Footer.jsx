import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';


const Footer = () => {

    const location = useLocation();

    if (location.pathname === '/') {
      return null;
    }

  return (
    <section className='bg-[#18181e] mt-6 py-8'>
        <div className="container mx-auto px-5 lg:ps-24 xl:ps-18 md:flex md:justify-between md:items-start md:pb-12">
            <div>
            <h3 className='text-2xl font-medium pb-1'>Mariam</h3>
            <p className='text-[#cdd0dd] text-[.8rem] pb-8'>Frontend developer</p>
            </div>

            <ul className='flex flex-col md:flex-row gap-4 pb-8'>
                <li>
                    <Link className='text-[#cdd0dd] text-[.9rem] hover:text-[#ff3c4c] duration-200'>Services</Link>
                </li>
                <li>
                    <Link className='text-[#cdd0dd] text-[.9rem] hover:text-[#ff3c4c] duration-200'>Work</Link>
                </li>
                <li>
                    <Link className='text-[#cdd0dd] text-[.9rem] hover:text-[#ff3c4c] duration-200'>Contact</Link>
                </li>
            </ul>

            <div className='flex gap-5 pb-12'>
                <a href='' className='hover:text-[#ff3c4c] duration-200'>
                <FaFacebookF />
                </a>
                <a href='' className='hover:text-[#ff3c4c] duration-200'>
                <FaInstagram />
                </a>
                <a href='' className='hover:text-[#ff3c4c] duration-200'>
                <FaTwitter />
                </a>
            </div>

          
        </div>

        <div>
                <p className='text-[#cdd0dd] text-[.8rem] text-center'>© 2022 Jabir.All right reserved</p>
            </div>
    </section>
  )
}

export default Footer