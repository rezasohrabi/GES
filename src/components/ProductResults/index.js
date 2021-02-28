import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductsStart } from '../../redux/Products/products.actions';
import ProductItem from './ProductItem'
import LoadMore from '../LoadMore';

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

    if(data.length < 1) {
        return <Typography style={{margin: '2rem'}} variant='h5'>Item not found.</Typography>
    }

    return (
        <Grid container item className={classes.productGrid}>
            <Grid container item>
                <Typography 
                className={classes.title} 
                variant='h4'>Browse products
                </Typography>
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
            </Grid>
            {data.map((porduct, index) => {
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
            { !isLastPage && (
                <LoadMore {...configLoadMore} />
            )}
        </Grid>
    );
};

export default ProductResults;