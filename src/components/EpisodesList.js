import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState({});

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/').then(response => {
      console.log(response.data)
      setEpisodes(response.data);
    });
  }, [])

  if(!episodes.results) return <div>Loading...</div>

  return (
    <section className='episodes-list grid-view'>
      {episodes.results.map((episode) =>
        <EpisodeCard
          key={episode.id}
          name={episode.name}
          airDate={episode.air_date}
          episode={episode.episode}
          characters={episode.characters} />
      )}
    </section>
  )

};
