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
            const categories = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    categoryId: doc.id,
                };
            });
            resolve(categories);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export const handleRemoveCategory = categoryId => {
    return new Promise((resolve, reject) => {
        db.collection('categories')
        .doc(categoryId)
        .delete()
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        })
    });
}
