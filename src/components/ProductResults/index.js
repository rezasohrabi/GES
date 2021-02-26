import React, { useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import ProductItem from './ProductItem'

const mapState = ({productsData}) => ({
    products: productsData.products
});

const useStyles = makeStyles((theme) => ({
    productGrid: {
        margin: theme.spacing(4),
    },
}));

const ProductResults = props => {

    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );
   }, []);

    if (!Array.isArray(products)) return null;

    if(products.length < 1) {
        return <Typography style={{marginTop: '2rem'}} variant='h5'>Item not found.</Typography>
    }

    return (
        <Grid container item className={classes.productGrid}>
            {products.map((porduct, index) => {
                const { 
                    productName,
                    productThumbnail,
                    productPrice,
                } = porduct;
                if(!productName || !productThumbnail || 
                    typeof productPrice === 'undefined') return null;

                const configProduct = {
                    productName,
                    productThumbnail,
                    productPrice
                }

                return <ProductItem key={index} {...configProduct} />;
            })}
        </Grid>
    );
};

export default ProductResults;