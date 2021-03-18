import React from 'react';
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
            <img src={src} alt={title} className={classes.image}/>
            <Typography variant='h6' className={classes.title}>{title}</Typography>
            <Button variant='outlined' color='primary'>Shop Now</Button>
        </Card>
    )
}

export default CategoryCard;
