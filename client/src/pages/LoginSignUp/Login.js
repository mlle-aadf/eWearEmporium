import styled from "styled-components";

const Login = ({ loginInfo, handleChange, blankInputLI, handleLogin }) => {
  return (
    <>
      <FormContainer>
      <H2>
          Empower Your Everyday with Wearable Technology
      </H2>
        <Div>
        <form className="form" onSubmit={handleLogin}>
          <H1>Login</H1>
          <h3>
          Log back in and continue exploring!
          </h3>
          <br />
          <br/>
          <Label>Email Address: </Label>
          <br />
          <input
            className="input-field"
            type="text"
            value={loginInfo.email}
            name="email"
            onChange={handleChange}
            placeholder="E.g. Your email address"
          ></input>
          <br />
          <br />
          <Label>Password: </Label>
          <br />
          <input
            className="input-field"
            type="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <button className="website-btn" disabled={blankInputLI}>
            Login
          </button>
          <br />
        </form>
        </Div>
      </FormContainer>
      <HR />
    </>
  );
};

export default Login;

const FormContainer = styled.div`
  margin: 50px 0 0 0;
  padding: 100px 0;
`;
