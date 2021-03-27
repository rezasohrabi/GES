import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import AddComment from '../AddComment';
import { fetchCommentsStart } from '../../../redux/Comments/comments.actions';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    comment: {
        marginBottom: theme.spacing(4),
    }
}));

const mapState = ({commentData}) => ({
    comments: commentData.comments,
});

const Comments = (props) => {
    const { productId } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { comments } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchCommentsStart(productId)
        )
    }, []);

    return(
        <>
        <Typography variant='h6' color='textPrimary' className={classes.title}>User Comments</Typography>
        {comments && comments.length > 0 && comments.map((cmt, index) => {
            const { comment, url, date, author, verifiedPurchase } = cmt;
            return (
            <Grid container item xs={12} key={index} className={classes.comment}>
                <Grid container alignItems='center'>
                    <Avatar src={url} className={classes.avatar}/>
                    <Typography variant='body1' color='textPrimary'>{author}</Typography>
                </Grid>
                <Grid>
                    {verifiedPurchase &&
                        <Typography variant='caption' color='textSecondary'>Verified Purchase of {cmt.size} | {cmt.colour} </Typography>
                    }
                    <Typography variant='body2'>{comment} </Typography>
                    <Typography variant='caption' color='textSecondary'>{date.toDate().toString()}</Typography>
                </Grid>
            </Grid>)
        })}
        {comments && 
        comments.length === 0 && 
        <Typography variant='body1' color='textSecondary'>No Comment Was Found, Write First Comment</Typography>
        }
        <AddComment />
        </>
    )
}

export default Comments;
