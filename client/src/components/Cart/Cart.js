import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <CartShop>
        <CartItem />
      </CartShop>
    </>
  );
};

export default Cart;

const CartShop = styled.div`
  position: fixed;
  top: clamp(60px, calc(3.75rem + ((1vw - 7.69px) * 1.7376)), 80px);
  right: clamp(60px, calc(3.75rem + ((1vw - 7.69px) * 1.7376)), 80px);
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  z-index: 2000;
  width: 30%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
