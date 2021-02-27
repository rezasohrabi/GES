import { db } from './../../firebase/utils';

export const handleAddProduct = product => {
    return new Promise( (resolve, reject) => {
        db.collection('products')
        .doc()
        .set(product)
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    });
};

export const handleFetchProducts = ({filterType}) => {
    return new Promise( (resolve, reject) => {
        let docs = db.collection('products').orderBy('createdDate');
        if(filterType) docs = docs.where('productCategory', '==', filterType); 
        docs
        .get()
        .then( snapshot => {
            const productsData = snapshot.docs.map( doc => {
                return {
                    ...doc.data(),
                    productId: doc.id
                }
            });
            resolve(productsData);
        })
        .catch((err) => {
            reject(err);
        });
    });
};

export const handleDeleteProduct = productId => {
    return new Promise( (resolve, reject) => {
        db.collection('products')
        .doc(productId)
        .delete()
        .then( () => {
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    });
}