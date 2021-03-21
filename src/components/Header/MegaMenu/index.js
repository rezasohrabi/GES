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
        padding: theme.spacing(2),
        boxShadow: theme.shadows[3],
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

const MegaMenu = ({menu, open, setMenuOpen, ...otherProps}) => {
    const { categories } = useSelector(mapState);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(
            fetchCategoriesStart()
        );
    }, []);

    if(!open || open !== menu) return null;
    return (
        <Grid container item direction='row' className={classes.root}>
            <Grid container item md={8} lg={9}>
                <MenuList className={classes.menuList}>
                    {categories
                    .filter(cate => cate.categoryMenu === menu)
                    .map(filteredCate=> (
                        <MenuItem key={filteredCate.categoryName}>
                        <Link 
                        to={`/products/${menu}/${filteredCate.categoryName}`}
                        onClick={() => setMenuOpen(null)}
                        >
                            <Typography 
                            variant='inherit' 
                            color='textPrimary'
                            >
                                {filteredCate.categoryName}
                            </Typography>
                        </Link>
                        </MenuItem>
                    ))}
                </MenuList>
            </Grid>
            <Grid container item md={4} lg={3} justify='center'>
                {categories
                .filter(cate => cate.categoryMenu === menu)
                .slice(0, 4).map(filteredCate => (
                    <Grid 
                    container 
                    item 
                    direction='column' 
                    md={6} 
                    key={filteredCate.categoryName}
                    className={classes.categoryItem}
                    >
                        <Link 
                        to={`/products/${menu}/${filteredCate.categoryName}`} 
                        onClick={() => setMenuOpen(null)}
                        >
                            <img 
                            src={filteredCate.categoryIamge} 
                            title={filteredCate.categoryName} 
                            className={classes.categoryImage}
                            />
                            <Typography 
                            variant='inherit' 
                            color='textPrimary'>
                                {filteredCate.categoryName}
                            </Typography> 
                        </Link>
                    </Grid>
                ))}
                <Button 
                variant='outlined' 
                component={Link} 
                to={`/products/${menu}`}
                onClick={() => setMenuOpen(null)} 
                color='primary'>
                    The {menu} Shop
                </Button>
            </Grid>
        </Grid>
    )
}

export default MegaMenu;