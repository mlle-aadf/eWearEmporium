import styled from "styled-components";

const Login = ({ loginInfo, handleChange, blankInputLI, handleLogin, errorMessage, buttonText}) => {
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
            {buttonText}
          </button>
          <br />
        </form>
        <p>{errorMessage}</p>
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
  text-align: center;
`

const H1 = styled.h1`
  font-size: 40px;
  text-decoration: underline;
  font-weight: bold;
`

const H2 = styled.h2`
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  padding: 0 0 50px 15px;
`

const Label = styled.label`
  font-weight: bold;
  padding: 0 0 10px 0;
  font-size: large;
`

const HR = styled.hr`
  height: 75%;
  margin: auto;
`

const Div = styled.div`
  background-color: #e5e1d6;
  outline-style: solid;
  outline-color: black;
  border-radius: 10px;
  padding: 75px;
  margin: 0 50px 0 50px;
`
