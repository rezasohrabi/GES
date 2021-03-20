import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Card, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: '100%',
    },
    image: {
        width: '100%',
        height: '25rem',
    },
    title: {
        marginBottom: theme.spacing(1),
    },
}));

const CategoryCard = ({src, title, ...props}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <RouterLink 
            to={`/products/${props.filter}/${title}`}>
                <img 
                src={src} 
                alt={title} 
                className={classes.image}
                />
            </RouterLink>
            <Typography 
            variant='h6' 
            className={classes.title}>
                {title}
            </Typography>
            <Button 
            component={RouterLink} 
            to={`/products/${props.filter}/${title}`}
            variant='outlined' 
            color='primary'>
                Shop Now
            </Button>
        </Card>
    )
}

export default CategoryCard;
