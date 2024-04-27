import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import CartDetails from "../../pages/Checkout/CartDetails";
import {
  CartContainer,
  YourCart,
  CheckoutBtn,
  Empty,
} from "../Cart/StyledComponents";

const Cart = ({ isVisible }) => {
  const { cart } = useContext(CartContentContext);

  // If isVisible is false, don't render the Cart component
  if (!isVisible) return null;

  return (
    <>
      <CartContainer>
        {/* Ternary operation to check if the cart is empty and display appropriate content */}
        <YourCart>Your Cart</YourCart>
        {cart.length === 0 ? (
          <Empty>Your cart is empty.</Empty>
        ) : (
          <CartDetails />
        )}
        <CheckoutBtn
          to={"/checkout"}
          className={cart.length === 0 ? "invisible" : "visible"}
        >
          Checkout
        </CheckoutBtn>
      </CartContainer>
    </>
  );
};

export default Cart;
