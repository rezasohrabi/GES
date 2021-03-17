import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Button, Card, makeStyles, Typography } from '@material-ui/core';
import slider1 from './../../../assets/slider1.jpg';
import slider2 from './../../../assets/slider2.jpg';
import slider3 from './../../../assets/slider3.jpg';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        width: '100%',
        padding: theme.spacing(1, 0),
    },
    image: {
        height: 'calc(100vh - 115px)',
        width: '100%',
    },
    sliderInfo: {
        position: 'absolute',
        top: '25px',
        left: '25px',
        width: '30%',
        color: theme.palette.common.white,
        '& > *': {
            marginBottom: theme.spacing(2),
        },
    },
    sliderWrapper: {
        position: 'relative',
        width: '100%',
    },
}));

const configSlider = [
    {src: slider1, title: 'A BEAUTIFUL BLEND OF FABRICS', desc: 'The airy feel of rayon meets the premium touch of linen in a lineup of on-trend designs.'},
    {src: slider2, title: '100% PREMIUM LINEN SHIRTS', desc: 'Complete your all-season wardrobe with a touch of smart-casual flair.'},
    {src: slider3, title: '100% PREMIUM LINEN SHIRTS', desc: 'Experience the luxury of premium linen, available in a wide range of easy-to-style colours.'},
]

const MainSlider = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <Carousel itemsToShow={1} showArrows={false} enableAutoPlay>
            {configSlider.map(slider =>  (
                <div className={classes.sliderWrapper}>
                    <img  src={slider.src} className={classes.image}/>
                    <div className={classes.sliderInfo}>
                        <Typography variant='h5' color='inherit'>{slider.title}</Typography>
                        <Typography variant='body1' color='inherit'>{slider.desc}</Typography>
                        <Button variant='outlined' color='primary'>shop now</Button>
                    </div>    
                </div>
            )
            )}
        </Carousel>
        </Card>
    )
}

export default MainSlider;
