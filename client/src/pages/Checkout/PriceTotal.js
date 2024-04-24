import styled from "styled-components";

const PriceTotal = () => {
  return (
    <>
      <PriceTotalContainer></PriceTotalContainer>
    </>
  );
};

export default PriceTotal;

const PriceTotalContainer = styled.div`
  grid-area: price;
  background: var(--box-color);
  padding: 20px;
`;
