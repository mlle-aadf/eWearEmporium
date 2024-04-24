import styled from "styled-components";

const BillingInfo = () => {
  return (
    <>
      <BillingInfoContainer> </BillingInfoContainer>
    </>
  );
};
export default BillingInfo;

const BillingInfoContainer = styled.div`
  grid-area: info;
  background: var(--box-color);
  padding: 40px;
`;
