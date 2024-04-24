import styled from "styled-components";

const PaymentMethods = () => {
  return (
    <>
      <PayMethodContainer></PayMethodContainer>
    </>
  );
};
export default PaymentMethods;

const PayMethodContainer = styled.div`
  grid-area: method;
  background: var(--box-color);
  padding: 20px;
`;
