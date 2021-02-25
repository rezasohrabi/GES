import React from 'react';
import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { checkUserIsAdmin } from '../../utils';

const AdminButton = props => {

    const { currentUser } = props;
    const isAdmin = checkUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return (
        <Button 
        startIcon={<AccountCircle />}
        component={RouterLink} 
        to='/admin'
        size='small' 
        variant='outlined' 
        color='inherit'>
            My Admin
        </Button> 
    )
};

export default AdminButton;
