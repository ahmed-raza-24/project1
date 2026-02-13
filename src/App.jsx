import React, { useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import Contact from './components/Contact'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const navigate = useNavigate();

  const [count, setcount] = useState(0)

  const [theme, setTheme] = useState('light')

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }

const counter = function(){

  setcount(count+1)
}
  return (
    <div>
      <div className='Navbar'>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'Black'
        })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'Black'
        })}>About</NavLink>
        <NavLink to="/details" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'Black'
        })}>Details</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'Black'
        })}>Contact</NavLink>
      </div>

      <div className='counter'>
        <h2>
          count {count}
        </h2>
        <button onClick={()=>{
            counter()
        }}>Click here</button>
      </div>

      <div className='footer'>
          <h2>Footer</h2>
          <button onClick={()=>{
            navigate('/')
          }}>Back to HomePage</button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <h4>Theme is {theme}</h4>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App
