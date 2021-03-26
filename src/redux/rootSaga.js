import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas.js';
import productsSagas from './Products/products.sagas'
import categorySagas from './Category/category.sagas';
import commentSagas from './Comments/comments.sagas.js';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSagas),
        call(categorySagas),
        call(commentSagas),
    ])
};
