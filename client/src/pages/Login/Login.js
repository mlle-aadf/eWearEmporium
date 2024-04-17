import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    useEffect(() => {
        document.title = "Signup | Login"
    }, []);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loginPassword, setLoginPassword] = useState("");



    const userFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const userLastName = (event) => {
        setLastName(event.target.value);
    };

    const userEmail = (event) => {
        setEmail(event.target.value);
    };

    const userLoginEmail = (event) => {
        setLoginEmail(event.target.value);
    };

    const userPhone = (event) => {
        setPhone(event.target.value);
    };

    const userPassword = (event) => {
        setPassword(event.target.value);
    };

    const userLoginPassword = (event) => {
        setLoginPassword(event.target.value);
    };

    const blankInputSU = !firstName || !lastName || !email || !password;

    const blankInputLI = !loginEmail || !loginPassword;


    return(
// [ ] separate forms (one for each) on same page, or render components conditionally based on user selection
// [ ] redirects user to homepage, indicate "logged in" status somehow in the navbar/header(?)*
//*Once user is logged in, display the user's first name in the navbar

//STRETCH
// [ ] cart retrieves previous user saved items
// [ ] option to view past orders (?)
<>
    <h1>E-WEAR <br/> EMPORIUM</h1>
        <form className="form">
        <h2 style={{textDecoration: "underline"}}>Sign Up</h2>
        <p>Create an account to take advantage of all the benefits we have to offer!</p>
    <br/>
        <label>First Name: </label>
    <br/>
        <input className="input-field" type="text" value={firstName} onChange= {userFirstName} placeholder="E.g. John" required></input>
    <br/>
    <br/>
        <label>Last Name: </label>
        <br/>
        <input className="input-field" type="text" value={lastName} onChange=   {userLastName} placeholder="E.g. Doe" required></input>
    <br/>
    <br/>
        <label>Email Address: </label>
    <br/>
        <input className="input-field" type="text" value={email} onChange={userEmail} placeholder="E.g. john.doe@email.com" required></input>
    <br/>
    <br/>
        <label>Phone Number (Optional): </label>
    <br/>
        <input className="input-field" type="text" value={phone} onChange={userPhone} placeholder="E.g. (123) 456-789"></input>
    <br/>
    <br/>
        <label>Password: </label>
    <br/>
        <input className="input-field" type="password" value={password} onChange={userPassword} required></input>
    <br/>
    <br/>
        <button className="website-btn" type="submit" disabled={blankInputSU}>Register</button>
    <br/>
    </form>
    <br/>
    <hr/>

        <form className="form">
        <h2 style={{textDecoration: "underline"}}>Login</h2>
    <br/>
        <label>Email Address: </label>
    <br/>
        <input className="input-field" type="text" value={loginEmail} onChange= {userLoginEmail} placeholder="E.g. Your email address"></input>
    <br/>
    <br/>
        <label>Password: </label>
    <br/>
        <input className="input-field" type="password" value={loginPassword} onChange={userLoginPassword}></input>
    <br/>
    <br/>
        <Link to="/">
        <button className="website-btn" disabled={blankInputLI}>Login</button>
        </Link> 
    <br/>
        </form>
            </>
    )
}

export default Login