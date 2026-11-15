import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
   }
     window.addEventListener('scroll', handleScroll);
     return () => removeEventListener('scroll', handleScroll);
  }) 

  return (
    <div className={`flex items-center justify-between p-4  text-white fixed top-0 left-0 right-0 z-50 ${scrolled || isMenuOpen ? 'bg-[#0A0A0F] backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className='relative left-60'>
       <h1 className='flex items-center gap-2 text-[23px] font-bold font-[Elms Sans] uppercase'>
            <Zap className='h-8 w-7 text-blue-100 bg-blue-500 rounded-lg'/>
            Volt
            </h1>
        </div>
        {/* Desktop Menu */}    
        <div className='hidden absolute left-1/2 transform -translate-x-1/2 md:flex gap-8 text-lg font-medium'>
            <a href='#hero' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Overview</a>
            <a href='#about' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>About</a>
            <a href='#gallery' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Gallery</a>
            <a href='#configurator' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Configurator</a>
        </div>
        <button className='hidden md:block relative right-60 bg-white/15 py-1 px-3 text-white font-[Elms Sans] rounded-lg backdrop-blur-md border border-white/15 font-semibold'>Reserve now</button>
        {/* Mobile Menu */}
        <button className='inline-block md:hidden absolute' onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        { isMenuOpen && (
          <div className='absolute top-full left-0 w-50 bg-[#0A0A0F] border-t border-white/10 md:hidden'>
           <div className='flex flex-col items-center gap-10 py-6 z-50'>
              <a href='#hero' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Overview</a>
              <a href='#about' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>About</a>
              <a href='#gallery' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Gallery</a>
              <a href='#configurator' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px] font-semibold'>Configurator</a>
            </div>
            </div>  
        )}    
    </div>
  )
}

export default Navbar
