import styled from "styled-components";

const Login = ({ loginInfo, handleChange, blankInputLI, handleLogin }) => {
    return (
        <>
            <FormContainer>
                <form className="form" onSubmit={handleLogin}>
                    <h2 style={{ textDecoration: "underline" }}>Login</h2>
                    <br />
                    <label>Email Address: </label>
                    <br />
                    <input className="input-field" type="text" value={loginInfo.email} name="email" onChange={handleChange} placeholder="E.g. Your email address"></input>
                    <br />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input className="input-field" type="password" value={loginInfo.password} name="password" onChange={handleChange}></input>
                    <br />
                    <br />
                    <button className="website-btn" disabled={blankInputLI}>Login</button>
                    <br />
                </form>
            </FormContainer>
            <hr />
        </>
    );
};

export default Login;

const FormContainer = styled.div`
padding: 100px 0;
`;