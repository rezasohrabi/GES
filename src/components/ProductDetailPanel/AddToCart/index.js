import React, { useState } from 'react';
import { 
    Button, 
    Typography, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    makeStyles, 
    Grid 
    } from '@material-ui/core';

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
        productSize,
        productColour,
    },
    handleAddToCart,
    ...otherProps
}) => {
    const classes = useStyles();
    const [prdtSize, setPrdtSize] = useState('');
    const [prdtColour, setPrdtColour] = useState('');

    if(!Array.isArray(productSize) || !Array.isArray(productColour || !productName)) return null;

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
                value={prdtSize}
                displayEmpty
                onChange={e => setPrdtSize(e.target.value)}
                >
                    <MenuItem value=''>Select Size</MenuItem>
                    {productSize.map((opt, index) => (
                        <MenuItem key={index} value={opt}>{opt}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel shrink id='productColourLabel'>Colour</InputLabel>
                <Select
                labelId='productColourLabel'
                value={prdtColour}
                displayEmpty
                onChange={e => setPrdtColour(e.target.value)}
                >
                    <MenuItem value=''>Select Colour</MenuItem>
                    {productColour.map((opt, index) => (
                        <MenuItem key={index} value={opt}>{opt}</MenuItem>
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
