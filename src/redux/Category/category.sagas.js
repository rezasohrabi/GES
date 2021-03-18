import {all, call, put, takeLatest} from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import categoryTypes from './../Category/category.types';
import { fetchCategoriesStart, setCategories } from './category.actions';
import { handleAddCategory, handleFetchCategories } from './category.helpers';

export function* fetchCategories() {
    try {
        const categories = yield handleFetchCategories()
        yield put(
            setCategories(categories)
        );
    } catch(err) {
        console.error(err);
    }
}

export function* onFetchCategoriesStart() {
    yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories)
}

export function* addCategory({payload}) {
    try{
        const timeStamp = new Date();
        yield handleAddCategory({
            ...payload,
            adminUserUid: auth.currentUser.uid,
            createdDate: timeStamp,
        });
        yield put(
            fetchCategoriesStart()
        );
    } catch(err) {
        console.error(err);
    }
}

export function* onAddCategoryStart() {
    yield takeLatest(categoryTypes.ADD_CATEGORY_START, addCategory);
}

export default function* categorySagas() {
    yield all([
        call(onAddCategoryStart),
        call(onFetchCategoriesStart)
    ]);
};
