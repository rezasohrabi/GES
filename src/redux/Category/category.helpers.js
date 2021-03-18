import { db } from './../../firebase/utils';

export const handleAddCategory = category => {
    return new Promise((resolve, reject) => {
        db.collection('categories')
        .doc()
        .set(category)
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    });
};
