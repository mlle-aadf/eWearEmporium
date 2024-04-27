// CART - related styled components
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

// CART.js
export const CartContainer = styled.div`
  position: fixed;
  top: clamp(60px, calc(3.75rem + ((1vw - 7.69px) * 1.7376)), 80px);
  right: clamp(60px, calc(3.75rem + ((1vw - 7.69px) * 1.7376)), 80px);
  width: 35vw;
  padding: 0.5rem;
  background-color: white;
  border-radius: 15px;
  border: solid 4px var(--nav-bar-color);
  z-index: 2000;

  @media (max-width: 768px) {
    width: 60vw;
  }
`;

export const YourCart = styled.h3`
  border-bottom: 3px solid var(--nav-bar-color);
  margin: 0.5rem auto 1rem 1rem;
  line-height: 3rem;
  width: 90%;
`;

export const Empty = styled.p`
  margin: 0.5rem auto 0.5rem 1rem;
`;

export const CheckoutBtn = styled(Link)`
  padding: 5px 5px;
  margin: 0.5rem 1.5rem 1rem 0;
  background-color: var(--nav-bar-color);
  color: black;
  width: 50%;
  float: right;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    scale: 105%;
  }
`;

// CART_ITEM.js
export const CartItemContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0.25rem auto;
  padding: 0.5rem;
  border-bottom: 2px solid var(--nav-bar-color);
  width: 95%;
`;

export const ItemDetails = styled.div`
  width: 90%;
  display: flex;
  margin-right: 0.5rem;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ItemName = styled.p`
  font-weight: 500;
  margin: 0 0 0.5rem;
`;

export const PriceQTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

export const CartItemPrice = styled.p`
  margin-top: 3rem;
`;

export const CartItemQuantity = styled.p``;

export const DeleteBTN = styled(TiDelete)`
  top: 1vw;
  right: 5%;
  width: 1.5rem; 
  height: 1.5rem; 
  cursor: pointer;
  position: absolute; 
`;

// ORDER_SUMMARY.js
export const OrderContainer = styled.div`
  grid-area: cart;
  background: var(--box-color);
  padding: 20px;
  width: 70%;
  margin-left: 30%;

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0%;
  }
`;
export const Title = styled.h3`
  border-bottom: 4px solid white;
  margin: 0.5rem 1rem;
  padding-bottom: 1rem;
`;

// CALC_TOTAL.js
export const CalcContainer = styled.div``;

export const Subtotal = styled.p``;
export const Taxes = styled.p``;
export const Shipping = styled.p``;
export const Total = styled.p``;
