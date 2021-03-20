import React from 'react';
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    avatarItem: {
        marginRight: theme.spacing(4),
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

const ProductListItem = props => {
    const classes = useStyles();
    const { productName, productThumbnail, productPrice, productId, } = props.product;

    return (
        <>
        <Divider component='li'/>
        <ListItem alignItems='flex-start'>
            <ListItemAvatar className={classes.avatarItem}>
                <Avatar 
                variant='square' 
                alt={productName} 
                src={productThumbnail[0]}
                className={classes.avatar} 
            />
            </ListItemAvatar>
            <ListItemText 
                primary={productName} 
                secondary={
                    <>  {productPrice}$
                        <Button 
                        onClick={e => props.onDelete(productId)}
                        color='secondary'
                        >Delete</Button>
                    </>
                }
            />
        </ListItem>
        </>
    )
}

export default ProductListItem;