import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <IconButton edge='start' className={classes.menuButton} color='inherit' size='medium' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Link component={RouterLink} to='/' color='inherit'  className={classes.logo}>
                    <Typography variant='h6'>
                            Geasy Shop
                    </Typography>
                </Link>
                <Button edge='end' component={RouterLink} to='/register' color='inherit'>
                    Register
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;