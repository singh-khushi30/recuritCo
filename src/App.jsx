import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
    <Navbar />
    {/* Page content */}
    <main className="p-8">
      <Hero/>
    </main>
  </div>
  )
}

export default App