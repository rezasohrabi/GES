import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, TextField, Typography} from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd'
import FormPanel from '../FormPanel';
import { auth, handleUserProfile } from './../../firebase/utils'


const Signup = props => {
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
        setErrors('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(password !== confirmPassword){
            setErrors({
                errors:['Password doesn\'t match'],
            });
            return;
        }

        try {
            const { user} = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {displayName});
            resetForm();
            props.history.push('/')

        } catch(error) {
            console.error(error);
        }
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
                autoFocus
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

export default withRouter(Signup);