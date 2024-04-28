import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import CartItem from "./CartItem";

// Populates the cart with items from the CartItem component
const CartItems = () => {
  const { cart } = useContext(CartContentContext);

  return (
    <>
      {cart.length === 0 ? null : cart.map((item) => <CartItem item={item} />)}
    </>
  );
};

export default CartItems;
