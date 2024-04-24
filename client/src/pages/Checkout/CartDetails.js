import styled from "styled-components";

const CartDetails = () => {
  return (
    <>
      <CartDetailsContainer></CartDetailsContainer>
    </>
  );
};
export default CartDetails;

const CartDetailsContainer = styled.div`
  grid-area: cart;
  background: var(--box-color);
  padding: 20px;
`;
