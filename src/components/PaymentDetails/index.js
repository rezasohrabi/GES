import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, InputLabel } from '@material-ui/core';
import SelectCountry from '../SelectCountry';

const initialAddressState = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US',
};

const PaymentDetails = props => {
    const [recipientName, setRecipientName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});
    const [billingAddress, setBillingAddress] = useState({...initialAddressState});


    const handleShippingChange = e => {
        const {name, value} = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
        });
        console.log('target', e);
    };

    const handleBillingAddress = e => {
        const {name, value} = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value,
        });
    };

    const handleSubmit = async () => {

    }
    

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
                    onChange={e => setBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line2'
                    label='Line 2'
                    type='text'
                    value={billingAddress.line2}
                    onChange={e => setBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='city'
                    label='City'
                    type='text'
                    value={billingAddress.city}
                    onChange={e => setBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='state'
                    label='State'
                    type='text'
                    value={billingAddress.state}
                    onChange={e => setBillingAddress(e)}
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='postalCode'
                    label='Postal Code'
                    type='number'
                    value={billingAddress.postalCode}
                    onChange={e => setBillingAddress(e)}
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
                    <TextField
                    name='name on card'
                    label='Name On Card'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                </Box>
                <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
                >Pay Now</Button>
            </form>
        </Container>
    );
};

export default PaymentDetails;