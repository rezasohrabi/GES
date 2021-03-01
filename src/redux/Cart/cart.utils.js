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

export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
}) => {
    return prevCartItems.filter( cartItem => 
        cartItem.productId !== cartItemToRemove
        );
}

export const handleDecreaseCartItemQuantity = ({
    prevCartItems,
    cartItemToDecrease,
}) => {
    const existingCartItem = prevCartItems.find(cartItem =>
        cartItem.productId === cartItemToDecrease.productId);

    if (existingCartItem.quantity === 1) {
        return prevCartItems.filter( cartItem => 
          cartItem.productId !== existingCartItem.productId  
        );
    }

    return prevCartItems.map(cartItem => 
        cartItem.productId === existingCartItem.productId? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
        } : 
        cartItem
    );
}