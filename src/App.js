import React from 'react'
import './App.css'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import { useState , useEffect } from 'react'
import Spiner from './components/Spiner'



const App = () => {

  const [characters,setCharacters] = useState([])
  

  const getCharacters = async(name) =>{

    const resp =  await fetch(name ? `https://www.breakingbadapi.com/api/characters?name=${name}` : 'https://www.breakingbadapi.com/api/characters')

    const data = await resp.json()
    
    setCharacters(data)

    console.log(data);
  }

  useEffect(()=>{
    getCharacters()
  },[])

  return (
    <div className='app'>
      <Header getQuery={getCharacters}/>
      <div className='grid'>
        {characters.length >  0 ? 
        (characters.map((character,index)=>(
          <CharacterCard character={character} key={index} />
        )))
        : (<Spiner/>)}
      </div>
    </div>
    
  )
}

export default App