import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Performance from './components/Performance'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Performance />
      <Gallery />
    </>
  )
}

export default App
