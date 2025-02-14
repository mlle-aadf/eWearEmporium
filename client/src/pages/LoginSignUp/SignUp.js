import styled from "styled-components";

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
        <Description>
          Create an account to take advantage of all the benefits we have to
          offer!
        </Description>
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
          <Label htmlFor="phone">Phone Number (Optional):</Label>
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

// const SUContainer = styled.div`
// `;

const Form = styled.form`
  text-align: center;
  background-color: #e5e1d6;
  border-radius: 10px;
  padding: 0 50px;
  margin: 90px 50px 0 50px;

  height: 80%;

  @media (max-width: 500px) {
    padding: 20px;
    margin: 0 55px;
  }
`;

const Title = styled.h2`
  text-decoration: underline;
  padding-top: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 15px 0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  width: 200px;
  text-align: right;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  margin-left: 20px;
  border: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  color: red;
`;
