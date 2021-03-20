import React, { useEffect } from 'react';
import { Grid, makeStyles, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addToCart } from '../../redux/Cart/cart.actions';
import Gallery from './Gallery';
import Comments from './Comments';
import AddToCart from './AddToCart'

const useStyles = makeStyles( (theme) => ({
    root: {
        margin: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(3, 12)
        },
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginRight: theme.spacing(2),
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(3),
    },
    grid: {
        width: 'auto',
    },
    card: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        },
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
        <Grid container item className={classes.root}>
            <Grid container item xs={12} md={6}>
                <Card className={classes.card}>
                    <Gallery images={productThumbnail} />
                </Card>
            </Grid>
            <Grid container item xs={12} md={6}>
                <Card className={classes.card}>
                    <Grid container item direction='column' className={classes.grid}>
                        <AddToCart 
                        product={product} 
                        handleAddToCart={handleAddToCart} 
                        />
                    </Grid>
                </Card>
            </Grid>
            <Grid container item xs={12}>
                <Card className={classes.card}>
                    <Comments />
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProductDetailPanel;
