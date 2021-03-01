import React from 'react';
import { IconButton, TableCell, TableRow, makeStyles } from '@material-ui/core';
import { Add, Remove, Close } from '@material-ui/icons'

const useStyles = makeStyles( (theme) => ({
    image: {
        width: '5rem',
        height: '6rem',
    }
}));

const CheckoutItem = product => {

    const {
        productName,
        productThumbnail,
        quantity,
        productPrice
    } = product;

    const classes = useStyles();
    return (
        <TableRow>
            <TableCell>
                <img className={classes.image} src={productThumbnail} alt={productName} />
            </TableCell>
            <TableCell>
                {productName}
            </TableCell>
            <TableCell align='center'>
                <IconButton
                color='secondary'
                component='span'>
                    <Add />
                </IconButton>
                <div>{quantity}</div>
                <IconButton
                color='secondary'
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
                component='span'>
                    <Close />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default CheckoutItem;