import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../redux/Cart/cart.actions'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    card: {
        flexGrow: 1,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    media: {
        height: '0',
        paddingTop: '100%',
        backgroundSize: 'contain',
    },
    mb1: {
        marginBottom: theme.spacing(1),
    },
}));

const ProductItem = product => {

    const {
        productId,
        productThumbnail,
        productName,
        productPrice
      } = product;

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    if(!productId || !productName || !productThumbnail || 
        typeof productPrice === 'undefined') return null;

    const handleAddToCart = () => {
        if (!product) return;
        dispatch(
            addToCart(product)
        )
        history.push('/cart')
    }

    return (
        <Grid 
        container 
        item 
        xs={12} 
        md={6}
        lg={4}
        xl={3}

        className={classes.root}>
            <Card className={classes.card}>
                <Link to={`/product/${productId}`}>
                    <CardMedia 
                    className={classes.media}
                    image={productThumbnail}
                    title={productName} />
                </Link>
                <CardContent>
                    <Link to={`/product/${productId}`}>
                        <Typography 
                        variant='body1' 
                        color='textPrimary' 
                        className={classes.mb1}
                        component='p'>{productName}</Typography>
                    </Link>
                    <Typography
                    variant='subtitle1'
                    color='primary'
                    className={classes.mb1}
                    >${productPrice}</Typography>
                    <Button
                    variant='outlined'
                    color='primary'
                    onClick={handleAddToCart}
                    size='small'>add to cart</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductItem;