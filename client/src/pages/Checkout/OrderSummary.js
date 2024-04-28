import {
  OrderContainer,
  Title,
} from "./StyledComponents";
import CartItems from "../../components/Cart/CartItems";
import CalcTotal from "./CalcTotal";
import Confirm from "./Confirm";
import { CartContentContext } from "../../components/Cart/CartContentContext";
import { useContext } from "react";

// Populates the order summary section of the page.
const OrderSummary = () => {
  const { cart } = useContext(CartContentContext);

  return (
    <OrderContainer>
      <Title>Order Summary :</Title>
      <CartItems />
      <CalcTotal />
      {/* Render Confirm only if cart is not empty */}
      {cart.length > 0 && <Confirm />}
    </OrderContainer>
  );
};

export default OrderSummary;
