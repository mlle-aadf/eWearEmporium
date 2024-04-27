// CHECKOUT - related styled components

import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  grid-template-areas:
    "info cart"
    "method cart";
  margin: 200px 100px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas: "info" "method" "cart";
  }
`;

export const ShippingInfoContainer = styled.div`
  grid-area: info;
  background: var(--box-color);
  padding: 20px;
`;

export const PayMethodContainer = styled.div`
  grid-area: method;
  background: var(--box-color);
  padding: 20px;
`;

export const Header = styled.h2`
  grid-column: 1 / -1;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

export const Country = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

export const ConfirmBTN = styled.button``;
