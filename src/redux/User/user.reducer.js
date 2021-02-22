import userTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    signInSuccess: false,
    signInErrors: [],
    signUpSuccess: false,
    signUpErrors: [],
    resetPasswordSuccess: false,
    resetPasswordError: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInSuccess: action.payload
            }
        case userTypes.SIGN_IN_ERRORS:
            return {
                ...state,
                signInErrors: action.payload
            }
        case userTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.payload
            }
        case userTypes.SIGN_UP_ERRORS:
            return {
                ...state,
                signUpErrors: action.payload
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordError: action.payload
            }
        case userTypes.RESET_ALL_AUTH_FORMS:
            return {
                ...state,
                signUpSuccess: false,
                signUpErrors: [],
                signInSuccess: false,
                signInErrors: [],
                resetPasswordSuccess: false,
                resetPasswordError: []
            }
        default:
            return state;
    }
};

export default userReducer;
