export const cartItemExists = ({prevCartItems, nextCartItem}) => {
    return prevCartItems.find(cartItem => cartItem.productId === nextCartItem.productId);
};

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem,
}) => {
    const quantityIncrement = 1;

    const isItemExists = cartItemExists({
        prevCartItems, 
        nextCartItem
    });

    if (isItemExists) {
        return prevCartItems.map(cartItem => 
            cartItem.productId === nextCartItem.productId
            ? 
            {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        );
    };

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ];
};