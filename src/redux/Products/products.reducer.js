import productTypes from './products.types';

const INITIAL_STATE = {
    products: [],
    filteredProducts: [],
    product: {}
}

const productReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case productTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload,
            }
        case productTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case productTypes.SEARCH_PRODUCTS:
            return {
                ...state,
                filteredProducts: {
                    ...state.products,
                    data: state.products.data.filter(product => {
                        return product
                        .productName
                        .toLowerCase()
                        .includes(action.payload.toLowerCase().trim());
                    })
                }
            }
        default:
            return state;
    };
};

export default productReducer;