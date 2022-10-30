import React from 'react'
import Logo from '../img/logo.png'
import '../App.css'
import { useState } from 'react'

const Header = ({getQuery}) => {
  const [characterName, setCharacterName] = useState('')

  const onChange = (q) => {
    setCharacterName(q)
    getQuery(q)
  }

  return (
    <header>
        <img src={Logo} alt="" />
        <form>
            <input type="text" placeholder='Search a character' 
            value={characterName} 
            onChange={(e) => onChange(e.target.value) } />
        </form>
    </header>
  )
}

export default Header