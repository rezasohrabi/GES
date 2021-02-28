import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        flexGrow: 1,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    media: {
        height: '0',
        paddingTop: '56.25%',
        backgroundSize: 'contain',
    },
}));

const ProductItem = ({
    productName,
    productThumbnail,
    productPrice,
    productId
}) => {

    const classes = useStyles();

    if(!productId || !productName || !productThumbnail || 
        typeof productPrice === 'undefined') return null;

    return (
        <Grid 
        container 
        item 
        xs={12} 
        sm={6} 
        md={4}
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
                        component='p'>{productName}</Typography>
                    </Link>
                    <Typography
                    variant='subtitle1'
                    color='primary'
                    >{productPrice} $</Typography>
                    <Button
                    variant='outlined'
                    color='primary'
                    size='small'>add to cart</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductItem;