import {
  CartDetailsContainer,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";
import styled from "styled-components";
import { CartContentContext } from "../../components/Cart/CartContentContext";
import { useContext } from "react";

const PriceTotal = () => {
  const { cart, quantity } = useContext(CartContentContext);
  console.log("This is cart: ", cart);
  return (
    <>
      <CartDetailsContainer>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <>
          <CartItemContainer key={item.data._id}>
            <ItemImage src={item.data.imageSrc} alt={item.data.name} />
            <ItemDetails>
              <p>{item.data.name}</p>
              <p>Price: {item.data.price}</p>
              <p>Quantity: {quantity}</p>
            </ItemDetails>
          </CartItemContainer>
        </>
        ))
      )}
      </CartDetailsContainer>
    </>
  );
};
export default PriceTotal;

const CartItemContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1rem;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;
