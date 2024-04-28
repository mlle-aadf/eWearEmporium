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

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={item.data.imageSrc} alt={item.data.name} />
        <ItemName>{item.data.name}</ItemName>
      </ItemDetails>
      <PriceQTY>
        <CartItemPrice> {item.data.price}</CartItemPrice>
        <CartItemQuantity>QTY: {item.quantity}</CartItemQuantity>
      </PriceQTY>
      <Delete itemID={`${item.data._id}`} quantity={item.quantity} />
    </CartItemContainer>
  );
};

export default CartItem;