import commentTypes from './comments.types';

const INITIAL_StATE = {
    comments: [],
};

const commentsReducer = (state = INITIAL_StATE, action) => {
  switch(action.type) {
    case commentTypes.SET_COMMENTS: 
        return {
            ...state,
            comments: action.payload,
        }
    default:
        return state;
        
  }
}

export default commentsReducer;
