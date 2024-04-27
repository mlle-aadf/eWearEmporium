import { createContext, useState } from "react";

export const CartContentContext = createContext();

const CartContentProvider = ({children}) => {
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
    const removeFromCart = ({item, quantity}) => {
        
        console.log("currentCart: ", cart)
        console.log("removed item:", item, " QTY: ", quantity)

// **-------------- cart not updating ---------------------****  
        // const updatedCart = cart.filter((cartItem)=> cartItem.data._id !== item)
// ???? 
        // cart.forEach((cartItem) => console.log(cartItem.data._id))
        // setCart(updatedCart)

        // console.log("updated: ", cart)

    }

    return (
        <CartContentContext.Provider value={{cart, setCart, addToCart, removeFromCart, quantity}}>
            {children}
        </CartContentContext.Provider>
    );
};

export default CartContentProvider;