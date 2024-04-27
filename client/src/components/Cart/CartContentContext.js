import { createContext, useState } from "react";

export const CartContentContext = createContext();

const CartContentProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    // adds item to cart
    const addToCart = (item) => {
        // Check if the item is already in the cart by using the findIndex method
        const existingItemIndex = cart.findIndex(cartItem => cartItem.data._id === item.data._id);
    
        if (existingItemIndex > -1) {
            // If item exists, update its quantity in the cart
            const updatedCart = [...cart];
            updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + 1 };
            setCart(updatedCart);
        } else {
            // If item does not exist, add it to the cart with quantity set to 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

  // removes item (and corresponding quantity) from cart, updates mongo db
  const removeFromCart = ({ item }) => {
    // Find the index of the item in the cart
    const itemIndex = cart.findIndex(cartItem => cartItem.data._id === item.data._id);

    if (itemIndex === -1) {
        // If the item is not found in the cart, do nothing
        return;
    }

    // If the quantity of the item is 1, remove it from the cart
    if (cart[itemIndex].quantity === 1) {
        // If item exists and its quantity is 1, remove it from the cart
        const updatedCart = cart.filter((_, index) => index !== itemIndex);
        setCart(updatedCart);
    } else {
        // If the quantity is more than 1, update the quantity by subtracting 1
        const updatedCart = [...cart];
        updatedCart[itemIndex] = { ...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity - 1 };
        setCart(updatedCart);
    }
};



    return (
        <CartContentContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContentContext.Provider>
    );
};

export default CartContentProvider;
