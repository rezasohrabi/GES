import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { fetchProductsStart, setProducts, searchProducts } from '../../redux/Products/products.actions';
import { selectFilters, selectProducts } from '../../redux/Products/Products.selectors';
import ProductItem from './ProductItem';
import Paginator from '../Paginator';
import ProductsFiltersPanel from './ProductsFiltersPanel';
import ProductsSortsPanel from './ProductsSortsPanel';
import clsx from 'clsx';

const mapState = createStructuredSelector({
    data: selectProducts,
    filters: selectFilters,
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

    const { data, filters } = useSelector(mapState);
    const dispatch = useDispatch();
    const { filterType, category } = useParams();
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = data && data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
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

   const handleSearch = (keyword) => {
       console.log('keyword', keyword)
        dispatch(
            searchProducts(keyword)
        );
   }

    return (
        <Grid container item className={classes.productGrid}>
            <Grid container item xs={12}>
                <ProductsSortsPanel 
                title={category}
                onSearch={handleSearch}
                />
            </Grid>
            <Grid container item xs={12} sm={4} md={3}>
                <ProductsFiltersPanel filters={filters}/>
            </Grid>
            <Grid container item xs={12} sm={8} md={9}>
                {(!Array.isArray(data) || data.length < 1) && 
                <Card className={clsx(classes.title, classes.m2)}>
                    <Typography className={classes.m2} variant='body1' color='textSecondary'>Item not found.</Typography>
                </Card>
                }
                {currentProducts && currentProducts
                .map((product, index) => {
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
            <Paginator 
            card 
            count={!data? 0 : Math.ceil(data.length  / itemsPerPage)} 
            page={currentPage} 
            color='primary' 
            onChange={(e, num) => setCurrentPage(num)}
            />
        </Grid>
    );
};

export default ProductResults;