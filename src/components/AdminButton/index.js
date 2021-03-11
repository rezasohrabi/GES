import React from 'react';
import { IconButton } from '@material-ui/core';
import { SupervisorAccountOutlined } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { checkUserIsAdmin } from '../../utils';

const AdminButton = props => {

    const { currentUser } = props;
    const isAdmin = checkUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return (
        <IconButton
        color='inherit' 
        size='medium' 
        aria-label='admin' 
        component={RouterLink} 
        to='/admin'>
            <SupervisorAccountOutlined />
        </IconButton> 
    )
};

export default AdminButton;
