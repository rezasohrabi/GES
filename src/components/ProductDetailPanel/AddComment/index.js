import React, { useState } from 'react';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    submitButton: {
        alignSelf: 'flex-start',
    }
}));

const AddComment = props => {
    const [comment, setComment] = useState('');
    const classes = useStyles();
    return (
        <Grid container item direction='column' className={classes.root}>
            <TextField
            name='comment'
            label='Comment'
            value={comment}
            onChange={e => setComment(e.target.value)}
            multiline
            rows={4}
            margin='normal'
            required
            placeholder='Write a comment'
            />
            <Button 
            type='submit'
            variant='outlined'
            color='primary'
            className={classes.submitButton}
            >Submit</Button>
        </Grid>
    );
};

export default AddComment;
