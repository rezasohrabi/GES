import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, TextField, Typography} from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd'
import FormPanel from '../FormPanel';
import { useSelector, useDispatch } from 'react-redux';
import { signUpUserStart } from '../../redux/User/user.actions';

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userError: user.userError
})

const Signup = props => {
    const { currentUser, userError } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

    const resetForm = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    useEffect(() => {
        if(currentUser) {
            resetForm();
            history.push('/')
        }
    }, [currentUser]);

    useEffect( () => {
        if(Array.isArray(userError) && userError.length > 0) {
            setErrors(userError);
        }
    }, [userError]);

    const handleSubmit =  e => {
        e.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

    return (
        <FormPanel title='Sign Up' icon={<PersonAdd />}>
            {errors.length > 0 && (
                errors.map((err, index) => {
                    return <Typography key={index} component='div' color='error'>{err}</Typography>;
                }))
            };
            <form onSubmit={handleSubmit}>
                <TextField
                label='Full Name'
                name='displayName' 
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                type='text'
                margin='normal'
                fullWidth
                required
                />
                <TextField
                label='Email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                margin='normal'
                fullWidth
                required
                />
                <TextField
                label='Password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                margin='normal'
                fullWidth
                required
                />
                <TextField
                label='Confirm Password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type='password'
                margin='normal'
                fullWidth
                required
                />
                <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
                style={{margin: '2rem 0 1rem'}}                    
                >Sign Up</Button>
            </form>
        </FormPanel>
    )
};

export default Signup;