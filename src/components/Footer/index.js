import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles( (theme) => ({
    root: {
        height: '80px',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: '1.2rem',
        marginRight: theme.spacing(1),
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
            <Typography variant='subtitle1' className={classes.copyrightText}>
                <CopyrightIcon className={classes.icon} />
                <span>
                    {new Date().getFullYear()} All Rights Reserved .
                </span>
            </Typography>
        </footer>
    );
};

export default Footer;