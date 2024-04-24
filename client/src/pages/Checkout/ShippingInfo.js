import styled from "styled-components";
import { countryOptions } from "./countryOptions";

const ShippingInfo = () => {
  return (
    <>
      <ShippingInfoContainer>
        <h2>Shipping Information</h2>
        <label htmlFor="country">Country:</label>
        <Country name="country" id="country">
          {countryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Country>
      </ShippingInfoContainer>
    </>
  );
};
export default ShippingInfo;

const ShippingInfoContainer = styled.div`
  grid-area: info;
  background: var(--box-color);
  padding: 40px;
`;

const Country = styled.select`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
