import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    width: 400
  }
});

export default function EpisodeCard({ name, airDate, episode, characters}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
          {name}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {episode} : {airDate}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Number of Characters: {characters.length}
        </Typography>
      </CardContent>
    </Card>

  );
};
