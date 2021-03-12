import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography, Select, InputLabel, MenuItem, FormControl, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
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
    const { filterType } = useParams();
    const history = useHistory();
    const classes = useStyles();
    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({filterType})
        );
   }, [filterType]);

   const handleFilter = e => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
   }

   const handleLoadMore = () => {
    dispatch(
        fetchProductsStart({
            filterType, 
            startAfterDoc: queryDoc, 
            persistProducts: data, 
        })
    );
   }

   const configLoadMore = {
       onLoadMore: handleLoadMore
   }

    if (!Array.isArray(data)) return null;

    return (
        <Grid container item className={classes.productGrid}>
            {/* <Grid container item xs={12} sm={12}>
                <Card >
                <FormControl>
                    <InputLabel shrink id='productCategoryLabel'>Category</InputLabel>
                    <Select
                    labelId='productCategoryLabel'
                    value={filterType === undefined? '' : filterType}
                    displayEmpty
                    onChange={handleFilter}
                    >
                        <MenuItem value=''>Show All</MenuItem>
                        <MenuItem value='mens'>Mens</MenuItem>
                        <MenuItem value='womens'>Womens</MenuItem>
                    </Select>
                </FormControl>
                <Typography
                align='right'
                className={classes.title}
                color='textSecondary' 
                variant='body1'>{data.length} items found
                </Typography>
                </Card>
            </Grid> */}
            <Grid container item xs={12}>
                <ProductsSortsPanel 
                title='this is title' 
                />
            </Grid>
            <Grid container item xs={12} sm={4} md={3}>
                <ProductsFiltersPanel />
            </Grid>
            <Grid container item xs={12} sm={8} md={9} alignItems='flex-start'>
                {data.length < 1 && 
                <Card className={clsx(classes.title, classes.m2)}>
                    <Typography className={classes.m2} variant='body1' color='textSecondary'>Item not found.</Typography>
                </Card>
                }
                {data.map((product, index) => {
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