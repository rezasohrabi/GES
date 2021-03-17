import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Typography, Grid, Divider, IconButton, Link } from '@material-ui/core';
import {Copyright, Instagram, Facebook, Twitter, YouTube } from '@material-ui/icons/';

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
    },
    icon: {
        fontSize: '1.2rem',
        marginRight: theme.spacing(1),
    },
    link: {
        padding: theme.spacing(1, 3),
    },
    copyrightText: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const Footer = props => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Grid container item xs={12} justify='center'>
                <Link component={RouterLink} to='/products/men' color='inherit' className={classes.link}>Men</Link>
                <Link component={RouterLink} to='/products/women' color='inherit' className={classes.link}>Women</Link>
                <Link component={RouterLink} to='/products/girls' color='inherit' className={classes.link}>Girls</Link>
                <Link component={RouterLink} to='/products/boys' color='inherit' className={classes.link}>Boys</Link>
                <Link component={RouterLink} to='/products/baby' color='inherit' className={classes.link}>Baby</Link>
            </Grid>
            <Grid container item xs={12} justify='center'>
                <IconButton color='inherit' size='medium'>
                    <Facebook />
                </IconButton>
                <IconButton color='inherit' size='medium'>
                    <Twitter />
                </IconButton>
                <IconButton color='inherit' size='medium'>
                    <Instagram />
                </IconButton>
                <IconButton color='inherit' size='medium'>
                    <YouTube />
                </IconButton>
            </Grid>
            <Grid container item xs={12} justify='center'>
                <Typography variant='subtitle1' className={classes.copyrightText}>
                    <Copyright className={classes.icon} />
                    <span>
                        {new Date().getFullYear()} All Rights Reserved .
                    </span>
                </Typography>
            </Grid>
        </footer>
    );
};

export default Footer;