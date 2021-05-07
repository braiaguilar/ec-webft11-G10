import React from 'react';
import { useHistory } from 'react-router';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyles } from './styles'

import defaultImg from './default.png'


export default function ImgMediaCard({ id, img, name, description, price }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
        <CardActionArea onClick={() => history.push(`/product/${id}`)}>
          <CardMedia
            component="img"
            alt="Food"
            height="140"
            image={!img ? defaultImg : img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {!name ? 'Some food' : name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {!description ? 'Food is great to eat, it makes you healthy! Sometimes...' : description}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <Typography variant='h5'>
          ${!price ? 150 : price}
        </Typography>
      </CardActions>
    </Card>
  );
}