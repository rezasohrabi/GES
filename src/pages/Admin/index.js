import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, TextField, Select, InputLabel, DialogActions } from '@material-ui/core';
import Dialog from './../../components/Dialog';
import { db } from './../../firebase/utils';

const Admin = props => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('mens');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0); 

    const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(!open);
    }

    useEffect(() => {
        db.collection('products').get()
        .then( snapshot => {
            const snapshotData = snapshot.docs.map( doc => doc.data());
            setProducts(snapshotData);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('products').doc().set({
            productName,
            productCategory,
            productThumbnail,
            productPrice
        }).then( e => {
            console.log(e)
        });
    }
    return (
        <Box boxShadow={2} m={3} p={3} width='100%'>
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
        </Box>
    );
};

export default Admin;


