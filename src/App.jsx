import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FutureSection from './components/FutureSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar />
    {/* Page content */}
    <main className="p-8">
      <Hero/>
      <FutureSection/>
      <Footer/>
    </main>
  </div>
  )
}

export default App