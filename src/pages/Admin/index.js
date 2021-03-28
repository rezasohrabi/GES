import React, { useEffect } from 'react';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import ProductListItem from '../../components/ProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductStart, fetchProductsStart } from '../../redux/Products/products.actions';
import LoadMore from '../../components/LoadMore';
import AddProduct from '../../components/AddProduct';

const useStyles = makeStyles((theme) => ({
    productList: {
        width: '100%',
    },
}));

const mapState = ({productsData}) => ({
    products: productsData.products,
});

const Admin = props => {
    const {products} = useSelector(mapState);
    const dispatch = useDispatch();
    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart()
            );
    }, []);

    const handleDelete = productId => {
        dispatch(deleteProductStart(productId));
    };

    const classes = useStyles();

    const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        );
    }

    const configLoadMore = {
        onLoadMore: handleLoadMore,
    }

    if (!Array.isArray(data)) return null;

    return (
        <>
        <Box boxShadow={2} m={3} p={3} width='100%'>
            <AddProduct />
        </Box>
        <Box boxShadow={2} m={3} p={3} width='100%'>
            <Typography
            align='right'
            color='textSecondary' 
            variant='body1'>{data.length} items found
            </Typography>
            <List className={classes.productList}>
                {data.length > 0 && ( data.map( (product, index) => {
                    return <ProductListItem 
                            key={index}
                            product={product}
                            onDelete={handleDelete}
                            />
                        })
                )}
                {data.length === 0 && (
                    <Typography variant='h5' color='textSecondary'>Items not found.</Typography>
                )}
            </List>
            {!isLastPage && (
                <LoadMore {...configLoadMore} />
            )}
        </Box>
        </>
    );
};

export default Admin;


