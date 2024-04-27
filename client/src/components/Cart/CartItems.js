import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cart } = useContext(CartContentContext);

  return (
    <>
      {cart.length === 0 ? null : cart.map((item) => <CartItem item={item} />)}
    </>
  );
};

export default CartItems;
