import {
  Button,
  Description,
  Form,
  FormGroup,
  Input,
  Label,
  Message,
  Title,
} from "./StyledComponents";

// Sign up section of the page.
const SignUp = ({
  formData,
  handleChangeForm,
  blankInputSU,
  handleSignUp,
  signUpMessage,
  btnTextSignup,
}) => {
  return (
    <Form onSubmit={handleSignUp}>
      <Title>Sign Up</Title>
      <Description>Create an account for full perks!</Description>
      <FormGroup>
        <Label htmlFor="fname">First Name:</Label>
        <Input
          id="fname"
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChangeForm}
          placeholder="E.g. John"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lname">Last Name:</Label>
        <Input
          id="lname"
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChangeForm}
          placeholder="E.g. Doe"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email Address:</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeForm}
          placeholder="E.g. john.doe@email.com"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone">Phone Number:</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChangeForm}
          placeholder="E.g. (123) 456-789"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address">Address:</Label>
        <Input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChangeForm}
          placeholder="E.g. 123 Main St"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="city">City:</Label>
        <Input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChangeForm}
          placeholder="E.g. New York"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="province">Province:</Label>
        <Input
          id="province"
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChangeForm}
          placeholder="E.g. NY"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="postcode">Postcode:</Label>
        <Input
          id="postcode"
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChangeForm}
          placeholder="E.g. 10001"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="country">Country:</Label>
        <Input
          id="country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChangeForm}
          placeholder="E.g. USA"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChangeForm}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChangeForm}
          required
        />
      </FormGroup>
      <Button type="submit" disabled={blankInputSU}>
        {btnTextSignup}
      </Button>
      <Message>{signUpMessage}</Message>
    </Form>
  );
};

export default SignUp;
