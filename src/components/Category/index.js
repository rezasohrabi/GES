import React, { useEffect, useState } from 'react';
import { 
    Button,
    Card, 
    CardContent, 
    CardHeader, 
    FormControl, 
    Grid, 
    InputLabel, 
    makeStyles, 
    MenuItem, 
    Select, 
    TextField,
    Typography, 
    } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryStart, removeCategoryStart, fetchCategoriesStart } from './../../redux/Category/category.actions';
import CategoryList from './CategoryList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing(3),
    },
    grid: {
        '& > *': {
            marginBottom: theme.spacing(2)
        },
    },
    button: {
        alignSelf: 'flex-start',
    },
}));

const mapState = ({categoryData}) => ({
    categories: categoryData.categories,
});

const Category = props => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryIamge, setCategoryImage] = useState('');
    const [categoryMenu, setCategoryMenu] = useState('');
    const dispatch = useDispatch();
    const { categories } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchCategoriesStart()
        );
    }, []);

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addCategoryStart({
                categoryName,
                categoryIamge,
                categoryMenu,
            })
        );
        resetForm();
    };

    const handleRemove = (categoryId) => {
        dispatch(
            removeCategoryStart(categoryId)
        );
    };

    const resetForm = () => {
        setCategoryName('');
        setCategoryImage('');
    };

    return [
            <Card key={0} className={classes.root}>
                <CardHeader
                title='Create New Category'
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid 
                        container 
                        item 
                        direction='column' 
                        className={classes.grid}
                        >
                            <TextField
                            name='categoryName'
                            value={categoryName}
                            onChange={e => setCategoryName(e.target.value)}
                            label='Name'
                            required
                            />
                            <TextField
                            name='category'
                            value={categoryIamge}
                            type='Url'
                            onChange={e => setCategoryImage(e.target.value)}
                            label='Image Url'
                            required
                            />
                            <FormControl>
                                <InputLabel >Which Menu?</InputLabel>
                                <Select
                                value={categoryMenu}
                                onChange={e => setCategoryMenu(e.target.value)}
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
                            <Button
                            type='submit'
                            variant='outlined'
                            color='secondary'
                            className={classes.button}
                            >Create</Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>,
            <Card key={1} className={classes.root}>
                {categories.length > 0 ? 
                    <CategoryList 
                    categories={categories}
                    onRemove={handleRemove}
                    />
                : 
                    <Typography variant='h5' color='textSecondary'>No Category Was Found, Please Add First Category</Typography>
                }
                
            </Card>
    ]
}

export default Category;
