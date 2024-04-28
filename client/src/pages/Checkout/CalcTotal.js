import { useContext } from "react";
import { CartContentContext } from "../../components/Cart/CartContentContext";
import {
  CalcContainer,
  Subtotal,
  Taxes,
  Shipping,
  Total,
} from "../Checkout/StyledComponents";

//This component will calculate the prices of the items added to the user's cart
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
      <Subtotal>
        <span>Item(s) Subtotal : </span>
        <span>{`$${subTotal.toFixed(2)}`}</span>
      </Subtotal>
      <Taxes>
        <span>{`+ ${taxRate * 100}%  (GST/PST)`}</span>
        <span>{`$${taxes.toFixed(2)}`}</span>
      </Taxes>
      <Shipping>
        <span>{`+ Shipping & Handling`}</span>
        <span>{`$${shippingCost.toFixed(2)}`}</span>
      </Shipping>
      <Total>
        <span>Total:</span> <span>{`$${Math.round(total).toFixed(2)}`}</span>
      </Total>
    </CalcContainer>
  );
};

export default CalcTotal;
