import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem, TextField, Select, InputLabel, Button, FormControl, Typography, makeStyles } from '@material-ui/core';
import { addNewProductStart } from '../../redux/Products/products.actions';
import CKEditor from 'ckeditor4-react';

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const AddProduct = props => {
    const [productName, setProductName] = useState('');
    const [productMenu, setProductMenu] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(); 
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addNewProductStart({
                productName,
                productCategory,
                productThumbnail,
                productPrice,
                productDesc,
            })
        );
        resetForm();
    }

    const resetForm = () => {
        setProductName('');
        setProductCategory('men');
        setProductThumbnail('');
        setProductPrice(0);
        setProductDesc('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography
            variant='h5'
            color='inherit'
            >Add New Product</Typography>
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
            <FormControl className={classes.formControl}>
                <InputLabel >Which Menu?</InputLabel>
                <Select
                value={productMenu}
                onChange={e => setProductMenu(e.target.value)}
                required
                >
                    <MenuItem value=''>Select Menu</MenuItem>
                    <MenuItem value='men'>Men</MenuItem>
                    <MenuItem value='women'>Women</MenuItem>
                    <MenuItem value='boys'>Boys</MenuItem>
                    <MenuItem value='girls'>Girls</MenuItem>
                    <MenuItem value='baby'>Baby</MenuItem>
                </Select>
            </FormControl>
            <TextField
            name='productThumbnail'
            type='Url'
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
            <Typography 
            className={classes.formControl}
            component='div'
            variant='body1'
            color='textSecondary'
            >Description</Typography>
            <CKEditor
            onChange={e => setProductDesc(e.editor.getData())}
            />
            <Button 
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
            >Add</Button>
        </form>
    );
};

export default AddProduct;
