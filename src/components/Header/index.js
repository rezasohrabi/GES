import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink} from 'react-router-dom';
import { auth } from '../../firebase/utils';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 1,
    },
}));

const Header = props => {
    const { currentUser } = props;
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
                {!currentUser ? (
                    <>
                        <Button edge='end' component={RouterLink} to='/register' color='inherit'>
                            Register
                        </Button>
                        <Button edge='end' component={RouterLink} to='/login' color='inherit'>
                            Sign in
                        </Button>
                    </>
                ) : (
                    <Button edge='end' onClick={ () => auth.signOut() } color='inherit'>
                        Logout
                    </Button>
                )}
                
            </Toolbar>
        </AppBar>
    )
};

export default Header;