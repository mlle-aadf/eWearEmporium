import {
  PayMethodContainer,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";

// Payment info for user
const PaymentMethods = () => {
  return (
    <>
      <PayMethodContainer>
        <Header>Payment Method:</Header>

        <FormGroup>
          <Label htmlFor="card-numbers">Credit Card Numbers:</Label>
          <Input
            type="tel"
            name="card-numbers"
            id="card-numbers"
            minLength={15}
            maxLength={19}
            placeholder="0000 1234 4567 7890"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ccv">CVV:</Label>
          <Input
            type="tel"
            name="ccv"
            id="ccv"
            minLength={3}
            maxLength={4}
            required
            placeholder="000"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="card-name">Name On Card:</Label>
          <Input
            type="text"
            name="card-name"
            id="card-name"
            placeholder="John Smith"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="card-expiration">Expiration Date:</Label>
          <Input
            type="text"
            name="card-expiration"
            id="card-expiration"
            maxLength={5}
            placeholder="MM/YY"
            required
          />
        </FormGroup>
      </PayMethodContainer>
    </>
  );
};
export default PaymentMethods;
