import { Card, makeStyles, Typography, Divider, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SearchField from '../../FormPanel/SearchField';
import clsx from 'clsx';

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
        flex: '1 1 100%',
        margin: theme.spacing(1, 2),
        padding: theme.spacing(1, 2),
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        },
    },
    title: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(2),
        },
    },
    button: {
        padding: '3px 9px',
        fontSize: '0.8125rem',
    },
    borderTransparent: {
        border: '1px solid transparent',
    },
    sortBy: {
        marginRight: theme.spacing(1),
    },
}));

const sorts = [
    {index: 0, name: 'Most Relevent'},
    {index: 1, name: 'Most Popular'},
    {index: 2, name: 'Highest Price'},
    {index: 3, name: 'Lowest Price'},
];

const ProductsSortsPanel = ({title, onSearch}) => {
    const classes = useStyles();
    const [sortIndex, setSortIndex] = useState(0);
    const [keyword, setKeyword] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        onSearch(value);
    }

    const handleSort = (e, index) => {
        setSortIndex(index);
    }
    return (
        <Card className={classes.root}>
            <Grid 
            container 
            item
            xs={12} 
            justify='flex-start' 
            alignItems='center'
            >
                {title &&
                <Typography
                variant='h5'
                color='inherit'
                className={classes.title}
                noWrap
                >{title}
                </Typography>}
                <SearchField 
                placeholder='Search in results...'
                value={keyword}
                onChange={handleSearchChange}
                />
            </Grid>
            <Grid 
            container 
            item 
            xs={12}
            justify='flex-end' 
            alignItems='center'
            >
                <Typography
                variant='body1'
                color='inherit'
                noWrap
                className={classes.sortBy}
                >Sort By:</Typography>
                {sorts.map(sort => {
                    const { index, name} = sort;
                    return <Button
                    className={clsx(
                        classes.button, 
                        {[classes.borderTransparent]: index !== sortIndex})                    
                    }
                    size='small'
                    key={index}
                    variant={clsx(sortIndex === index ? 'outlined' : 'text')}
                    color={clsx(sortIndex === index? 'primary' : 'inherit')}
                    onClick={e => handleSort(e, index)}
                    >{name}</Button>
                })
                }
            </Grid>
        </Card>
    )
}

export default ProductsSortsPanel;