import styled from "styled-components";
import { CartContentContext } from "./CartContentContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const { cart, quantity } = useContext(CartContentContext);
  const navigate = useNavigate();
  const handleCheckout = ()=> {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <>
          <CartItemContainer key={item.data._id}>
            <ItemImage src={item.data.imageSrc} alt={item.data.name} />
            <ItemDetails>
              <h3>{item.data.name}</h3>
              <p>Price: {item.data.price}</p>
              <p>Quantity: {quantity}</p>
            </ItemDetails>
          </CartItemContainer>
          <CheckoutBtn onClick={handleCheckout}>Checkout</CheckoutBtn>
        </>
        ))
      )}
    </div>
  );
};

<<<<<<< HEAD
=======
const CartItemContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1rem;
  z-index: 2000;
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

const CheckoutBtn = styled.div`
  padding: 5px 5px;
  background-color: var(--nav-bar-color);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;


>>>>>>> 0d0635f2a718e7d6d49e0498f738a23c22eb8873
export default CartItem;
