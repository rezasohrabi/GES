import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, makeStyles, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '100%',
    boxShadow: 'none',
  },
  link: {
    '*:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  image: {
    height: '350px',
    width: '100%',
  },
}));

export default function Item(product) {
  const classes = useStyles();
    const {
        productId,
        productThumbnail,
        productName,
        productPrice,
        productCategory,
        productMenu
      } = product;
    return (
        <Card className={classes.card}>
          <Link className={classes.link} component={RouterLink} to={`/products/${productMenu}/${productCategory}/${productId}`} color='inherit'>
            <img className={classes.image} src={productThumbnail[0]} alt={productName}/>
            <Typography variant='body2'  noWrap>{productName}</Typography>
            <Typography variant='h6' color='primary'>${productPrice}</Typography>
          </Link>
        </Card>
    );
};
