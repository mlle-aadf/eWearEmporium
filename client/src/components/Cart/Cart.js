import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import CartDetails from "../../pages/Checkout/CartDetails";
import {CartContainer, YourCart, CheckoutBtn, Empty} from "../Cart/StyledComponents"

const Cart = ({ isVisible }) => {
  const {cart} = useContext(CartContentContext);
  
  if (!isVisible) return null;

  return (
    <>
      <CartContainer>
        <YourCart>Your Cart</YourCart>
        {cart.length === 0 
        ? <Empty>Your cart is empty.</Empty>
        : <CartDetails/>}
        <CheckoutBtn to={"/checkout"} className={cart.length === 0 ? "invisible" : "visible"}>Checkout</CheckoutBtn>
      </CartContainer>
    </>
  );
};

export default Cart;
