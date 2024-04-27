import { createContext, useState } from "react";

export const CartContentContext = createContext();

const CartContentProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    // adds item to cart
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


    // removes item (and corresponding quantity) from cart, updates mongo db
    const removeFromCart = ({ item }) => {
        // Find the index of the item in the cart
        const itemIndex = cart.findIndex(cartItem => cartItem.data._id === item.data._id);

        if (itemIndex === -1) {
            // If the item is not found in the cart, do nothing
            return;
        }

        const updatedCart = [...cart];
        updatedCart[itemIndex] = { ...updatedCart[itemIndex]};
        setCart(updatedCart);

        // Decrement total quantity by 1 and check if quantity is zero then remore item from cart
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            if (newQuantity === 0) {
                // Remove item from cart
                const updatedCart = cart.filter((_, index) => index !== itemIndex);
                setCart(updatedCart);
            }
            return newQuantity;
        });
    };



    return (
        <CartContentContext.Provider value={{ cart, setCart, addToCart, removeFromCart, quantity }}>
            {children}
        </CartContentContext.Provider>
    );
};

export default CartContentProvider;