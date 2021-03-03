import React from 'react';
import { Box, Button, Container, Select, MenuItem, TextField, Typography, InputLabel } from '@material-ui/core';
import countryList from 'react-select-country-list';

const PaymentDetails = props => {

    const countryData = countryList().getData();

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
                    required
                    fullWidth
                    autoFocus
                    />
                    <TextField
                    name='line1'
                    label='Line 1'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line1'
                    label='Line 1'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line2'
                    label='Line 2'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='city'
                    label='City'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='state'
                    label='State'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <InputLabel id='countryLabel' style={{marginTop: '1rem'}}>Country</InputLabel>
                    <Select 
                    labelId='countryLabel'
                    fullWidth>
                        {countryData.map(country => {
                            const { value, label } = country;
                            return <MenuItem 
                            key={value} 
                            value={value}
                            >{label}
                            </MenuItem>
                        })}                      
                    </Select>
                </Box>
                <Box mb={8}>
                    <Typography
                    variant='h5'
                    color='inherit'>Billing Address</Typography>
                    <TextField
                    name='name on card'
                    label='Name On Card'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line1'
                    label='Line 1'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='line2'
                    label='Line 2'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='city'
                    label='City'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='state'
                    label='State'
                    type='text'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <TextField
                    name='postalCode'
                    label='Postal Code'
                    type='number'
                    margin='normal'
                    required
                    fullWidth
                    />
                    <InputLabel id='countryLabel' style={{marginTop: '1rem'}}>Country</InputLabel>
                    <Select 
                    labelId='countryLabel'
                    fullWidth>
                        {countryData.map(country => {
                            const { value, label } = country;
                            return <MenuItem 
                            key={value} 
                            value={value}
                            >{label}
                            </MenuItem>
                        })}                      
                    </Select>
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