import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 1,
    },

}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <IconButton edge='start' className={classes.menuButton} color='inherit' size='medium' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.logo}>
                    GESS
                </Typography>
                <Button edge='end' color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header