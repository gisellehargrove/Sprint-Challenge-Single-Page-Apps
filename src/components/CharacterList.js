import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {

  const [characters, setCharacters] = useState({});

  useEffect(() => {
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      console.log(response.data);
      setCharacters(response.data);
    });
  }, [])

  if(!characters.results) return <h1>Loading...</h1>

  return (<section className='character-list grid-view'>

      {characters.results.map((character) =>
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
          location={character.location}
          origin={character.origin} />)}

    </section>);

}
