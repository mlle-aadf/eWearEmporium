import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
  PriceQTY,
  CartItemPrice,
  CartItemQuantity,
} from "./StyledComponents";
import Delete from "./Delete";

const CartItem = ({ item }) => {
  const { quantity } = useContext(CartContentContext);

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={item.data.imageSrc} alt={item.data.name} />
        <ItemName>{item.data.name}</ItemName>
      </ItemDetails>
      <PriceQTY>
        <CartItemPrice> {item.data.price}</CartItemPrice>
        <CartItemQuantity>QTY: {quantity}</CartItemQuantity>
      </PriceQTY>
      <Delete itemID={`${item.data._id}`} quantity={quantity} />
    </CartItemContainer>
  );
};

export default CartItem;
