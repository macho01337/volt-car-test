import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Performance from './components/Performance'
import Gallery from './components/Gallery'
import Configurator from './components/Configurator'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Performance />
      <Gallery />
      <Configurator />
      <Footer />
    </>
  )
}

export default App
