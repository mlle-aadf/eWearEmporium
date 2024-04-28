// CHECKOUT - related styled components
import styled from "styled-components";


// CHECKOUT.js
export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  grid-template-areas:
    "info cart"
    "method cart";
  margin: 200px 100px;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "info" "method" "cart";
  }
`;
// SHIPPING_INFO.js
export const ShippingInfoContainer = styled.div`
  grid-area: info;
  background: var(--box-color);
  padding: 20px;
`;

export const Country = styled.input`
  padding: 5px;
  margin: 5px 0;
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

export const PayMethodContainer = styled.div`
  grid-area: method;
  background: var(--box-color);
  padding: 20px;
`;

// ORDER_SUMMARY.js
export const OrderContainer = styled.div`
  grid-area: cart;
  background: var(--box-color);
  padding: 20px;
  width: 70%;
  margin-left: 30%;
  height: fit-content;

  @media (max-width: 1500px) {
    width: 100%;
    margin-left: 0%;
  }
`;

export const Title = styled.h2`
  border-bottom: 4px solid white;
  margin: 0.5rem 1rem;
  padding-bottom: 1rem;
`;

export const OrderEmpty = styled.p`
    margin: 1rem;
`;

export const OrderDetails = styled.div`
  padding: 0 0.5rem 1rem 0.5rem;
`;

// CALC_TOTAL.js
export const CalcContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  width: 95%;
`;
export const Subtotal = styled.p`
  border-bottom: 1px solid var(--nav-bar-color);
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  text-align: justify;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  `;

export const Taxes = styled.p`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Shipping = styled.p`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--nav-bar-color);
    
  `;

export const Total = styled.p`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  font-size: 1.5rem;

`;

// CONFIRM.js
export const ConfirmBTN = styled.button`
  border-radius: 25px;
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent-color);
  background-color: white;
  cursor: pointer;
  float: right;
  margin-right: 0.5rem;
  
  &:hover{
    background-color: var(--accent-color);
    scale: 105%
  }

`;
