import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { LoggedInUserContext } from "./LoggedInUserContext";
import Login from "./Login";
import SignUp from "./SignUp";

// Generates the log in / Sign up page.
const LoginSignUp = () => {
  useEffect(() => {
    document.title = "Signup | Login";
  }, []);
  //Everything below is used for the log in
  const { logIn } = useContext(LoggedInUserContext);
  const navigate = useNavigate(); // Hook to redirect user
  const [errorMessage, setErrorMessage] = useState(""); // State to display an error message to the user
  const [buttonText, setButtonText] = useState("Login"); // Will update the login button to give info to the user

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  }); //State to store what the user is typing in the front end

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }; // Handle any change in the login state

  const blankInputLI = loginInfo.email === "" || loginInfo.password === ""; // disabled the log in button if email or password is not filled

  // Log in the user
  const handleLogin = async (event) => {
    event.preventDefault();
    setButtonText("Getting your info");
    try {
      const response = await fetch("https://e-wear.vercel.app/api/login", {
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
        const error = await response.text();
        const message = JSON.parse(error).message;
        setButtonText("Failed to log in");
        setErrorMessage(`Log in failed: ${message}`); // Send an error message to the user
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again.");
    }
  };

  //Everything below is used for the sign up
  const [btnTextSignup, setBtnTextSignup] = useState("Register");
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

  // Updates the user data on signup
  const handleSignUp = async (event) => {
    event.preventDefault();
    setBtnTextSignup("Creating your account!");
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
      const response = await fetch("https://e-wear.vercel.app/api/signUp", {
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
        setSignUpMessage("Your account has been created, you can now login");
        setBtnTextSignup("Done!");
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
        setSignUpMessage(`Sign up failed: ${JSON.parse(errorMessage).message}`);
        setBtnTextSignup("Sign up failed!");
      }
    } catch (error) {
      setSignUpMessage("An error occurred, please try again.");
    }
  };
  return (
    <>
      <NavBar />
      <FormsLayout>
        <H2>
          Empower Your Everyday
          <TextBreak />
          with Wearable Technology
        </H2>
        <Forms>
          <Login
            loginInfo={loginInfo}
            handleChange={handleChange}
            blankInputLI={blankInputLI}
            navigate={navigate}
            handleLogin={handleLogin}
            errorMessage={errorMessage}
            buttonText={buttonText}
          />
          <SignUp
            formData={formData}
            handleChangeForm={handleChangeForm}
            blankInputSU={blankInputSU}
            handleSignUp={handleSignUp}
            signUpMessage={signUpMessage}
            btnTextSignup={btnTextSignup}
          />
        </Forms>
      </FormsLayout>
      <Footer />
    </>
  );
};

const FormsLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  margin: 0 8rem;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const Forms = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  font-style: italic;
  font-weight: bold;
  padding: 12vh 0 2rem 0;
  align-self: center;

  @media (max-width: 500px) {
    padding: 8vh 0 2vh 0;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    padding: 11vh 0 2vh 0;
  }
`;

const TextBreak = styled.br`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

export default LoginSignUp;
