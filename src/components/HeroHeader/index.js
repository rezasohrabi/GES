import React, { useEffect } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core';
import MultiCarousel from '../MultiCarousel';
import { fetchProductsStart } from './../../redux/Products/products.actions'
import { useDispatch, useSelector } from 'react-redux';
import MainSlider from '../MultiCarousel/MainSlider';
import CategoryCard from '../CategoryCard';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4),
    },
    catWrapper: {
        marginTop: theme.spacing(4),
    },
}));

const mapState = (state) => ({
    products: state.productsData.products,
    categories: state.categoryData.categories,
});

const HeroHeader = (props) => {
    const classes = useStyles();
    const { products, categories } = useSelector(mapState)
    const dispatch = useDispatch();
    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({
                startAfterDoc: queryDoc, 
                persistProducts: data, 
            })
        );
    }, []);

    const menData = data && data.filter(product => product.productMenu === 'men').slice(0, 9);
    const womenData = data && data.filter(product => product.productMenu === 'women').slice(0, 9);

    return (
        <Grid container className={classes.root}>
            <Grid container item>
                <MainSlider />
                <Grid container className={classes.catWrapper} spacing={3}>
                    {categories.filter(cate => cate.categoryMenu === 'home').map(filteredCate => (
                        <Grid container item xs={12} md={3}>
                            <CategoryCard 
                            src={filteredCate.categoryIamge} 
                            title={filteredCate.categoryName} 
                            filter={filteredCate.categoryMenu}
                            />
                        </Grid>
                    ))
                    }
                </Grid>
                <MultiCarousel 
                products={womenData} 
                filter='women' 
                title={'New Session Women\'s'}
                />
                <MultiCarousel 
                products={menData} 
                filter='men' 
                title={'New Session Men\'s'}
                />
            </Grid>
        </Grid>
    )
};

export default HeroHeader