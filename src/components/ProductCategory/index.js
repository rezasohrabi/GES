import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CategoryCard from '../CategoryCard';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(6),
        }
    },
    title: {
        width: '100%',
    },
}));

const mapState = ({categoryData}) => ({
    categories: categoryData.categories,
});

const ProductCategory = props => {
    const { filterType } = useParams();
    const { categories } = useSelector(mapState);
    const classes = useStyles();
    return (
        <Grid 
        container 
        item 
        spacing={4}
        className={classes.root}
        >
            <Typography 
            variant='h5' 
            color='inherit'
            className={classes.title}
            >
                The {filterType[0].toUpperCase() + filterType.slice(1)}
                {filterType === 'girls' || filterType === 'boys'? "'" : "'s"} Shop
            </Typography>
            {categories
            .filter(cate => cate.categoryMenu === filterType)
            .map(filteredCate => (
                <Grid 
                container 
                item
                xs={12}
                sm={6}
                md={3}
                xl={2}
                >
                    <CategoryCard 
                    title={filteredCate.categoryName}
                    src={filteredCate.categoryIamge}
                    filter={filterType}
                    />
                </Grid>
                ))
            }
        </Grid>
    );
};

export default ProductCategory;