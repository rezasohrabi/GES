import { 
    TableContainer, 
    Paper, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    Container, 
    makeStyles, 
    Typography, 
    TableBody, 
    Button
    } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/Cart/cart.selectors';
import CheckoutItem from './CheckoutItem';

const useStyles = makeStyles( (theme) => ({
    title: {
        marginBottom: theme.spacing(2),
    },
    checkoutWrapper: {
        marginTop: theme.spacing(8),
    },
}));

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

const Checkout = props => {

    const { cartItems, totalPrice } = useSelector(mapState);
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container maxWidth='md' className={classes.checkoutWrapper}>
            {cartItems.length > 0? [
                <Typography
                key={1} 
                className={classes.title}
                variant='h4' 
                >Checkout Cart</Typography>,
                <TableContainer key={2} component={Paper}>
                    <Table aria-label='checkout table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map( (cartItem, pos) => (
                                <CheckoutItem key={pos} {...cartItem} />
                            ))}
                            <TableRow>
                                <TableCell colSpan='3' align='left'>
                                    <Button 
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => history.goBack()}
                                    >Continue Shopping</Button>{' '}
                                    <Button 
                                    variant='contained'
                                    color='primary'
                                    onClick={() => history.push('/payment')}
                                    >Checkout</Button>
                                </TableCell>
                                <TableCell colSpan='2'>
                                    <Typography
                                    variant='body1'
                                    color='primary'
                                    >Total: {totalPrice.toFixed(2)}$</Typography>
                                </TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            ] : <Typography
                variant='h5'
                >Your cart is empty</Typography>}
        </Container>
    )
}

export default Checkout;