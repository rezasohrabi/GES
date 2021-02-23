import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink} from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';

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
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSignOut = () => {
        dispatch(
            signOutUserStart()
        );
    }
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
                            My Dashboard
                        </Button>
                        <Button onClick={handleSignOut} color='inherit'>
                            Logout
                        </Button>
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