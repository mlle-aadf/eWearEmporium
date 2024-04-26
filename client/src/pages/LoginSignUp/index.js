import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "../../components/Footer";
import { LoggedInUserContext } from "./LoggedInUserContext";

import styled from "styled-components";

const LoginSignUp = () => {
  useEffect(() => {
    document.title = "Signup | Login";
  }, []);
  //Everything below is used for the log in
  const { logIn, loggedInUser } = useContext(LoggedInUserContext);
  const navigate = useNavigate(); // Hook to redirect user
  const [errorMessage, setErrorMessage] = useState(""); // State to display an error message to the user

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  }); //State to store what the user is typing in the front end

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }; // Handle any change in the login state

  const blankInputLI = loginInfo.email === "" || loginInfo.password === ""; // disabled the log in button if email or password is not filled

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      });
      if (response.ok) {
        const userData = await response.json();
        await logIn(userData);
        setErrorMessage(null);
        navigate("/");
      } else {
        const errorMessage = await response.text();
        setErrorMessage(`Log in failed: ${errorMessage}`); // Send an error message to the user
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again.");
    }
  };

  //Everything below is used for the sign up

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    postcode: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpMessage, setSignUpMessage] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const blankInputSU =
    !formData.fname ||
    !formData.lname ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword;

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const {
        fname,
        lname,
        phone,
        email,
        address,
        city,
        province,
        postcode,
        country,
        password,
        confirmPassword,
      } = formData;
      const response = await fetch("/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          phone,
          email,
          address,
          city,
          province,
          postcode,
          country,
          password,
          confirmPassword,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        await logIn(userData);
        setSignUpMessage("Your account has been created, you can now log in");
        setFormData({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          province: "",
          postcode: "",
          country: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        const errorMessage = await response.text();
        setSignUpMessage(`Sign up failed: ${errorMessage}`);
      }
    } catch (error) {
      setSignUpMessage("An error occurred, please try again.");
    }
  };
  return (
    <>
      <NavBar />
      <FormsLayout>
      <Login
        loginInfo={loginInfo}
        handleChange={handleChange}
        blankInputLI={blankInputLI}
        navigate={navigate}
        handleLogin={handleLogin}
      />
      <SignUp
        formData={formData}
        handleChangeForm={handleChangeForm}
        blankInputSU={blankInputSU}
        handleSignUp={handleSignUp}
        signUpMessage={signUpMessage}
      />
    </>
  );
};

const FormsLayout = styled.div`
  display: flex;
  flex-direction: row;
`

export default LoginSignUp;
