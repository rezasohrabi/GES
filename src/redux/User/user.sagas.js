import { all, call, put, takeLatest } from 'redux-saga/effects';
import { auth, getCurrentUser, GoogleProvider, handleUserProfile } from '../../firebase/utils';
import { resetPasswordSuccess, signInSuccess, signOutUserSuccess, userError } from './user.actions';
import { handleResetPasswordApi } from './user.helpers';
import userTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalData = {}) {
    try {
        const userDocRef = yield call(handleUserProfile, {userAuth, additionalData});
        const userDocSnapshot = yield userDocRef.get();
        yield put(
            signInSuccess({
            id: userDocSnapshot.id,
            ...userDocSnapshot.data()
        }));
    } catch(err) {
        console.error(err);
    }
    
}

export function* emailSignIn({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(err) {
        console.error(err);
    }

}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch(err) {
        console.error(err);
    }  
}

export function* onSignInWithGoogleStart() {
    yield takeLatest(userTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

export function* signUpUser({payload: {
    displayName, 
    email, 
    password, 
    confirmPassword
    }}) {
    
    if(password !== confirmPassword) {
        const err = ['Password doesn\'t match']
        yield put(
            userError(err)
        );
    }

    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user, {displayName});
    } catch(err) {
        console.error(err);
    }
    
}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({payload: {email}}) {
    try {
        yield call(handleResetPasswordApi, email);
        yield put(
            resetPasswordSuccess()
        )
    }catch (err) {
        yield put (
            userError(err)
        )
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        )
    } catch (err) {
        console.error(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(err) {
        console.error(err);
    }

}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onSignInWithGoogleStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onSignOutUserStart),
        call(onCheckUserSession),
    ]);
};