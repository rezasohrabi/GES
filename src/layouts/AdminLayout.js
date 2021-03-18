import React from 'react';
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { AccountCircle, Home, ExitToApp, Category } from '@material-ui/icons/';
import Header  from './../components/Header'
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../redux/User/user.actions';

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        wordBreak: 'break-word',
        boxShadow: theme.shadows['1']
    },
}));

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const AdminLayout = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const handleSignOut = () => {
        dispatch(signOutUserStart());
    }

    return (
       <Grid container>
           <Header />
           <Grid container item xs={12} sm={3}>
                <List className={classes.menu}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircle fontSize='large'/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={currentUser.displayName} secondary={currentUser.email}/>
                    </ListItem>
                    <Divider />
                    <ListItem 
                    button 
                    component={RouterLink} 
                    to='/admin'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem 
                    button
                    component={RouterLink}
                    to='/admin/category'>
                        <ListItemIcon>
                            <Category />
                        </ListItemIcon>
                        <ListItemText primary='Category' />
                    </ListItem>
                    <ListItem 
                    button 
                    onClick={handleSignOut}>
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                </List>
           </Grid>
            <Grid container item xs={12} sm={9}>
                {props.children}
            </Grid>
       </Grid> 
    )
};

export default AdminLayout;