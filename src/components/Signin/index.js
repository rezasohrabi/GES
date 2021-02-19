import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Divider, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen'
import GoogleIcon from './../Icons/GoogleIcon'
import { auth, signInWithGoogle } from './../../firebase/utils';
import FormPanel from '../FormPanel';

const useStyles = makeStyles(theme => ({
    submitButton: {
        margin: theme.spacing(3, 0, 2),
    },
    dividerCaption: {
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'Translate(-50%,-50%)',
        backgroundColor: theme.palette.primary.contrastText,
        padding: theme.spacing(0, 1),
    },
    googleIcon: {
        width: '1.5rem',
        height: '1.5rem',
    },
}));

const Signin = props => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');

        } catch(error) {
            console.error(error);
        }
    }

    const classes = useStyles();

    return (
       <FormPanel title='Sign in' icon={<LockOpenIcon />}>
            <form onSubmit={handleSubmit}>
                <TextField
                name='email'
                label='Email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin='normal'
                required
                fullWidth
                autoFocus
                />
                <TextField
                name='password'
                label='Password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin='normal'
                required
                fullWidth
                />
                <Link component={RouterLink} to='/' variant='body2'>
                    Forget password?
                </Link>
                <Button 
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submitButton}
                fullWidth
                >sign in
                </Button>
                <Box textAlign='right'>
                    <Link  component={RouterLink} to='/register' variant='body2'>
                        Don't have an account? Sign Up
                    </Link>
                </Box>
                <Box position='relative' mt={4} mb={5}>
                    <Typography className={classes.dividerCaption} variant='caption'>OR</Typography>
                    <Divider/>
                </Box>
                <Button
                startIcon={
                    <GoogleIcon 
                    className={classes.googleIcon} 
                    />}
                type='submit'
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={signInWithGoogle}
                >sign in with google
                </Button>
            </form>
        </FormPanel>
    )
};

export default Signin;