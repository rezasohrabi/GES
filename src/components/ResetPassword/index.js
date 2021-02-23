import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormPanel from '../FormPanel';
import { useHistory } from 'react-router-dom'
import { TextField, Button, Typography } from '@material-ui/core';
import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions'

const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userError: user.userError
})

const ResetPassword = props => {
    const { resetPasswordSuccess, userError } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const resetForm = () => {
        setEmail('');
        setErrors([]);
    }

    useEffect( () => {
        if(resetPasswordSuccess) {
            resetForm();
            dispatch(resetUserState());
            history.push('/login')
        }
    }, [resetPasswordSuccess]);

    useEffect( () => {
        if(Array.isArray(userError) && userError.length > 0) {
            setErrors(userError);
        }
    }, [userError]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({email}));
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

export default ResetPassword;