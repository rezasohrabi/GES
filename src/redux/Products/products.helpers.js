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

export const handleFetchProducts = ({filterType, startAfterDoc, persistProducts=[]}) => {
    return new Promise( (resolve, reject) => {
        const pageSize = 6;
        let docs = db.collection('products').orderBy('createdDate', 'desc').limit(pageSize);
        if(filterType) docs = docs.where('productCategory', '==', filterType);
        if(startAfterDoc) docs = docs.startAfter(startAfterDoc);
        docs
        .get()
        .then( snapshot => {
            const totalCount = snapshot.size;
            console.log('total',totalCount)

            const data = [
                ...persistProducts,
                ...snapshot.docs.map( doc => {
                    return {
                        ...doc.data(),
                        productId: doc.id
                    }
                }),
            ];

            resolve({
                data,
                queryDoc: snapshot.docs[totalCount - 1],
                isLastPage: totalCount < 1
            });
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