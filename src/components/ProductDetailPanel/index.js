import React, { useEffect } from 'react';
import { Box, Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addToCart } from '../../redux/Cart/cart.actions';

const useStyles = makeStyles( (theme) => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginRight: theme.spacing(2),
    },
    titleWrapper: {
        display: 'flex',
    },
}));

const mapState = ({productsData}) => ({
    product: productsData.product
});

const ProductDetailPanel = (props) => {
    const { productId } = useParams();
    const { product } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        productName,
        productPrice,
        productThumbnail,
        productDesc,
    } = product;

    useEffect( () => {
        dispatch(
            fetchProductStart(productId)
        );
        return () => {
            dispatch(
                setProduct({})
            )
        }
    }, []);

    const classes = useStyles();

    if(!productId) return null;

    const handleAddToCart = () => {
        if(!product) return;
        dispatch(
            addToCart(product)
        )
        history.push('/cart');
    }

    return (
        <Box 
        display='flex' 
        m={4, 8} 
        maxWidth='100%' 
        overflow='hidden' 
        flexDirection='column'
        >
            <Grid  className={classes.titleWrapper}>
                <img 
                className={classes.avatar}
                src={productThumbnail}
                alt={productName} />
                <Grid>
                    <Typography
                    variant='h4'>{productName}</Typography>
                    <br />
                    <Typography
                    variant='h6'
                    color='primary'>${productPrice}</Typography>
                    <Button
                    variant='contained'
                    color='primary'
                    onClick={handleAddToCart}
                    >Add To Cart</Button>
                </Grid>
            </Grid>
            <br />
            <Divider/>
            <br />
            <div dangerouslySetInnerHTML={{ __html: productDesc}}/>
        </Box>
    )

}

export default ProductDetailPanel;