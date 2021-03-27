import { call, all, takeLatest, put } from 'redux-saga/effects';
import { handleAddComment, handleFetchComments } from './comments.helpers';
import commentTypes from './comments.types';
import { auth } from '../../firebase/utils';
import { fetchCommentsStart, setComments } from './comments.actions';

export function* fetchComments({payload}) {
    try {
        const comments = yield handleFetchComments(payload);
        yield put(
            setComments(comments)
        )
    } catch(err) {
        console.error(err);
    }
}

export function* onFetchCommentsStart() {
    yield takeLatest(commentTypes.FETCH_COMMENTS_START, fetchComments);
}

export function* addComment({payload}) {
    try {
        const timeStamp = new Date();
        const displayName = auth.currentUser.displayName;
        yield handleAddComment({
            ...payload,
            date: timeStamp,
            author: displayName,
        });
        yield put(
            fetchCommentsStart(payload.productId)
        )
    } catch(err) {
        console.log(err);
    }
}

export function* onAddCommentStart() {
    yield takeLatest(commentTypes.ADD_COMMENT_START, addComment)
}

export default function* commentSagas() {
    yield all([
        call(onFetchCommentsStart),
        call(onAddCommentStart),
    ])
}