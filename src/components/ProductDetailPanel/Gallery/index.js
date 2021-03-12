import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        marginRight: theme.spacing(4),
    },
    imageWrapper: {
        marginRight: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
        },
    },
    imageBtn: {
        width: '50px',
        height: '60px',
        border: '2px solid #eee',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        cursor: 'pointer',
    },
    activeImageBtn: {
        borderColor: theme.palette.primary.light,
        cursor: 'auto',
    },
    activeImage: {
        width: '20rem',
    },
}));
const Gallery = ({images, ...otherProps}) => {
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Grid container item direction='row' className={classes.root}>
            <Grid container direction='column' className={classes.imageWrapper}>
                {images.map((img, index) => (
                    <img key={index} 
                    src={img.image} 
                    className={clsx(classes.imageBtn, index === activeIndex && classes.activeImageBtn)} 
                    onClick={e => setActiveIndex(index)}
                    />
                ))}
            </Grid>
            <Grid>
                <img src={images[activeIndex].image} className={classes.activeImage} />
            </Grid>
        </Grid>
    )
};

export default Gallery;