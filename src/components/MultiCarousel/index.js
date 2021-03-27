import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductItem from './ProductItem';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    '& .rec-carousel-item': {
      display: 'flex',
    },
    '& .rec-arrow': {
      background: 'none',
      boxShadow: 'none',
      borderRadius: 0,
    },
  },
  grid: {
    marginTop: theme.spacing(5),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    width: '100%',
  },
}));

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

const MultiCarousel = ({products, filter, title, ...otherProps}) => {
  const classes = useStyles();
  if (!Array.isArray(products)) return null;
  return (
  <>
    <Grid container item justify='space-between' className={classes.grid}>
      <Typography variant='h6'>{title && title}</Typography>
      <Button component={RouterLink} to={`/products/${filter}/`}>See More</Button>
    </Grid>
    <Card className={classes.card}>
      <Carousel itemsToShow={4} breakPoints={breakPoints} className={classes.root} showEmptySlots={false} pagination={false}>
        {products.map((product, index) => <ProductItem key={index} {...product} /> )}
      </Carousel>
  </Card>
  </>
  )
}

export default MultiCarousel;
