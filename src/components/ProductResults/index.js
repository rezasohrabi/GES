import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography, Select, InputLabel, MenuItem, FormControl, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart, setProducts } from '../../redux/Products/products.actions';
import ProductItem from './ProductItem';
import Paginator from '../Paginator';
import ProductsFiltersPanel from './ProductsFiltersPanel';
import ProductsSortsPanel from './ProductsSortsPanel';
import clsx from 'clsx';

const mapState = ({productsData}) => ({
    products: productsData.products
});

const useStyles = makeStyles((theme) => ({
    title: {
        width: '100%',
    },
    productGrid: {
        margin: theme.spacing(4),
    },
    m2: {
        margin: theme.spacing(2),
    },
}));

const ProductResults = props => {

    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const { filterType, category } = useParams();
    const classes = useStyles();
    const { data } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({
                filterType,
                category,
            })
        );
        return () => {
            dispatch(
                setProducts({})
            );
        };
   }, [filterType, category]);

    return (
        <Grid container item className={classes.productGrid}>
            <Grid container item xs={12}>
                <ProductsSortsPanel 
                title={category}
                />
            </Grid>
            <Grid container item xs={12} sm={4} md={3}>
                <ProductsFiltersPanel />
            </Grid>
            <Grid container item xs={12} sm={8} md={9}>
                {(!Array.isArray(data) || data.length < 1) && 
                <Card className={clsx(classes.title, classes.m2)}>
                    <Typography className={classes.m2} variant='body1' color='textSecondary'>Item not found.</Typography>
                </Card>
                }
                {data && data.map((product, index) => {
                    const { 
                        productName,
                        productThumbnail,
                        productPrice,
                        productId
                    } = product;
                    if(!productId || !productName || !productThumbnail || 
                        typeof productPrice === 'undefined') return null;

                    const configProduct = {
                        ...product
                    }

                    return <ProductItem key={index} {...configProduct} />;
                })}
            </Grid>
            <Paginator card count={30} color='primary'/>
        </Grid>
    );
};

export default ProductResults;