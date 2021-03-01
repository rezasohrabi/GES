import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminButton from './../AdminButton'
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        '& > *:not(:nth-child(2))': {
            marginLeft: theme.spacing(2)
        },
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    flexGrow: {
        flexGrow: 1,
    },
}));

const mapState = state => ({
    currentUser: state.user.currentUser,
    totalCartItemsNum: selectCartItemsCount(state)
});

const Header = props => {
    const { currentUser, totalCartItemsNum } = useSelector(mapState);
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <IconButton className={classes.menuButton} color='inherit' size='medium' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Link component={RouterLink} to='/' color='inherit'>
                    <Typography variant='h6'>
                            Geasy Shop
                    </Typography>
                </Link>
                <Button component={RouterLink} to='/' color='inherit'>
                    Home
                </Button>
                <Button component={RouterLink} to='/search' color='inherit' className={classes.searchButton}>
                    Search
                </Button>
                <span className={classes.flexGrow} />
                {!currentUser ? [
                        <Button component={RouterLink} to='/register' color='inherit'>
                            Register
                        </Button>,
                        <Button component={RouterLink} to='/login' color='inherit'>
                            Sign in
                        </Button>
                ] : [
                        <Badge badgeContent={totalCartItemsNum} color='secondary'>
                            <Button component={RouterLink} to='/cart' color='inherit'>
                                My Cart
                            </Button>
                        </Badge>,
                        <Button component={RouterLink} to='/dashboard' color='inherit'>
                            Dashboard
                        </Button>,
                        <AdminButton currentUser={currentUser} />
                ]}
                
            </Toolbar>
        </AppBar>
    )
};
Header.defaultProps = {
    currentUser: null,
}

export default Header;