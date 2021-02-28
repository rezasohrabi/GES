import productTypes from './products.types';

export const addNewProductStart = product => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: product,
});

export const fetchProductsStart = (filters ={}) => ({
    type: productTypes.FETCH_PRODUCTS_START,
    payload: filters
});

export const deleteProductStart = productId => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productId,
});

export const fetchProductStart = productId => ({
    type: productTypes.FETCH_PRODUCT_START,
    payload: productId
})

export const setProducts = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products,
});

export const setProduct = product => ({
    type: productTypes.SET_PRODUCT,
    payload: product,
})
