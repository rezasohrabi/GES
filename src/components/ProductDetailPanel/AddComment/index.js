import React, { useState } from 'react';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentStart } from '../../../redux/Comments/comments.actions';

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

const mapState = ({user}) => ({
    currentUser: user.currentUser,
});

const AddComment = props => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const { productId } = useParams();
    const [comment, setComment] = useState('');
    const classes = useStyles();

    const handleAddComment = (e) => {
        e.preventDefault()
        dispatch(
            addCommentStart({
                productId,
                comment,
                colour: '',
                size: '',
                url: '',
                verifiedPurchase: false,  
            })
        )
        setComment('');
    }
    if(!currentUser) return null;

    return (
        <form onSubmit={handleAddComment}>
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
                    onSubmit={handleAddComment}
                    className={classes.submitButton}
                    >Submit</Button>
            </Grid>
        </form>
    );
};

export default AddComment;
