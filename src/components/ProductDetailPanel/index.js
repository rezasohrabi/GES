import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, makeStyles, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import { addToCart } from '../../redux/Cart/cart.actions';
import Gallery from './Gallery';

const configSizeOptions = [
    {value: 'XS', label: 'X-Small'},
    {value: 'S', label: 'Small'},
    {value: 'M', label: 'Medium'},
    {value: 'L', label: 'Large'},
    {value: 'XL', label: 'X-Large'},
    {value: '2XL', label: 'XX-Large'},
];

const configColourOptions = [
    {value: 'white', label: 'White'},
    {value: 'black', label: 'Black'},
    {value: 'red', label: 'Red'},
    {value: 'green', label: 'Green'},
    {value: 'grey', label: 'Grey'},
    {value: 'blue', label: 'Blue'},
    {value: 'pink', label: 'Pink'},    
];

const productImages = [
    {name: 'Babygrows & Sleepsuits', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/330902.jpg?X56'},
    {name: 'Bodysuits & Vests', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/939963.jpg?X56'},
    {name: 'Coats & Jackets', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/960757.jpg?X56'},
    {name: 'Jeans', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/187325.jpg?X56'},
];

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
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');

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
                <Gallery images={productImages}/>
                <Grid>
                    <Typography
                    variant='h6'>{productName}</Typography>
                    <Typography
                    variant='h6'
                    color='primary'>${productPrice}</Typography>
                    <FormControl>
                        <InputLabel shrink id='productSizeLabel'>Size</InputLabel>
                        <Select
                        labelId='productSizeLabel'
                        value={productSize}
                        displayEmpty
                        onChange={e => setProductSize(e.target.value)}
                        >
                            <MenuItem value=''>Select Size</MenuItem>
                            {configSizeOptions.map((opt, index) => (
                                <MenuItem key={index} value={opt.value}>{opt.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel shrink id='productColourLabel'>Colour</InputLabel>
                        <Select
                        labelId='productColourLabel'
                        value={productColour}
                        displayEmpty
                        onChange={e => setProductColour(e.target.value)}
                        >
                            <MenuItem value=''>Select Colour</MenuItem>
                            {configColourOptions.map((opt, index) => (
                                <MenuItem key={index} value={opt.value}>{opt.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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