import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EpisodesList() {

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/').then(response => {
      console.log(response.data)
    });
  }, [])
  return (
    <div>Episodes List</div>
  )

};
