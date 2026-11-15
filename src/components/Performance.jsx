import { BatteryCharging, Cpu, ShieldCheck } from 'lucide-react';


const features = [
  {
    icon: BatteryCharging,
    title: 'Ultra-Fast Charging',
    description:
      '350kW DC charging adds 300km of range in just 15 minutes at compatible stations.'
  },
  {
    icon: Cpu,
    title: 'AI Co-Pilot',
    description:
      'On-board neural compute adapts regen, suspension, and routing to your driving style.'
  },
  {
    icon: ShieldCheck,
    title: '5-Star Safety',
    description:
      'Eight airbags, reinforced battery shell, and active lane-keeping across all trims.'
  }
];

const Performance = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-center overflow-hidden h-600 md:h-320 bg-[#0A0A0F]'>
        <div className='flex flex-col max-w-3xl items-center gap-10 m-10'>
                <h1 className='font-[Elms Sans] text-xl md:text-xl text-blue-400 font-semibold uppercase animate-blue'>Performance</h1>
                <h2 className='font-[Elms Sans] text-4xl  text-center md:text-5xl text-white font-semibold'>Numbers that move you</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-10 md:gap-10 items-center justify-center top-10 relative'>
            <div className='flex flex-col items-center justify-center gap-2 bg-white/1 border border-white/10 w-70 h-40 rounded-2xl'>
                <h3 className='font-[Elms Sans] text-4xl md:text-5xl text-white font-semibold'>
                    <span className='animate-blue-text'>620</span>
                    <span className='text-white text-[25px]'>km</span> 
                </h3>
                <p className='font-[Elms Sans] text-lg md:text-xl text-gray-400 font-medium'>WLTP Range</p>
            </div> 
            <div className='flex flex-col items-center justify-center gap-2 bg-white/1 border border-white/10 w-70 h-40 rounded-2xl'>
                <h3 className='font-[Elms Sans] text-4xl md:text-5xl text-white font-semibold'>
                <span className='animate-blue-text'>2.1</span>
                <span className='text-white text-[25px]'>s</span>
                </h3>
                <p className='font-[Elms Sans] text-lg md:text-xl text-gray-400 font-medium'>0–100 km/h</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 bg-white/1 border border-white/10 w-70 h-40 rounded-2xl'>
                <h3 className='font-[Elms Sans] text-4xl md:text-5xl text-white font-semibold'>
                <span className='animate-blue-text'>520</span>
                <span className='text-white text-[25px]'>hp</span>
                </h3>
                <p className='font-[Elms Sans] text-lg md:text-xl text-gray-400 font-medium'>Peak power</p>
            </div>
        </div>
        <div className='flex flex-col max-w-3xl items-center gap-10 mt-35'>
                <h1 className='font-[Elms Sans] text-xl md:text-xl text-blue-400 font-semibold uppercase animate-blue'>Engineering</h1>
                <h2 className='font-[Elms Sans] text-4xl md:text-5xl text-white font-semibold'>The future of driving</h2>
                <p className='font-[Elms Sans] w-90 md:w-120 text-[19px] text-white text-center font-medium'>Every system in the S1 was redesigned from the ground up — no carryover parts, no compromises.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-20">
            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                <div
                    key={feature.title}
                    className="flex items-center justify-center bg-black/20 border border-white/10 w-70 h-75 hover:bg-white/5 transition-colors duration-300 p-5 rounded-2xl"
                >
                    <div className="flex flex-col items-start gap-3 ">
                    <span className="bg-blue-400/5 border border-blue-900 px-4 py-2 rounded-xl">
                        <Icon className="text-blue-500" />
                    </span>

                    <h3 className="text-white md:text-xl font-[Elms Sans]">
                        {feature.title}
                    </h3>

                    <p className="sm:w-50 text-gray-300 text-[16px] font">
                        {feature.description}
                    </p>
                    </div>
                </div>
                );
            })}
            </div>   
    </div>
  )
}

export default Performance;
