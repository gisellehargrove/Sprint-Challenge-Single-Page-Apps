import React from 'react';
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
