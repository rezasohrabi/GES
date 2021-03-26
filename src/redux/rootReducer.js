import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './User/user.reducer';
import productReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import appReducer from './App/app.reducer';
import categoryReducer from './Category/category.reducer';
import commentsReducer from './Comments/comments.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productReducer,
    cartData: cartReducer,
    appData: appReducer,
    categoryData: categoryReducer,
    commentData: commentsReducer,
});

const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cartData']
};

export default persistReducer(configStorage, rootReducer);
