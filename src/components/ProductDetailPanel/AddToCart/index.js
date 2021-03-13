import React, { useState } from 'react';
import { Button, Typography, FormControl, InputLabel, Select, MenuItem, makeStyles, Grid } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginBottom: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {

            },
        },
    },
    addButton: {
        alignSelf: 'flex-start',
        [theme.breakpoints.down('lg')]: {
            width: '50%',
        },
    },
}));

const AddToCart = ({
    product: {
        productName,
        productPrice,
        productDesc,
    },
    handleAddToCart,
    ...otherProps
}) => {
    const classes = useStyles();
    const [productSize, setProductSize] = useState('');
    const [productColour, setProductColour] = useState('');

    return (
        <Grid container item direction='column' className={classes.root}>
            <Typography
            variant='h5'>{productName}</Typography>
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
            className={classes.addButton}
            onClick={handleAddToCart}
            >Add To Cart</Button>
            <div dangerouslySetInnerHTML={{ __html: productDesc}}/>
        </Grid>
    );
};

export default AddToCart;
