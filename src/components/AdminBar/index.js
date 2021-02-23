import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../../utils';

const useStyles = makeStyles((theme) => ({
    Toolbar: {
        justifyContent: 'flex-end'
    }
}));

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const AdminBar = props => {
    const classes = useStyles();

    const { currentUser } = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return (
        <AppBar 
        position='static' 
        color='inherit'
        >
            <Toolbar className={classes.Toolbar}>
                <Button 
                component={Link} 
                to='/admin'
                size='small' 
                variant='outlined' 
                color='primary'>
                    My Admin
                </Button> 
            </Toolbar>
        </AppBar>
    )
};

export default AdminBar;
