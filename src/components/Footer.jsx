import React from 'react'
import { Zap } from 'lucide-react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const socials = [
  { Icon: FaFacebook, label: 'Facebook', href: '#' },
  { Icon: FaTwitter, label: 'Twitter', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
]
const Footer = () => {
  return (
    <footer className='bg-black/95 flex flex-col p-10 items-center'>
      <div className='w-full md:w-300 mb-10 border-t border-gray-500'></div>  
      <div className='flex flex-col md:flex-row items-center md:justify-between md:items-center w-300 gap-5'>
        <div className='flex items-center gap-2'>
            <h1 className='flex items-center gap-2 text-[23px] text-white font-bold font-[Elms Sans] uppercase'>
            <Zap className='h-8 w-7 text-blue-100 bg-blue-500 rounded-lg'/>
            Volt
            </h1>
        </div>
        {/* Links */}
        <div className='flex gap-8 text-lg items-center font-medium'>
            <a href='#hero' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Overview</a>
            <a href='#about' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>About</a>
            <a href='#configurator' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Configurator</a>
        </div> 
         {/* Icons */}
         <div className='flex gap-4'>
          {socials.map((social, index) => (
            <a key={index} href={social.href} className='text-white hover:text-gray-400'>
              <social.Icon/>
            </a>
          ))}
         </div>
        </div>
        <div className='flex flex-col items-center mt-4'>
            <p className='text-gray-400 text-sm'>
                © 2026 VOLT Motors. All rights reserved.
            </p>
        </div> 
    </footer>
  )
}

export default Footer