import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 300
  }
});

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="h4">
          {type} : {dimension}
        </Typography>
      </CardContent>
    </Card>
  )
}
