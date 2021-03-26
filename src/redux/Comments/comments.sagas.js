import { call, all, takeLatest, put } from 'redux-saga/effects';
import { handleFetchComments } from './comments.helpers';
import commentTypes from './comments.types';
import { auth } from '../../firebase/utils';
import { setComments } from './comments.actions';

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

export default function* commentSagas() {
    yield all([
        call(onFetchCommentsStart),
    ])
}