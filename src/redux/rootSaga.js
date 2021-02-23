import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas.js';

export default function* rootSaga() {
    yield all([call(userSagas)])
};
