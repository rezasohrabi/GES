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

export const handleFetchProducts = ({filterType, startAfterDoc, persistProducts=[], category}) => {
    return new Promise( (resolve, reject) => {
        const pageNum = 6;
        let docs = db.collection('products').orderBy('createdDate', 'desc');
        if(filterType) docs = docs.where('productMenu', '==', filterType);
        if(category) docs = docs.where('productCategory', '==', category)
        if(startAfterDoc) docs = docs.limit(pageNum).startAfter(startAfterDoc);
        docs
        .get()
        .then( snapshot => {
            const totalCount = snapshot.size;

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

export const handleFetchProduct = productId => {
    return new Promise( (resolve, reject) => {
        db.collection('products')
        .doc(productId)
        .get()
        .then( snapshot => {

            if(snapshot.exists) {
                resolve(
                    snapshot.data()
                );
            }

        }).catch( err => {
            reject(err);
        })
    });
}
