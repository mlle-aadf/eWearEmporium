import { createContext, useState } from "react";

export const CartContentContext = createContext();

const CartContentProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (item) => {
        // Check if the item is already in the cart by using the findIndex method
        const existingItemIndex = cart.findIndex(cartItem => cartItem.data._id === item.data._id);

        if (existingItemIndex > -1) {
            // If item exists doesn't change the cart
            const updatedCart = [...cart];
            setCart(updatedCart);
        } else {
            // If item does not exist, add it
            setCart([...cart, { ...item }]);
        }

        // Increment total quantity by 1
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <CartContentContext.Provider value={{cart, setCart, addToCart, quantity}}>
            {children}
        </CartContentContext.Provider>
    );
};

export default CartContentProvider;