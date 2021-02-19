import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Avatar, Box, Button, Container, Divider, Link, makeStyles, SvgIcon, TextField, Typography } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen'
import GoogleIcon from './../Icons/GoogleIcon'
import { signInWithGoogle } from './../../firebase/utils';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        margin: theme.spacing(1),
    },
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const classes = useStyles();

    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon />
                </Avatar>
                <Typography variant='h5'>
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                    name='email'
                    label='Email'
                    margin='normal'
                    required
                    fullWidth
                    autoFocus
                    autoComplete='email' 
                    />
                    <TextField
                    name='password'
                    label='Password'
                    type='password'
                    margin='normal'
                    required
                    fullWidth
                    autoComplete='current-password' 
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
            </div>
        </Container>
    )
};

export default Signin;