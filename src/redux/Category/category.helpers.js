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

export const handleFetchCategories = () => {
    return new Promise((resolve, reject) => {
        db.collection('categories')
        .get()
        .then(snapshot => {
            const categories = snapshot.docs.map(doc => doc.data())
            resolve(categories);
        })
        .catch((err) => {
            reject(err);
        })
    })
}
