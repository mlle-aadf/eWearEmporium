import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import { CartItemContainer, ItemImage, ItemDetails, ItemName, PriceQTY } from "./StyledComponents";
import Delete from "./Delete";

const CartItem = ({item}) => {
  const {quantity } = useContext(CartContentContext);

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={item.data.imageSrc} alt={item.data.name} />
        <ItemName>{item.data.name}</ItemName>
      </ItemDetails>
        <PriceQTY>
          <p style={{fontSize:"1.5rem", marginTop:"0.5rem"}}>{item.data.price}</p>
          <p style={{fontSize:"1rem", marginTop:"-3rem"}}>QTY: {quantity}</p>
        </PriceQTY>
      <Delete itemID={`${item.data._id}`} quantity={quantity} />
    </CartItemContainer>
  )
};

export default CartItem;
