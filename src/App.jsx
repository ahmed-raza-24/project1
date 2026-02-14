import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import Contact from './components/Contact'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light"
  }, [darkMode])

  // 🎨 Theme State (Navbar se control hoga)
  const [theme, setTheme] = useState('light')

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  const navigate = useNavigate()

  const [count, setCount] = useState(0)

  return (
    <div>

      {/* NAVBAR */}
      <div className='Navbar'>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black'
        })}>Home</NavLink>

        <NavLink to="/about" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black'
        })}>About</NavLink>

        <NavLink to="/details" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black'
        })}>Details</NavLink>

        <NavLink to="/contact" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black'
        })}>Contact</NavLink>
      </div>

      {/* COUNTER */}
      <div className='counter'>
        <h2>count {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Click here
        </button>
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 🌙 DARK MODE TOGGLE */}
      <h3>DarkMode State: {darkMode ? "TRUE" : "FALSE"}</h3>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      {/* 🎨 THEME INFO */}
      <h4>Theme is {theme}</h4>

      {/* Navbar Component with prop */}
      <Navbar changeTheme={changeTheme} />

      {/* FOOTER */}
      <div className='footer'>
        <h2>Footer</h2>
        <button onClick={() => navigate('/')}>
          Back to HomePage
        </button>
      </div>

    </div>
  )
}

export default App
