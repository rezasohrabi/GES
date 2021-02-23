import userTypes from './user.types';

export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
});

export const signInWithGoogleStart =  () => ({
    type: userTypes.SIGN_IN_WITH_GOOGLE_START
});

export const signUpUserStart = (userCredentials) => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredentials
});

export const resetPasswordStart = email => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: email
});

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
});

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
});

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
});

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const userError = err => ({
    type: userTypes.USER_ERROR,
    payload: err
});

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
});
