import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, TextField, Select, InputLabel, DialogActions, List, makeStyles, Typography } from '@material-ui/core';
import Dialog from './../../components/Dialog';
import ProductListItem from '../../components/ProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProductStart, deleteProductStart, fetchProductsStart } from '../../redux/Products/products.actions';
import LoadMore from '../../components/LoadMore';

const useStyles = makeStyles((theme) => ({
    productList: {
        width: '100%',
    },
}));

const mapState = ({productsData}) => ({
    products: productsData.products,
});

const Admin = props => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('mens');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0); 

    const [open, setOpen] = useState(false);
    const {products} = useSelector(mapState);
    const dispatch = useDispatch();
    const { data, queryDoc, isLastPage } = products;

    const toggleModal = () => {
        setOpen(!open);
    }

    useEffect(() => {
        dispatch(
            fetchProductsStart()
            );
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addNewProductStart({
                productName,
                productCategory,
                productThumbnail,
                productPrice
            })
        );
        resetForm();
    }

    const handleDelete = productId => {
        dispatch(deleteProductStart(productId));
    };

    const resetForm = () => {
        setOpen(false);
        setProductName('');
        setProductCategory('mens');
        setProductThumbnail('');
        setProductPrice(0);
    }

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

    return (
        <Box boxShadow={2} m={3} p={3} width='100%'>
            <Typography
            align='right'
            color='textSecondary' 
            variant='body1'>{data.length} items found
            </Typography>
            <Button
            variant='outlined'
            onClick={toggleModal}
            size='small'
            color='secondary'>
                add new product
            </Button>
            <Dialog
            title='add new product'
            handleClose={toggleModal}
            open={open}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                    name='productName'
                    type='text'
                    label='Name'
                    value={productName}
                    onChange={ e => setProductName(e.target.value)}
                    margin='normal'
                    fullWidth
                    autoFocus
                    required
                    />
                    <InputLabel id='productCategoryLabel' style={{marginTop: '1rem'}}>Category</InputLabel>
                    <Select
                    labelId='productCategoryLabel'
                    value={productCategory}
                    onChange={e => setProductCategory(e.target.value)}
                    fullWidth
                    >
                        <MenuItem value={'mens'}>Mens</MenuItem>
                        <MenuItem value={'womens'}>Womens</MenuItem>
                    </Select>
                    <TextField
                    name='productThumbnail'
                    type='text'
                    label='Image Url'
                    value={productThumbnail}
                    onChange={ e => setProductThumbnail(e.target.value)}
                    margin='normal'
                    fullWidth
                    />
                    <TextField
                    name='productPrice'
                    type='number'
                    label='Price'
                    value={productPrice}
                    onChange={ e => setProductPrice(e.target.value) }
                    margin='normal'
                    fullWidth
                    />
                    <DialogActions>
                        <Button 
                        variant='contained'
                        color='primary'
                        type='submit'
                        >Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
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
    );
};

export default Admin;


