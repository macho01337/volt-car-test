import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  text-white fixed top-0 left-0 right-0 z-50'>
      <div className='relative left-60'>
       <h1 className='flex items-center gap-2 text-[22px] font-bold font-[Elms Sans] uppercase'>
            <Zap className='h-7 w-6 text-blue-600 bg-blue-400 rounded-lg'/>
            Volt
            </h1>
        </div>    
        <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-lg font-medium'>
            <a href='#' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px]'>Overview</a>
            <a href='#' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px]'>About</a>
            <a href='#' className='hover:text-gray-400 text-gray-100 font-[Elms Sans] text-[15px]'>Contact</a>
        </div>
        <button className='relative right-60 bg-white/15 p-1 text-white font-[Elms Sans] font-medium rounded-lg'>Reserve now</button>
    </div>
  )
}

export default Navbar
