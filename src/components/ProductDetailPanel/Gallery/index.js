import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    imageWrapper: {
        flexDirection: 'row',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            width: 'auto',
        },
    },
    imageBtn: {
        width: '70px',
        height: '85px',
        border: '1px solid #eee',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        cursor: 'pointer',
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(3),
        },
    },
    activeImageBtn: {
        borderColor: theme.palette.primary.light,
        cursor: 'auto',
    },
    activeImage: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '22rem',
        },
    },
}));
const Gallery = ({images, ...otherProps}) => {
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Grid container item direction='row' className={classes.root}>
            <Grid container className={classes.imageWrapper}>
                {images.map((img, index) => (
                    <img key={index} 
                    src={img.image} 
                    className={clsx(classes.imageBtn, index === activeIndex && classes.activeImageBtn)} 
                    onClick={e => setActiveIndex(index)}
                    />
                ))}
            </Grid>
            <img src={images[activeIndex].image} className={classes.activeImage} />
        </Grid>
    )
};

export default Gallery;
