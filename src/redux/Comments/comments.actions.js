import commentTypes from './comments.types';

export const fetchCommentsStart = productId => ({
    type: commentTypes.FETCH_COMMENTS_START,
    payload: productId,
});

export const addCommentStart = comment => ({
    type: commentTypes.ADD_COMMENT_START,
    payload: comment,
})

export const setComments = (comments) => ({
    type: commentTypes.SET_COMMENTS,
    payload: comments,
});
