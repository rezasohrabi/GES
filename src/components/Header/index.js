import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Link, Toolbar, Typography, Badge, Grid, List, ListItem, ListItemText, Divider, Collapse } from '@material-ui/core';
import { Menu, ShoppingCartOutlined, AccountCircleOutlined } from '@material-ui/icons';
import clsx from 'clsx';
import { Link as RouterLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminButton from './../AdminButton'
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import SearchField from './../../components/FormPanel/SearchField';
import { signOutUserStart } from '../../redux/User/user.actions';
import { openMobileMenu } from './../../redux/App/app.actions'
import MegaMenu from './MegaMenu';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: theme.spacing(2),
    },
    searchBar: {
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    },
    searchField: {
        color: theme.palette.common.white,
        width: '100%',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
       flexDirection: 'column', 
       width: '100%',
    },
    menuWrapper: {
        position: 'relative',
    },
    menuButton: {
        '&:hover + *': {
            display: 'flex',
        },
    },
    mx: {
        margin: theme.spacing(0, 2),
    },
}));

const mapState = state => ({
    currentUser: state.user.currentUser,
    totalCartItemsNum: selectCartItemsCount(state),
    isOpenMobileMenu: state.appData.isOpenMobileMenu,
});

const Header = props => {
    const { currentUser, totalCartItemsNum, isOpenMobileMenu } = useSelector(mapState);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(
            signOutUserStart()
        )
    }

    const toggleMenu = () => {
        dispatch(
            openMobileMenu()
        )
    }

    const sectionMobile = (
    <Collapse in={isOpenMobileMenu} className={classes.list}>
        <List 
            component='nav' 
            aria-label='mobile menu'
            className={clsx(classes.sectionMobile, classes.list)}>
            <ListItem>
                <SearchField
                placeholder='Search Product' 
                fullWidth
                className={classes.searchField}/>
            </ListItem>
            <ListItem button component={RouterLink} to='/products/men'>
                <ListItemText primary='Men'/>
            </ListItem>
            <ListItem button component={RouterLink} to='/products/women'>
                <ListItemText primary='Women'/>
            </ListItem>
            <ListItem button component={RouterLink} to='/products/boys'>
                <ListItemText primary='Boys'/>
            </ListItem>
            <ListItem button component={RouterLink} to='/products/girls'>
                <ListItemText primary='Girls'/>
            </ListItem>
            <ListItem button component={RouterLink} to='/products/baby'>
                <ListItemText primary='Baby'/>
            </ListItem>
            <Divider/>
            {!currentUser? [
                <ListItem button key={0} button component={RouterLink} to='/register'>
                    <ListItemText primary='Register' />
                </ListItem>,
                <ListItem button key={1} button component={RouterLink} to='/login'>
                    <ListItemText primary='Sign In' />
                </ListItem>
            ] : [
                <ListItem button key={0} button component={RouterLink} to='/dashboard'>
                    <ListItemText primary='Dashboard'/>
                </ListItem>,
                <ListItem button key={1} button component={RouterLink} to='/admin'>
                    <ListItemText primary='Admin'/>
                </ListItem>,
                <ListItem button key={2} button onClick={handleSignOut}>
                    <ListItemText primary='Logout'/>
                </ListItem>
            ] 
            }
        </List>
    </Collapse>
    );

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Grid container alignItems='center' className={classes.searchBar}>
                    <IconButton
                    className={classes.sectionMobile}
                    aria-label='show more'
                    aria-haspopup='true'
                    color='inherit'
                    onClick={toggleMenu}
                    >
                        <Menu />
                    </IconButton>
                    <Link component={RouterLink} to='/' color='inherit' className={classes.mx}>
                        <Typography variant='h5' noWrap>
                                Geasy Shop
                        </Typography>
                    </Link>
                    <div className={clsx(classes.sectionDesktop, classes.searchField)}>
                        <SearchField
                        placeholder='Search Product' 
                        className={classes.searchField}
                        fullWidth
                        />
                    </div>
                    <Grid container item justify='flex-end' className={classes.sectionDesktop}>
                        {!currentUser ? [
                            <Link key={0} component={RouterLink} to='/register' color='inherit' className={classes.mx}>
                                Register
                            </Link>,
                            <Link key={1} component={RouterLink} to='/login' color='inherit'>
                                Sign In
                            </Link>
                        ] : [   
                            <AdminButton key={0} currentUser={currentUser} />,
                            <IconButton
                            key={1} 
                            color='inherit' 
                            size='medium' 
                            aria-label='my account' 
                            component={RouterLink} 
                            to='/dashboard'>
                                <AccountCircleOutlined />
                            </IconButton> 
                        ]}
                    </Grid>
                    <IconButton 
                    color='inherit' 
                    size='medium' 
                    aria-label='my cart' 
                    component={RouterLink} 
                    to='/cart'
                    className={classes.searchButton}>
                        <Badge badgeContent={totalCartItemsNum} color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Grid>
                {sectionMobile}
                <Grid container item className={clsx(classes.menuWrapper, classes.sectionDesktop)}>
                    <div>
                        <Button component={RouterLink} to='/products/men' color='inherit' className={classes.menuButton}>
                            Men
                        </Button>
                        <MegaMenu category='men'/>
                    </div>
                    <div>
                        <Button component={RouterLink} to='/products/women' color='inherit' className={classes.menuButton}>
                            Women
                        </Button>
                        <MegaMenu category='women' />
                    </div>
                    <div>
                        <Button component={RouterLink} to='/products/boys' color='inherit' className={classes.menuButton}>
                            Boys
                        </Button>
                        <MegaMenu category='boys' />
                    </div>
                    <div>
                        <Button component={RouterLink} to='/products/girls' color='inherit' className={classes.menuButton}>
                            Girls
                        </Button>
                        <MegaMenu category='girls' />
                    </div>
                    <div>
                        <Button component={RouterLink} to='/products/baby' color='inherit' className={classes.menuButton}>
                            Baby
                        </Button>
                        <MegaMenu category='baby' />
                    </div>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
};
Header.defaultProps = {
    currentUser: null,
}

export default Header;