import { Button, Description, Form, FormGroup, Input, Label, Message, Title } from "./StyledComponents";

// Log in section of the page, allows the user to use credentials to log in.
const Login = ({
  loginInfo,
  handleChange,
  blankInputLI,
  handleLogin,
  errorMessage,
  buttonText,
}) => {
  return (
    <>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Description>Log back in and continue exploring!</Description>

        <FormGroup>
          <Label>Email Address: </Label>
          <Input
            className="input-field"
            type="text"
            value={loginInfo.email}
            name="email"
            onChange={handleChange}
            placeholder="E.g. Your email address"
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Password: </Label>
          <Input
            className="input-field"
            type="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <Button className="website-btn" disabled={blankInputLI}>
          {buttonText}
        </Button>
        <Message>{errorMessage}</Message>
      </Form>
    </>
  );
};

export default Login;

