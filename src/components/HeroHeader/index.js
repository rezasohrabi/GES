import React, { useEffect } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core';
import ManImage from './../../assets/man.jpg';
import WomanImage from './../../assets/woman.jpeg';
import MultiCarousel from '../MultiCarousel';
import { fetchProductsStart } from './../../redux/Products/products.actions'
import { useDispatch, useSelector } from 'react-redux';
import MainSlider from '../MultiCarousel/MainSlider';
import CategoryCard from '../CategoryCard';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4),
    },
    manImage: {
        backgroundImage: `URL(${ManImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    womanImage: {
        backgroundImage: `URL(${WomanImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    catWrapper: {
        marginTop: theme.spacing(4),
    },
}));

const mapState = ({productsData}) => ({
    products: productsData.products,
});

const HeroHeader = (props) => {
    const classes = useStyles();
    const { products } = useSelector(mapState)
    const dispatch = useDispatch();
    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({
                filterType: 'women', 
                startAfterDoc: queryDoc, 
                persistProducts: data, 
            })
        );
    }, []);

    return (
        <Grid container className={classes.root}>
            <Grid container item>
                <MainSlider />
            </Grid>
        </Grid>
    )
};

export default HeroHeader