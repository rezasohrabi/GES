import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import AddComment from '../AddComment';

const comments = [
    {
        comment: `wanted an over sized sweatshirt to be long and comfy, and to cover my butt so i can wear leggings without old people getting triggered. Any smaller and I don't think it would have been long enough. Not too thick, just right for me.`,
        url: 'https://www.amazon.com/avatar/default/amzn1.account.AHKZ33VBY2OZCHWSKYVHEVXDJDHQ?square=true&max_width=460',
        colour: 'blue',
        size: 'X-Large',
        date: 'March 11, 2018',
        author: 'AshleyC35',
        verifiedPurchase: true,
    },
    {
        comment: `wanted an over sized sweatshirt to be long and comfy, and to cover my butt so i can wear leggings without old people getting triggered. Any smaller and I don't think it would have been long enough. Not too thick, just right for me.`,
        url: 'https://www.amazon.com/avatar/default/amzn1.account.AHKZ33VBY2OZCHWSKYVHEVXDJDHQ?square=true&max_width=460',
        colour: 'blue',
        size: 'X-Large',
        date: 'March 11, 2018',
        author: 'AshleyC35',
        verifiedPurchase: true,
    },
    {
        comment: `wanted an over sized sweatshirt to be long and comfy, and to cover my butt so i can wear leggings without old people getting triggered. Any smaller and I don't think it would have been long enough. Not too thick, just right for me.`,
        url: 'https://www.amazon.com/avatar/default/amzn1.account.AGI5S4REUKNOHXAKFLEBHAXL7HVA?square=true&max_width=460',
        date: 'March 11, 2018',
        author: 'AshleyC35',
        verifiedPurchase: false,
    },
    
];

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

const Comments = (props) => {
    const classes = useStyles();
    return(
        <>
        <Typography variant='h6' color='textPrimary' className={classes.title}>User Comments</Typography>
        {comments.map((cmt, index) => {
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
                    <Typography variant='caption' color='textSecondary'>{date}</Typography>
                </Grid>
            </Grid>)
        })}
        <AddComment />
        </>
    )
}

export default Comments;
