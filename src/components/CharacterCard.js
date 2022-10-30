import React from 'react'
import '../App.css'



const CharacterCard = ({character}) => {

    const {img,name ,birthday, nickname , portrayed, category} = character

  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
            <img src={img ? img : 'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623'} alt="" />
        </div>
        <div className='card-back'>
            <h3>{name}</h3>
            <hr />
            <p>Nickname : {nickname}</p>
            <p>Actor : {portrayed}</p>
            <p>Birthday : {birthday}</p>
            <p>Serie : {category}</p>
        </div>
        </div>
    </div>
    
  )
}

export default CharacterCard