import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import Contact from './components/Contact'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/details">Details</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
