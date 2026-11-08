import car from '../data/car.png'
import { Road, Zap, Gauge } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center overflow-hidden p-2 min-h-screen bg-[#0A0A0F] relative'>
    <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-20%] right-[-10%] w-125 h-100 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className='flex flex-col items-center max-w-3xl  gap-8 mt-15'>
        <h1 className='font-[Elms Sans] text-6xl md:text-8xl  md:w-150 lg:w-150 xl:w-150 text-white font-bold'>Electric, <span className='animate-blue-text'>reimagined</span></h1>
        <p className='font-[Elms Sans] text-xl w-85 md:w-150 lg:w-150 xl:w-150 text-white font-semibold'>The Volt S1 — 620km range, 2.1s to 100, and a silhouette that belongs in a gallery.</p>
        <img src={car} alt='car' className='w-full rounded-lg h-120' />
      </div>

      {/* Stats  & Icons */}
      <div className='flex flex-wrap justify-center gap-20 text-white bottom-10 relative'>
        <div className='flex items-center gap-2'>
             <span className='bg-white/5 px-3 py-3 rounded-lg'><Road className='h-8 w-8 text-blue-500 ' /></span>
            <div className='flex flex-col items-start'>
            <p className='font-[Elms Sans] text-xl font-semibold'>620km</p>
            <span className='font-[Elms Sans] text-[15px] text-gray-400 '>Range</span>
            </div>
        </div>
        <div className='flex items-center gap-2'>
             <span className='bg-white/5 px-3 py-3 rounded-lg'><Zap className='h-8 w-8 text-blue-500 ' /></span>
            <div className='flex flex-col items-start'>
            <p className='font-[Elms Sans] text-xl font-semibold'>35min</p>    
             <span className='font-[Elms Sans] text-[15px] text-gray-400 '>Charge full</span>
            </div>
         </div>
        <div className='flex items-center gap-2'>
            <span className='bg-white/5 px-3 py-3 rounded-lg'><Gauge className='h-8 w-8 text-blue-500' /></span>
            <div className='flex flex-col items-start'>
             <p className='font-[Elms Sans] text-xl font-semibold'>2.1s</p>
             <span className='font-[Elms Sans] text-[15px] text-gray-400'>0-100 km/h</span>
            </div>
         </div>         
      </div>
    </div>
  )
}

export default Hero;