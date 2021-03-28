import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import SelectCountry from '../SelectCountry';
import { createStructuredSelector } from 'reselect';
import { selectCartTotalPrice } from './../../redux/Cart/cart.selectors'
import { useSelector } from 'react-redux';

const initialAddressState = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'US',
};

const mapState = createStructuredSelector({
    total: selectCartTotalPrice,
});

const PaymentDetails = props => {

    const { total } = useSelector(mapState);
    const [recipientName, setRecipientName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});
    const [billingAddress, setBillingAddress] = useState({...initialAddressState});
    const [errors, setErrors] = useState([]);


    const handleShippingChange = e => {
        const {name, value} = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
        });
    };

    const handleBillingAddress = e => {
        const {name, value} = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // const cardElement = elements.getElement('card');
    
        // if (
        //   !shippingAddress.line1 || !shippingAddress.city ||
        //   !shippingAddress.state || !shippingAddress.postal_code ||
        //   !shippingAddress.country || !billingAddress.line1 ||
        //   !billingAddress.city || !billingAddress.state ||
        //   !billingAddress.postal_code || !billingAddress.country ||
        //   !recipientName || !nameOnCard
        // ) {
        //   return;
        // }
    
        // apiInstance.post('/payments/create', {
        //   amount: total * 100,
        //   shipping: {
        //     name: recipientName,
        //     address: {
        //       ...shippingAddress
        //     }
        //   }
        // }).then(({ data: clientSecret }) => {
    
        //   stripe.createPaymentMethod({
        //     type: 'card',
        //     card: cardElement,
        //     billing_details: {
        //       name: nameOnCard,
        //       address: {
        //         ...billingAddress
        //       }
        //     }
        //   }).then(({ paymentMethod }) => {
    
        //     stripe.confirmCardPayment(clientSecret, {
        //       payment_method: paymentMethod.id
        //     })
        //     .then(({ paymentIntent }) => {
        //       dispatch(
        //         clearCart()
        //       )
        //     });
    
        //   })
    
        // }).catch((error) => {
        //     setErrors(['something went wrong, uable to connect stripe'])
        // });
    
      };

    const configCardElement = {
        iconStyle: 'solid',
        style: {
          base: {
            fontSize: '16px'
          }
        },
        hidePostalCode: true
    };
    

    return (
        <Container maxWidth='xs' >
            <form onSubmit={handleSubmit}>
                <Box mt={8} mb={8}>
                    <Typography
                    variant='h5'
                    color='inherit'>Shipping Address</Typography>
                    <TextField
                    name='recipientName'
                    label='Recipient Name'
                    type='text'
                    margin='normal'
                    value={recipientName}
                    onChange={e => setRecipientName(e.target.value)}
                    required
                    fullWidth
                    autoFocus
                    />
                    <TextField
                    name='line1'
                    label='Line 1'
                    type='text'
                    value={shippingAddress.line1}
                    onChange={e => handleShippingChange(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line2'
                    label='Line 2'
                    type='text'
                    value={shippingAddress.line2}
                    onChange={e => handleShippingChange(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='city'
                    label='City'
                    type='text'
                    value={shippingAddress.city}
                    onChange={e => handleShippingChange(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='state'
                    label='State'
                    type='text'
                    value={shippingAddress.state}
                    onChange={e => handleShippingChange(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='postal_code'
                    label='Postal Code'
                    type='number'
                    value={shippingAddress.postal_code}
                    onChange={e => handleShippingChange(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <SelectCountry
                    value={shippingAddress.country}
                    onChange={e => handleShippingChange(e)}
                    label='Country'
                    fullWidth
                    />
                </Box>
                <Box mb={8}>
                    <Typography
                    variant='h5'
                    color='inherit'>Billing Address</Typography>
                    <TextField
                    name='name on card'
                    label='Name On Card'
                    type='text'
                    value={nameOnCard}
                    onChange={e => setNameOnCard(e.target.value)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line1'
                    label='Line 1'
                    type='text'
                    value={billingAddress.line1}
                    onChange={e => handleBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line2'
                    label='Line 2'
                    type='text'
                    value={billingAddress.line2}
                    onChange={e => handleBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='city'
                    label='City'
                    type='text'
                    value={billingAddress.city}
                    onChange={e => handleBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='state'
                    label='State'
                    type='text'
                    value={billingAddress.state}
                    onChange={e => handleBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='postal_code'
                    label='Postal Code'
                    type='number'
                    value={billingAddress.postal_code}
                    onChange={e => handleBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <SelectCountry
                    value={billingAddress.country}
                    onChange={e => handleBillingAddress(e)}
                    label='Country'
                    fullWidth
                    />
                </Box>
                <Box mb={8}>
                    <Typography
                    variant='h5'
                    color='inherit'>Card Details</Typography>

                    {/* <CardElement  
                    options={configCardElement}
                    /> */}
                </Box>
                <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
                >Pay Now</Button>
                {errors && errors.map((err, index) => {
                        return <Typography
                                key={index}
                                color='error'
                                variant='body1'
                                >{err}</Typography>
                    })
                }
            </form>
        </Container>
    );
};

export default PaymentDetails;