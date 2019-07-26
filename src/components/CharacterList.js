import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
  card: {
    width: 400,
  },
  media: {
    height: 300,
  },
});

export default function CharacterList() {
  const classes = useStyles();
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      console.log(response.data);
      setCharacters(response.data);
    });
  }, [])

  if(!characters.results) return <h1>Loading...</h1>

  return (<section className='character-list grid-view'>


      {characters.results.map((character) =>
        <Card key={character.id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={character.image}
              title={character.name} />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {character.name}
            </Typography>
            <Typography gutterBottom variant="h5" color="secondary">
              {character.species} : {character.status}
            </Typography>
            <Typography gutterBottom variant="body1">
              Location: {character.location.name}
            </Typography>
            <Typography gutterBottom variant="body1">
              Origin: {character.origin.name}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>

            </IconButton>
          </CardActions>
        </Card>
      )}

    </section>);

}
