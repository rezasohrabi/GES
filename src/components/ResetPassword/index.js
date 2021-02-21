import React, { useState } from 'react';
import FormPanel from '../FormPanel';
import { withRouter } from 'react-router-dom'
import { auth } from './../../firebase/utils'
import { TextField, Button, Typography } from '@material-ui/core';

const ResetPassword = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            
            const config = {
                url: 'http://localhost:3000/login'
            }

            await auth.sendPasswordResetEmail(email, config)
                .then( () => {
                    props.history.push('/login');
                })
                .catch( (error) => {
                    setErrors({
                        errors: ['Email not found, please try again.']
                    });
                });

        } catch(err) {
            console.error(err);
        }
    }


    const panelConfig = {
        title: 'Forget Your Password?',
    }
    return (
        <FormPanel {...panelConfig}>
            {errors.length > 0 && (
                errors.map((e, index) => {
                    return <Typography key={index} color='error'>{e}</Typography>
                })
            )}
            <form onSubmit={handleSubmit}>
                <br /><br />
                <Typography variant='body2'>
                    Please enter your email address, as soon as possible we send you recovery email.
                </Typography>
                <TextField 
                name='email'
                label='Email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin='normal'
                fullWidth
                autoFocus
                />
                <Button
                variant='contained'
                type='submit'
                color='primary'
                fullWidth 
                style={{margin: '2rem 0 1rem'}}
                >Reset Password</Button>
            </form>
        </FormPanel>
    )
};

export default withRouter(ResetPassword);