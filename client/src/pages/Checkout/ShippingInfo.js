import {
  ShippingInfoContainer,
  Country,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";
import { countryOptions } from "./countryOptions";

const ShippingInfo = () => {
  return (
    <>
      <ShippingInfoContainer>
        <Header>Shipping Information</Header>

        <FormGroup>
          <Label htmlFor="country">Country:</Label>
          <Country name="country" id="country" defaultValue="Canada" required>
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Country>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="province-state">Province / State:</Label>
          <Input
            type="text"
            name="province-state"
            id="province-state"
            placeholder="Quebec"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City:</Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="Montreal"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="1234 Boulevard Broken Dreams"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="zip">Zip/Postal Code:</Label>
          <Input
            type="text"
            name="zip"
            id="zip"
            placeholder="H1W 2E3"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(514) 123-4567"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Johnsmith@email.com"
            required
          />
        </FormGroup>
      </ShippingInfoContainer>
    </>
  );
};
export default ShippingInfo;
