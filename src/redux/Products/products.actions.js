import productTypes from './products.types';

export const addNewProductStart = product => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: product,
});

export const fetchProductsStart = () => ({
    type: productTypes.FETCH_PRODUCTS_START
});

export const deleteProductStart = productId => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productId,
});

export const setProducts = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products,
});
