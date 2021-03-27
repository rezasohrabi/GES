import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const mapState = ({categoryData}) => ({
    categories: categoryData.categories,
});

const configColourItems = [
    {value: 'white', label: 'White'},
    {value: 'black', label: 'Black'},
    {value: 'red', label: 'Red'},
    {value: 'green', label: 'Green'},
    {value: 'grey', label: 'Grey'},
    {value: 'blue', label: 'Blue'},
    {value: 'pink', label: 'Pink'},    
];

const configSizeItems = [
    {value: 'XS', label: 'X-Small'},
    {value: 'S', label: 'Small'},
    {value: 'M', label: 'Medium'},
    {value: 'L', label: 'Large'},
    {value: 'XL', label: 'X-Large'},
    {value: '2XL', label: 'XX-Large'},
]

const configBrandItems = [
    {value: 'nike', label: 'Nike'},
    {value: 'adidas', label: 'Adidas'},
    {value: 'levis', label: 'Levis'},
    {value: 'gussi', label: 'Gucci'},
    {value: 'poloRalph', label: 'Polo Ralph Lauren'},
    {value: 'versace', label: 'Versace'},
    {value: 'calvin', label: 'Calvin Klein'},
    {value: 'american', label: 'American Eagle'},
    {value: 'aeropostale', label: 'Aeropostale'},
    {value: 'victoria', label: 'Abercrombie & Fitch'},
    {value: 'puma', label: 'Puma'},
    {value: 'vans', label: 'Vans'},
    {value: 'louis', label: 'Louis Vuitton'},
    {value: 'lacoste', label: 'Lacoste'},
    {value: 'tommy', label: 'Tommy Hilfiger'},
];

const AddProduct = props => {
    const [productName, setProductName] = useState('');
    const [productMenu, setProductMenu] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(''); 
    const [productQuantity, setProductQuantity] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productColour, setProductColour] = useState([]);
    const [productSize, setProductSize] = useState([]);
    const dispatch = useDispatch();
    const { categories } = useSelector(mapState);
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        const imageUrls = productThumbnail.split('+');
        dispatch(
            addNewProductStart({
                productName,
                productMenu,
                productCategory,
                productThumbnail: imageUrls,
                productPrice,
                productQuantity,
                productDesc,
                productBrand,
                productColour,
                productSize,
            })
        );
        resetForm();
    }

    const resetForm = () => {
        setProductName('');
        setProductMenu('');
        setProductCategory('');
        setProductThumbnail('');
        setProductPrice('');
        setProductQuantity('');
        setProductDesc('');
        setProductBrand('');
        setProductColour([]);
        setProductSize([]);
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
                    <MenuItem value='home'>Home</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Which Category?</InputLabel>
                <Select
                value={productCategory}
                onChange={e => setProductCategory(e.target.value)}
                required
                >
                    <MenuItem value=''>Select Category</MenuItem>
                    {categories
                    .filter(cate => cate.categoryMenu === productMenu)
                    .map((filteredCate, index) => <MenuItem
                        key={index} 
                        value={filteredCate.categoryName}
                        >{filteredCate.categoryName}
                        </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Which Brand?</InputLabel>
                <Select
                value={productBrand}
                onChange={e => setProductBrand(e.target.value)}
                >
                    <MenuItem value=''>Select Brand</MenuItem>
                    {configBrandItems
                    .map((brand,index) => <MenuItem
                        key={index} 
                        value={brand.label}
                        >{brand.label}
                        </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Available Colours</InputLabel>
                <Select
                value={productColour}
                onChange={e => setProductColour(e.target.value)}
                multiple
                required
                >
                    <MenuItem value=''>Select Available Colours</MenuItem>
                    {configColourItems
                    .map((colour, index) => <MenuItem 
                        key={index}
                        value={colour.label}
                        >{colour.label}
                        </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Available Sizes</InputLabel>
                <Select
                value={productSize}
                onChange={e => setProductSize(e.target.value)}
                multiple
                required
                >
                    <MenuItem value=''>Select Available Sizes</MenuItem>
                    {configSizeItems
                    .map((size, index) => <MenuItem
                        key={index} 
                        value={size.label}
                        >{size.label}
                        </MenuItem>
                        )
                    }
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
            placeholder='url1 + url2 + ... + urln '
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
            <TextField
            name='productQuantity'
            type='number'
            label='Quantity'
            value={productQuantity}
            onChange={ e => setProductQuantity(e.target.value) }
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
