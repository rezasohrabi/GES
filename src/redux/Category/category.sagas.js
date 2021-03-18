import {all, call, put, takeLatest} from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import categoryTypes from './../Category/category.types';
import { handleAddCategory } from './category.helpers';

export function* addCategory({payload}) {
    try{
        const timeStamp = new Date();
        yield handleAddCategory({
            ...payload,
            adminUserUid: auth.currentUser.uid,
            createdDate: timeStamp,
        });
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
    ]);
};
