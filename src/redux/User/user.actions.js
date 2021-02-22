import userTypes from './user.types';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils'

export const setCurrentUser =  user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const signInUser = ({email, password}) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch(err) {
        const error = ['Your credential is wrong'];
        dispatch({
            type: userTypes.SIGN_IN_ERRORS,
            payload: error
        })
    }
}


export const signUpUser = ({displayName, email, password, confirmPassword}) => async dispatch => {
        
    if(password !== confirmPassword){
        dispatch({
            type: userTypes.SIGN_UP_ERRORS,
            payload: ['Password doesn\'t match']
        });
        return;
    }

    try {
        const { user} = await auth.createUserWithEmailAndPassword(email, password);
        await handleUserProfile(user, {displayName});
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        });
    } catch(error) {
        dispatch({
            type: userTypes.SIGN_UP_ERRORS,
            payload: ['Something went wrong! please try again.']
        });
    }
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider);
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        });
    } catch(error) {
        dispatch({
            type: userTypes.SIGN_IN_ERRORS,
            payload: ['Something went wrong! please check your connection']
        })
    }
}

export const resetPassword = ({email}) => async dispatch => {

    try {
        const config = {
            url: 'http://localhost:3000/login'
        }

        await auth.sendPasswordResetEmail(email, config)
        .then(() => {
            dispatch({
                type: userTypes.RESET_PASSWORD_SUCCESS,
                payload: true
            });
        })
        .dispatch({
            type: userTypes.RESET_PASSWORD_ERROR,
            payload: ['Email not found, please try again.']
        })

    } catch(err) {
        console.error(err);
    }
}

export const resetAllForms = () => ({
    type: userTypes.RESET_ALL_AUTH_FORMS
})
