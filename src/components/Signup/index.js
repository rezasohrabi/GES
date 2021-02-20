import React, { Component } from 'react';
import { Button, TextField, Typography} from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd'
import FormPanel from '../FormPanel';
import { auth, handleUserProfile } from './../../firebase/utils'


const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: [],
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            this.setState({
                errors:['Password doesn\'t match'],
            });
            return;
        }

        try {
            const { user} = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {displayName});
    
            this.setState({
                ...initialState
            });

        } catch(error) {
            console.error(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;
        return (
            <FormPanel title='Sign Up' icon={<PersonAdd />}>
                {errors.length > 0 && (
                    errors.map((err, index) => {
                        return <Typography key={index} component='div' color='error'>{err}</Typography>;
                    }))
                };
                <form onSubmit={this.handleSubmit}>
                    <TextField
                    label='Full Name'
                    name='displayName' 
                    value={displayName}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    type='email'
                    margin='normal'
                    fullWidth
                    required
                    />
                    <TextField
                    label='Password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    type='password'
                    margin='normal'
                    fullWidth
                    required
                    />
                    <TextField
                    label='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
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
    }
};

export default Signup;