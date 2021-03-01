import cartTypes from "./cart.types";

export const addToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem,
});