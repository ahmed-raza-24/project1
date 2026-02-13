import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setnewTheme] = useState('')

  return (
    <div className='navbar'>
        <form  onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)
            setnewTheme('')
        }}>
        <input
        value={newTheme}
        onChange={(e)=>{
            setnewTheme(e.target.value)
        }}
        type='text'
        placeholder='enter the theme'
        />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Navbar