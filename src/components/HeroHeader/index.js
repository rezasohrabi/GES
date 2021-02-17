import { Grid, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import ManImage from './../../assets/man.jpg'
import WomanImage from './../../assets/woman.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '450px',
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
}));

const HeroHeader = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={12} md={6} justify='center' alignItems='center' className={classes.manImage}>
                <Button variant='contained' color='secondary'>Shop Mens</Button>
            </Grid>
            <Grid container item xs={12} md={6} justify='center' alignItems='center' className={classes.womanImage}>
                <Button variant='contained' color='secondary'>Shop Women</Button>
            </Grid>
        </Grid>
    )
}
export default HeroHeader