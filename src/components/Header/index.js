import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminButton from './../AdminButton'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 1,
    },
}));

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const Header = props => {
    const { currentUser } = useSelector(mapState);
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <IconButton className={classes.menuButton} color='inherit' size='medium' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Link component={RouterLink} to='/' color='inherit'  className={classes.logo}>
                    <Typography variant='h6'>
                            Geasy Shop
                    </Typography>
                </Link>
                {!currentUser ? (
                    <>
                        <Button component={RouterLink} to='/register' color='inherit'>
                            Register
                        </Button>
                        <Button component={RouterLink} to='/login' color='inherit'>
                            Sign in
                        </Button>
                    </>
                ) : (
                    <>
                        <Button component={RouterLink} to='/dashboard' color='inherit'>
                            Dashboard
                        </Button>
                        <AdminButton currentUser={currentUser} />
                    </>
                )}
                
            </Toolbar>
        </AppBar>
    )
};
Header.defaultProps = {
    currentUser: null,
}

export default Header;