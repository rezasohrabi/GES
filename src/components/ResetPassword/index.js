import React from 'react';
import FormPanel from '../FormPanel';
import { withRouter } from 'react-router-dom'
import { auth } from './../../firebase/utils'
import { TextField, Button, Typography } from '@material-ui/core';

const initialState = {
    email: '',
    errors: [],
}

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            
            const { email } = this.state;
            const config = {
                url: 'http://localhost:3000/login'
            }

            await auth.sendPasswordResetEmail(email, config)
                .then( () => {
                    this.props.history.push('/login');
                })
                .catch( (error) => {
                    this.setState({
                        errors: ['Email not found, please try again.']
                    });
                });

        } catch(err) {
            console.error(err);
        }
    }


    render() {
        const panelConfig = {
            title: 'Forget Your Password?',
        }
        const { email, errors } = this.state;
        return (
            <FormPanel {...panelConfig}>
                {errors.length > 0 && (
                    errors.map((e, index) => {
                        return <Typography key={index} color='error'>{e}</Typography>
                    })
                )}
                <form onSubmit={this.handleSubmit}>
                    <br /><br />
                    <Typography variant='body2'>
                        Please enter your email address, as soon as possible we send you recovery email.
                    </Typography>
                    <TextField 
                    name='email'
                    label='Email'
                    type='email'
                    value={email}
                    onChange={this.handleChange}
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
    }
};

export default withRouter(ResetPassword);