import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: 400
  }
})


export default function LocationsList() {
  const classes = useStyles();
  const [locations, setLocations] = useState({});

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/').then(response => {
      console.log(response.data)
      setLocations(response.data);
    });
  }, []);

  if(!locations.results) return <div>Loading...</div>

  return (<section className='locations-list grid-view'>

    {locations.results.map((location) =>
      <LocationCard
        key={location.id}
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        residents={location.residents.length} />
    )}

    </section>);
}
