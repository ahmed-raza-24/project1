import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className='Navbar'>
        <Link to='/' element={<Home />} />
        <Link to='/about' element={<About />} />
        <Link to='/details' element={<Details />} />
        <Link to='/contact' element={<Contact />} />
      </div>
      
    </div>
  )
}

export default App