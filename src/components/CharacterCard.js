import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    width: 400,
  },
  media: {
    height: 300,
  }
});

export default function CharacterCard ({ image, name, species, status, location, origin}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" color="secondary">
          {species} : {status}
        </Typography>
        <Typography gutterBottom variant="body1">
          Location: {location.name}
        </Typography>
        <Typography gutterBottom variant="body1">
          Origin: {origin.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>

        </IconButton>
      </CardActions>
    </Card>

  );
}
