import { OrderContainer, Title, OrderEmpty, OrderDetails } from "./StyledComponents"
import CartItems from "../../components/Cart/CartItems";
import CalcTotal from "./CalcTotal";
import Confirm from "./Confirm";

import { CartContentContext } from "../../components/Cart/CartContentContext";
import { useContext } from "react";

const OrderSummary = () => {
  const { cart } = useContext(CartContentContext);

  return (
    <OrderContainer>
  
      <Title>Order Summary :</Title>

      {cart.length === 0 || !cart ? (
        <OrderEmpty>Your cart is empty</OrderEmpty>
      ) : (
        <OrderDetails>
          <CartItems />
          <CalcTotal />
          <Confirm />
        </OrderDetails>
      )}
    </OrderContainer>
  );
};

export default OrderSummary;


