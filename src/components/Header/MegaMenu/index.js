import React, { useEffect } from 'react';
import { Button, Grid, makeStyles, MenuItem, MenuList, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStart } from '../../../redux/Category/category.actions';

const mapState = ({categoryData}) => ({
    categories: categoryData.categories,
});

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: 'none',
        padding: theme.spacing(2),
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
            display: 'flex',
        }
    },
    menuList: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '60vh'
    },
    categoryItem: {
        padding: theme.spacing(2),
    },
    categoryImage: {
        width: '100%',
        height: '11rem',
    },
}));

const MegaMenu = ({category, ...otherProps}) => {
    const { categories } = useSelector(mapState);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(
            fetchCategoriesStart()
        );
    }, []);

    console.log(categories);
    return (
        <Grid container item direction='row' className={classes.root}>
            <Grid container item md={8} lg={9}>
                <MenuList className={classes.menuList}>
                    {categories
                    .filter(cate => cate.categoryMenu === category)
                    .map(filteredCate=> (
                        <MenuItem>
                        <Typography variant='inherit'>{filteredCate.categoryName}</Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Grid>
            <Grid container item md={4} lg={3} justify='center'>
                {categories
                .filter(cate => cate.categoryMenu === category)
                .slice(0, 4).map(filteredCate => (
                    <Grid 
                    container 
                    item 
                    direction='column' 
                    md={6} 
                    className={classes.categoryItem}
                    >
                        <Link color='inherit'>
                        <img src={filteredCate.categoryIamge} title={filteredCate.categoryName} className={classes.categoryImage}/>
                        <Typography variant='inherit'>{filteredCate.categoryName}</Typography> 
                        </Link>
                    </Grid>
                ))}
                <Button variant='outlined' color='primary'>The {category} Shop</Button>
            </Grid>
        </Grid>
    )
}

export default MegaMenu;