import { useState } from 'react'


const colors = [ 
  { id:1, color: "Black", hex: "#000000", price: 0 },
  { id:2, color: "White", hex: "#ffffff", price: 1000 },
  { id:3, color: "Red", hex: "#ef4444", price: 2000 },
  { id:4, color: "Blue", hex: "#3b82f6", price: 1500 },
];

const wheelSizes = [
  { id:1, size: "19\"", price: 0 },
  { id:2, size: "20\"", price: 1000 },
  { id:3, size: "21\"", price: 2000 },
  { id:4, size: "22\"", price: 3000 },
];


const Configurator = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWheelSize, setSelectedWheelSize] = useState(wheelSizes[0]);
  const basePrice = 60000;

  const totalPrice = basePrice +  selectedColor.price + selectedWheelSize.price;

  return (
    <div id='configurator' className='flex flex-col items-center gap-5 overflow-hidden h-300 md:h-220 bg-[#0A0A0F] md:pt-30'>
      <h1 className='font-[Elms Sans] text-xl md:text-xl text-blue-400 font-semibold uppercase'>Build yours</h1>
      <h2 className='font-[Elms Sans] text-4xl md:text-5xl text-white font-semibold m-12'>Configurator</h2>
      <div className='flex flex-col md:flex-row  gap-10'>
        <div className='flex flex-col justify-between bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-blue-500/5 w-[350px] md:w-[600px] h-[450px] p-10 rounded-2xl'>
        <h1 className='relative text-white text-xl font-[Elms Sans] font-semibold'>Paint</h1>
        <div className='grid grid-cols-2 md:flex-row gap-5 text-white'>
        {colors.map((item) => (
          <button key={item.id} className={`px-4 py-2 rounded-full inline-flex gap-2 border transition
            ${selectedColor.id === item.id
                ? 'bg-white/30 border-blue-600'
                : 'bg-black/30 border-transparent hover:bg-white/20'
            }`} 
            onClick={() => setSelectedColor(item)}>
            <span className='inline-block p-3 rounded-full' style={{ backgroundColor: item.hex }}/>
            <span className='text-lg'>{item.color}</span>
            </button>
        ))}
        </div>
        <h2 className='relative text-white text-xl font-[Elms Sans] font-semibold'>Wheels</h2>
        <div className='flex gap-5 text-white'>
        {wheelSizes.map((size) => (
            <button
            key={size.id}
            className={`w-20 h-10 rounded-full border transition ${
                selectedWheelSize.id === size.id
                ? "border-blue-500"
                : "bg-gray-700 border-transparent hover:bg-white/10"
            }`}
            onClick={() => setSelectedWheelSize(size)}
            >
            {size.size}
            </button>
        ))}
        </div>
        </div>
        <div className='flex flex-col justify-between bg-black/5 border border-white/20 w-[350px] md:w-[400px] h-[450px] p-6 rounded-2xl shadow-xl'>
        <div>
          <h1 className='text-white text-xl font-[Elms Sans] font-semibold mb-1'>Your Volt S1</h1>
          <h2 className='text-gray-400 text-lg'>Color: <span className='text-white font-medium'>{selectedColor.color}</span></h2>
        </div>
        <div className='w-full border-b border-white/10 my-2'></div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-gray-400'>
            <span>Base price</span>
            <span className='text-white font-medium'>$60,000</span>
          </div>
          <div className='flex justify-between text-gray-400'>
            <span>Wheels</span>
            <span className='text-white font-medium'>{selectedWheelSize.size}</span>
          </div>
          <div className='flex justify-between text-gray-400'>
            <span>Range</span>
            <span className='text-white font-medium'>620 km</span>
          </div>
        </div>

      
        <div className='flex flex-col gap-4 mt-2'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-300 text-sm font-semibold uppercase '>Estimated Total</span>
            <span className='text-2xl font-bold text-blue-400'>${totalPrice.toLocaleString()}</span>
          </div>
          <button className='w-full py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-xl text-white font-semibold shadow-lg shadow-blue-500/20 active:scale-[0.98]'>
            Order now
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Configurator
