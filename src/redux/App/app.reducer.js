import appTypes from "./app.types";

const INITIAL_STATE = {
    isOpenMobileMenu: false,
};

const appReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case appTypes.OPEN_MOBILE_MENU:
            return {
                ...state,
                isOpenMobileMenu: !state.isOpenMobileMenu
            }
        default :
            return state;
    }
}

export default appReducer;