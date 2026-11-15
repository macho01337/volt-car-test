import React from 'react'


const images = [
   {
    id: 1,
   src: 'https://images.pexels.com/photos/27968215/pexels-photo-27968215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   text: 'Studio Profile',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/27692895/pexels-photo-27692895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: 'Cockpit View',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/40056497/pexels-photo-40056497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: 'Interior Design',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/34243853/pexels-photo-34243853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    text: 'Details',
  }
]

const Gallery = () => {
  return (
    <section id='gallery' className='flex flex-col min-h-screen bg-[#08080c] p-25 gap-10 overflow-hidden'>
      <div className='flex flex-col md:items-start md:translate-x-60 gap-2'>
      <h1 className='font-[Elms Sans] text-xl md:text-xl text-blue-400 font-semibold uppercase animate-blue'>Gallery</h1>
      <h2 className='font-[Elms Sans] text-5xl md:text-3xl text-white font-semibold '>Explore the Volt Experience</h2>
      </div>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-4'>
        {images.map((image) => (
          <div key={image.id} className='flex flex-col items-center relative'>
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className='w-150 h-60 object-cover rounded-lg cursor:pointer shadow-lg border border-white/10'
            />
            <div className='absolute inset-0 bg-black/35 pointer-events-none'></div>
            <p className='absolute bottom-5 left-10 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md'>{image.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery