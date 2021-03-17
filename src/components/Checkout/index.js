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
    Button,
    Card
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
    empty: {
        padding: theme.spacing(4),
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
                variant='h5' 
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
            ] : (
                <Container maxWidth='md'>
                    <Card className={classes.empty}>
                        <Typography
                        variant='h5'
                        color='textSecondary'
                        >Your cart is empty</Typography>
                    </Card>
                </Container>
            )}
        </Container>
    )
}

export default Checkout;