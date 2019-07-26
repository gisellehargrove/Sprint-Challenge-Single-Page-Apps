import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { useInput } from './useLocalStorage';


export default function CharacterList() {
  const [query, setQuery, handleQuery] = useInput('query', 'https://rickandmortyapi.com/api/character/')
  const [characters, setCharacters] = useState({});

  const onSearch = (e, name) => {
    let base = 'https://rickandmortyapi.com/api/character/'
    e.preventDefault();
    handleQuery(base + '?name=' + name.name);
  }

  useEffect(() => {
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(query).then(response => {
      setCharacters(response.data);
    });
  }, [query])

  if(!characters.results) return <h1>Loading...</h1>

  return (

    <section className='character-list grid-view'>
      <div className="search-container">
        <SearchForm onSearch={onSearch} />
      </div>

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
