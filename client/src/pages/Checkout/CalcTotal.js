import { useContext } from "react";
import { CartContentContext } from "../../components/Cart/CartContentContext";
import {
  CalcContainer,
  Subtotal,
  Taxes,
  Shipping,
  Total,
} from "../../components/Cart/StyledComponents";

const CalcTotal = () => {
  const { cart } = useContext(CartContentContext);
  const shippingCost = 15.0;
  const taxRate = 0.15;

  // Calculates the subtotal for the cart items
  const subTotal = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.data.price.replace("$", ""));
    return total + itemPrice * (item.quantity || 1);
  }, 0);

  const taxes = subTotal * taxRate;
  const total = subTotal + taxes + shippingCost;

  return (
    <CalcContainer>
      <Subtotal>{`Subtotal: $${subTotal.toFixed(2)}`}</Subtotal>
      <Taxes>{`+ ${taxRate * 100}% - HST / GST: $${taxes.toFixed(2)}`}</Taxes>
      <Shipping>{`+ Shipping & Handling: $${shippingCost}`}</Shipping>
      <Total>{`Total: $${Math.round(total).toFixed(2)}`}</Total>
    </CalcContainer>
  );
};

export default CalcTotal;
