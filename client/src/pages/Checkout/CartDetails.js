import { CartContentContext } from "../../components/Cart/CartContentContext";
import { useContext } from "react";
import CartItem from "../../components/Cart/CartItem";

const CartItems = () => {
  const { cart } = useContext(CartContentContext);

  return (
    <>
      {cart.length === 0 ? null : cart.map((item) => (<CartItem item={item}/>))}
    </>
  );
};

export default CartItems;