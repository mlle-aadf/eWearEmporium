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

const FormContainer = styled.div`
  margin: 50px 0 0 0;
  padding: 100px 0;
  text-align: center;
`

const H1 = styled.h1`
  font-size: 50px;
  text-decoration: underline;
  font-weight: bold;
`

const H2 = styled.h2`
  font-style: italic;
  font-weight: bold;
  text-align: left;
  padding: 0 0 50px 15px;
`

const Label = styled.label`
  font-weight: bold;
  padding: 0 0 10px 0;
  font-size: large;
`

const HR = styled.hr`
  width: 75%;
  margin: auto;
`

const Div = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  margin: 0 150px 0 150px;
`

export default Login;

