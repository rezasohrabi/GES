import CategoryTypes from "./category.types";

const INITIAL_STATE = {
    categories: [],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default categoryReducer;