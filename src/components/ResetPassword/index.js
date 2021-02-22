import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormPanel from '../FormPanel';
import { withRouter } from 'react-router-dom'
import { TextField, Button, Typography } from '@material-ui/core';
import { resetAllForms, resetPassword } from './../../redux/User/user.actions'

const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const ResetPassword = props => {
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const resetForm = () => {
        setEmail('');
        setErrors([]);
    }

    useEffect( () => {
        if(resetPasswordSuccess) {
            resetForm();
            dispatch(resetAllForms());
            props.history.push('/login')
        }
    }, [resetPasswordSuccess]);

    useEffect( () => {
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setErrors(resetPasswordError);
        }
    }, [resetPasswordError]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPassword({email}));
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