import React from 'react';
import { IconButton, TableCell, TableRow, makeStyles } from '@material-ui/core';
import { Add, Remove, Close } from '@material-ui/icons'
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCartItemQuantity, removeCartItem } from '../../../redux/Cart/cart.actions';

const useStyles = makeStyles( (theme) => ({
    image: {
        width: '5rem',
        height: '6rem',
    }
}));

const CheckoutItem = cartItem => {

    const {
        productName,
        productThumbnail,
        quantity,
        productPrice,
        productId,
    } = cartItem;

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleRemoveCartItem = () => {
        dispatch(
            removeCartItem(productId)
        )
    }

    const handleIncreaseQuantity = () => {
        dispatch(
            addToCart(cartItem)
        )
    }

    const handleDecreaseQuantity = () => {
        dispatch(
            decreaseCartItemQuantity(cartItem)
        )
    }

    return (
        <TableRow>
            <TableCell>
                <img className={classes.image} src={productThumbnail[0]} alt={productName} />
            </TableCell>
            <TableCell>
                {productName}
            </TableCell>
            <TableCell align='center'>
                <IconButton
                color='secondary'
                onClick={handleIncreaseQuantity}
                component='span'>
                    <Add />
                </IconButton>
                <div>{quantity}</div>
                <IconButton
                color='secondary'
                onClick={handleDecreaseQuantity}
                component='span'>
                    <Remove />
                </IconButton>
            </TableCell>
            <TableCell>
                {productPrice}
            </TableCell>
            <TableCell>
                <IconButton
                color='secondary'
                onClick={handleRemoveCartItem}
                component='span'>
                    <Close />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default CheckoutItem;