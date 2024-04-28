import { OrderContainer, Title } from "../../components/Cart/StyledComponents";
import CartItems from "./CartDetails";
import CalcTotal from "./CalcTotal";
import Confirm from "./Confirm";
import { CartContentContext } from "../../components/Cart/CartContentContext";
import { useContext } from "react";

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